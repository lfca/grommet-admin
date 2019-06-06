import React from "react";
import { UsersContainer } from "./container/UserContainer";
import { Provider } from "mobx-react";
import { UsersPageStore } from "../../model/User";

export class User extends React.Component {
  usersPageStore = UsersPageStore.create({});
  componentDidMount() {
    //    this.usersPageStore = UsersPageStore.create({});
  }
  render() {
    return (
      <Provider UsersPageStore={this.usersPageStore}>
        <UsersContainer />
      </Provider>
    );
  }
}
