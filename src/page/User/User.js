import React from "react";
import { UsersContainer } from "./container/UserContainer";
import { Provider } from "mobx-react";
import { UsersPageStore } from "../../model/User";

export class User extends React.Component {
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
        <UsersContainer />
      </Provider>
    );
  }
}
