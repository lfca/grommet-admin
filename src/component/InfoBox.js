import React from "react";
import { Box, Text } from "grommet";

export const InfoBox = props => {
  return <Box {...props}>{props.children}</Box>;
};

InfoBox.defaultProps = {
  direction: "column",
  pad: "xsmall",
  //  border: { size: "xsmall", color: "light-1" },
  gap: "small"
};

export const InfoBoxItem = props => {
  return (
    <Box {...props}>
      <Text weight="bold">{props.label}</Text>
      <Text>{props.children}</Text>
    </Box>
  );
};

InfoBoxItem.defaultProps = {
  direction: "row",
  gap: "small",
  align: "center",
  pad: "xsmall"
};

export const InfoBoxHeader = props => {
  return (
    <Box {...props}>
      <Text>{props.children}</Text>
      {props.icon}
    </Box>
  );
};
InfoBoxHeader.defaultProps = {
  border: { side: "bottom", color: "light-2" },
  direction: "row",
  justify: "between",
  pad: "small"
};
