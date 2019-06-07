import React, { Component } from "react";
import { render } from "react-dom";

import { Box, Heading, Grommet } from "grommet";
import { theme } from "./style/themes";
import { UserPage } from "./page";

class App extends Component {
  render() {
    return (
      <Grommet theme={theme} full>
        <Box fill>
          <Box pad="small" background="brand">
            <Heading level={4} size="small" margin="xsmall">
              Grommet Admin
            </Heading>
          </Box>
          <UserPage />
        </Box>
      </Grommet>
    );
  }
}

render(<App />, document.getElementById("root"));
