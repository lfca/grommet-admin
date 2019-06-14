import React from "react";
import { Page, Card } from "../../component";
import { PageHeader } from "../../component/Page";
import { UserFormContainer } from "./container/UserFormContainer";
import { Provider, inject } from "mobx-react";
import { observer } from "mobx-react-lite";
import { Box } from "grommet";
import { VerticalMenu } from "../../component/VerticalMenu";
import * as Icons from "grommet-icons";
export const UserNewPage = inject("AppStore")(
  observer(props => {
    return (
      <Page>
        <PageHeader title="New User" />
        <Box direction="row" gap="small" alignSelf="center">
          <Box width="small">
            <VerticalMenu
              items={[
                {
                  label: "First Action",
                  icon: <Icons.FormNext />
                },
                {
                  label: "Second Action",
                  onClick: () => {
                    console.log("okkk");
                  },
                  icon: <Icons.FormNext />
                }
              ]}
            />
          </Box>
          <Box width="large">
            <Provider UsersStore={props.AppStore.UsersStore}>
              <Card pad="medium">
                <UserFormContainer />
              </Card>
            </Provider>
          </Box>
        </Box>
      </Page>
    );
  })
);
