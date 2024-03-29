import React from "react";
import { Card, SearchForm } from ".././../../component";
import { Box, Text, Menu, InfiniteScroll } from "grommet";
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
      <Text size="small">{user.email}</Text>
      <Icons.FormNext size="1em" />
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
    <Card pad="medium">
      <Box direction="row" gap="small">
        <SearchForm onChange={props.updateSearch} fill />
        <Menu
          icon={<Icons.Menu />}
          items={[
            { label: "Create User", onClick: () => {} },
            { label: "Links", onClick: () => {} }
          ]}
        />
      </Box>
      <Box height="large" overflow="auto" gap="small">
        <InfiniteScroll
          items={props.users}
          replace
          onMore={events => {
            console.log("onMore", events);
          }}
          step={10}
          // renderMarker={events => {
          //   console.log("renderMarker", events);
          //   return <Box>osk</Box>;
          // }}
        >
          {user => (
            <Button hoverIndicator="light-1" key={user.id}>
              <UserListItem user={user} />
            </Button>
          )}
        </InfiniteScroll>
      </Box>
    </Card>
  );
});
