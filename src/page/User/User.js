import React from "react";
import { InfoBox, InfoBoxHeader, InfoBoxItem } from "./../../component";
import { Box } from "grommet";

export const User = () => {
  return (
    <Box pad="small" gap="small">
      <InfoBox>
        <InfoBoxHeader>Teste</InfoBoxHeader>
        <InfoBoxItem label="server">10.0.0.2</InfoBoxItem>
        <InfoBoxItem label="url">http://address.com</InfoBoxItem>
        <InfoBoxItem label="user">admin</InfoBoxItem>
      </InfoBox>
      <InfoBox wrap>
        <InfoBoxItem label="server">10.0.0.3</InfoBoxItem>
        <InfoBoxItem label="url">http://address.com</InfoBoxItem>
      </InfoBox>
      <InfoBox wrap>
        <InfoBoxItem label="server">10.0.0.5</InfoBoxItem>
        <InfoBoxItem label="url">http://address.com</InfoBoxItem>
      </InfoBox>
    </Box>
  );
};
