import React, { Component } from "react";
import { render } from "react-dom";

import { Box, Heading, Grommet } from "grommet";
import { hp } from "./style/themes";
import { User } from "./page";

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
          <User />
        </Box>
      </Grommet>
    );
  }
}

render(<App />, document.getElementById("root"));
