import React from "react";
import { InfoBox, InfoBoxHeader, InfoBoxItem } from ".././../../component";
import { Box, Text } from "grommet";
import { observer } from "mobx-react";

export const UserList = observer(props => {
  return (
    <Box pad="small" gap="small">
      <Box>
        <Text>Users List</Text>
      </Box>
      {props.users.map(user => (
        <InfoBox>
          <InfoBoxHeader>{user.first_name}</InfoBoxHeader>
          <InfoBoxItem label="server">10.0.0.2</InfoBoxItem>
          <InfoBoxItem label="url">http://address.com</InfoBoxItem>
          <InfoBoxItem label="user">admin</InfoBoxItem>
        </InfoBox>
      ))}
    </Box>
  );
});
