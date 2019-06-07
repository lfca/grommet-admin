import React from "react";
import { Card, SearchForm2 } from ".././../../component";
import { Box, Text } from "grommet";
import { observer } from "mobx-react";
import * as Icons from "grommet-icons";
import { Button } from "grommet";

const UserListItem = props => {
  const { user } = props;
  return (
    <Box {...props}>
      <Box direction="row" gap="small" align="center">
        <Box background="light-1" round="full" pad="small">
          <Icons.User size="1em" />
        </Box>
        <Text>{user.name}</Text>
      </Box>
      <Icons.CaretNext size="1em" />
    </Box>
  );
};

UserListItem.defaultProps = {
  border: { color: "light-2", side: "all", size: "xsmall" },
  pad: "small",
  justify: "between",
  direction: "row",
  align: "center"
};

export const UserList = observer(props => {
  return (
    <Card>
      <SearchForm2 />
      {props.users.map(user => (
        <Button hoverIndicator="light-1">
          <UserListItem user={user} />
        </Button>
      ))}
    </Card>
  );
});
