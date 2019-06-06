import React from "react";
import { UsersContainer } from "./container/UserContainer";
import { Provider } from "mobx-react";
import { UsersPageStore } from "../../model/User";

export const User = props => {
  const usersPageStore = UsersPageStore.create({});
  return (
    <Provider UsersPageStore={usersPageStore}>
      <UsersContainer />
    </Provider>
  );
};
