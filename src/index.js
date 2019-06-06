import React, { Component } from "react";
import { render } from "react-dom";

import { grommet, Grid, Box, Heading, Grommet, Paragraph, Text } from "grommet";
import * as Icons from "grommet-icons";
import { hp } from "./style/themes";
const InfoBox = props => {
  return <Box {...props}>{props.children}</Box>;
};

InfoBox.defaultProps = {
  direction: "column",
  pad: "small",
  border: { size: "xsmall", color: "light-1" },
  elevation: "xsmall",
  gap: "small"
};

const InfoBoxItem = props => {
  return (
    <Box {...props}>
      <Text weight="bold">{props.label}</Text>
      <Text>{props.children}</Text>
    </Box>
  );
};

InfoBoxItem.defaultProps = {
  direction: "row",
  gap: "small",
  align: "center",
  pad: "small"
};

const InfoBoxHeader = props => {
  return (
    <Box {...props}>
      <Text>{props.children}</Text>
      <Icons.UserSettings />
    </Box>
  );
};
InfoBoxHeader.defaultProps = {
  border: { side: "bottom", color: "light-2" },
  direction: "row",
  justify: "between",
  pad: "small"
};

class App extends Component {
  render() {
    return (
      <Grommet theme={hp} full>
        <Box gap="small">
          <Box pad="small" background="brand" elevation="xsmall">
            <Heading level={2} size="small">
              <strong>Hello World</strong>
            </Heading>
          </Box>
          <Box pad="small" gap="small">
            {/* <Grid columns="small" rows="xsmall" gap="small"> */}
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
            {/* </Grid> */}
          </Box>
        </Box>
      </Grommet>
    );
  }
}

render(<App />, document.getElementById("root"));
