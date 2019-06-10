import React from "react";
import { UsersContainer } from "./container/UserContainer";
import { Provider } from "mobx-react";
import { UsersPageStore } from "../../model/User";
import { Page } from "../../component";
import { PageHeader } from "../../component/Page";

export class UserPage extends React.Component {
  usersPageStore = UsersPageStore.create({});

  render() {
    return (
      <Provider UsersPageStore={this.usersPageStore}>
        <Page>
          <PageHeader title="Users" />
          <UsersContainer />
        </Page>
      </Provider>
    );
  }
}
