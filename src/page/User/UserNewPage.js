import React from "react";
import { Page } from "../../component";
import { PageHeader } from "../../component/Page";
import { UserFormContainer } from "./container/UserFormContainer";
import { Provider, inject } from "mobx-react";
import { observer } from "mobx-react-lite";
import { Menu, Box, Button, Text } from "grommet";
import * as Icons from "grommet-icons";
export const UserNewPage = inject("AppStore")(
  observer(props => {
    return (
      <Page>
        <PageHeader title="New User" />
        <Box direction="row" gap="small" alignSelf="center">
          <Box width="medium" gap="xsmall">
            <Button hoverIndicator="light-4">
              <Box
                // background="white"
                pad="small"
                border={{ color: "light-3" }}
                gap="medium"
                direction="row"
                align="center"
              >
                <Icons.FormNextLink size="1em" />
                <Text>Penhores</Text>
              </Box>
            </Button>
            <Button hoverIndicator="light-4">
              <Box
                background="white"
                pad="small"
                border={{ color: "light-3" }}
                gap="medium"
                direction="row"
                align="center"
              >
                <Icons.FormNextLink size="1em" />
                <Text>Caça Niquel</Text>
              </Box>
            </Button>
            <Button hoverIndicator="light-4">
              <Box
                background="white"
                pad="small"
                border={{ color: "light-3" }}
                gap="medium"
                direction="row"
                align="center"
              >
                <Icons.FormNextLink size="1em" />
                <Text>Penhores</Text>
              </Box>
            </Button>
            <Button hoverIndicator="light-4">
              <Box
                background="white"
                pad="small"
                border={{ color: "light-3" }}
                gap="medium"
                direction="row"
                align="center"
              >
                <Icons.FormNextLink size="1em" />
                <Text>Penhores</Text>
              </Box>
            </Button>
          </Box>
          <Box width="large">
            <Provider UsersStore={props.AppStore.UsersStore}>
              <UserFormContainer />
            </Provider>
          </Box>
        </Box>
      </Page>
    );
  })
);
