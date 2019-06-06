import React from "react";
import { InfoBox, InfoBoxHeader, InfoBoxItem } from ".././../../component";
import { Box } from "grommet";

export const UserList = props => {
  console.log(props.users);
  return (
    <Box pad="small" gap="small">
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
};
