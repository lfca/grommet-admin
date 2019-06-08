import React from "react";
import { Box, TextInput } from "grommet";
import * as Icons from "grommet-icons";

export const SearchForm = props => {
  return (
    <Box {...props}>
      <Box pad="small">
        <Icons.Search />
      </Box>
      <TextInput onChange={props.onChange} plain={true} />
    </Box>
  );
};

SearchForm.defaultProps = {
  direction: "row",
  align: "center",
  border: { color: "light-2" },
  round: "large"
};
