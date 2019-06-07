import React from "react";
import { InfoBox, InfoBoxHeader, InfoBoxItem } from ".././../../component";
import { Box, Text } from "grommet";
import { observer } from "mobx-react";

export const UserList = observer(props => {
  return (
    <Box pad="small" gap="small">
      <Box border={{ side: "bottom", color: "light-2" }}>
        <Text>Users List</Text>
      </Box>
      {props.users.map(user => (
        <InfoBox>
          <InfoBoxHeader>{user.name}</InfoBoxHeader>
          <InfoBoxItem label="email">{user.email}</InfoBoxItem>
          <InfoBoxItem label="gender">{user.gender}</InfoBoxItem>
          <InfoBoxItem label="ip">{user.ip_address}</InfoBoxItem>
        </InfoBox>
      ))}
    </Box>
  );
});
