import React from "react";
import { Box, Button, Text, ThemeContext } from "grommet";
import * as Icons from "grommet-icons";
import PropTypes from "prop-types";

export const MenuButton = props => {
  return (
    <Box background="white">
      <ThemeContext.Extend
        value={{
          global: { colors: { doc: "#ff99cc" } },
          button: { border: { width: "1px" } }
        }}
      >
        <Button hoverIndicator="light-2" onClick={props.onClick}>
          <Box
            pad="small"
            border={{ color: "light-3" }}
            gap="small"
            direction="row"
            align="center"
          >
            <Icons.FormNextLink size="1em" />
            <Text>{props.label}2</Text>
          </Box>
        </Button>
      </ThemeContext.Extend>
      <Box pad="large" background="doc" />
    </Box>
  );
};

MenuButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export const VerticalMenu = props => {
  return (
    <Box {...props}>
      {props.items.map((item, idx) => (
        <ThemeContext.Extend
          value={{
            button: {
              border: {
                width: "1px",
                color: {
                  light: "light-4"
                  // dark: "dark-4"
                }
              },
              // background: "light-1",
              // extend: { },
              // extend: { background: "accent-1" },
              // color: { light: "dark-1", dark: "black" },
              primary: {
                color: { light: "white", dark: "black" }
              }
            },
            global: {
              hover: { color: { dark: "white", light: "white" } },
              edgeSize: {
                small: "0px"
              }
              // focus: { border: { color: "dark-4" } }
            }
          }}
        >
          <Button {...item} primary />
        </ThemeContext.Extend>
        // <MenuButton key={idx} {...item} />
      ))}
    </Box>
  );
};
VerticalMenu.defaultProps = {
  gap: "xxsmall",
  fill: true,
  items: []
};

VerticalMenu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func
    })
  ).isRequired
};
