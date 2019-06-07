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
      <Heading margin={false} level="2" size="small" margin="xsmall">
        {props.title}
      </Heading>
      {props.children}
    </Box>
  );
};
PageHeader.defaultProps = {
  border: { color: "light-1", side: "bottom", size: "small" },
  pad: "small",
  direction: "row",
  gap: "small",
  justify: "between"
};
