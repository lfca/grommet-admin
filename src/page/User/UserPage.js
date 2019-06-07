import React from "react";
import { UsersContainer } from "./container/UserContainer";
import { Provider } from "mobx-react";
import { UsersPageStore } from "../../model/User";
import { Page } from "../../component";
import { PageHeader } from "../../component/Page";

export class UserPage extends React.Component {
  // state = {
  //   usersPageStore: UsersPageStore.create({
  //     users: [
  //       {
  //         id: 10,
  //         first_name: "John",
  //         last_name: "Doe",
  //         email: "john_doe@email.com",
  //         gender: "male",
  //         ip_address: "10.0.0.1"
  //       }
  //     ]
  //   })
  // };
  usersPageStore = UsersPageStore.create({});

  render() {
    return (
      <Provider UsersPageStore={this.usersPageStore}>
        <Page width="large">
          <PageHeader title="Users" />
          <UsersContainer />
        </Page>
      </Provider>
    );
  }
}
