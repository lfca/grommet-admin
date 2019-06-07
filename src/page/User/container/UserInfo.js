import { InfoBox, InfoBoxHeader, InfoBoxItem } from "../../../component";

export const UserInfo = props => {
  const { user } = props;
  return (
    <InfoBox>
      <InfoBoxHeader>{user.name}</InfoBoxHeader>
      <InfoBoxItem label="email">{user.email}</InfoBoxItem>
      <InfoBoxItem label="gender">{user.gender}</InfoBoxItem>
      <InfoBoxItem label="ip">{user.ip_address}</InfoBoxItem>
    </InfoBox>
  );
};
