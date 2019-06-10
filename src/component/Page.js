import React from "react";
import { Box, Heading } from "grommet";

export const Page = props => {
  return <Box {...props} />;
};
Page.defaultProps = {
  pad: "small",
  background: "light-1",
  fill: "vertical"
};

export const PageHeader = props => {
  return (
    <Box {...props}>
      <Heading level="3" size="small">
        {props.title}
      </Heading>
      {props.children}
    </Box>
  );
};
PageHeader.defaultProps = {
  border: { color: "light-2", side: "bottom", size: "small" },
  margin: { bottom: "small" },
  direction: "row",
  gap: "small",
  justify: "between"
};
