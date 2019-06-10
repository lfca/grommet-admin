import React, { Component } from "react";
import { render } from "react-dom";

import { Box, Heading, Grommet } from "grommet";
import { theme } from "./style/themes";
import { UserRouter } from "./page";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AppStore } from "./model/AppStore";
import { Provider } from "mobx-react";

class App extends Component {
  appStore = AppStore.create({});
  render() {
    return (
      <Grommet theme={theme} full>
        <Provider AppStore={this.appStore}>
          <Box fill>
            <Box pad="small" background="brand">
              <Heading level={4} size="small" margin="xsmall">
                Grommet Admin
              </Heading>
            </Box>
            <Router>
              <Route path="/users" component={UserRouter} />
            </Router>
          </Box>
        </Provider>
      </Grommet>
    );
  }
}

render(<App />, document.getElementById("root"));
