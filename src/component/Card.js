import React from "react";
import { Box } from "grommet";

export const Card = props => {
  return <Box {...props}>{props.children}</Box>;
};

Card.defaultProps = {
  direction: "column",
  pad: "small",
  border: { size: "xsmall", color: "light-1" },
  elevation: "xsmall",
  gap: "small",
  background: "white"
};
