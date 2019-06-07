import React from "react";
import { observer, inject } from "mobx-react";
import { UserList } from "./UserList";

export const UsersContainer = inject("UsersPageStore")(
  observer(
    class UsersContainer extends React.Component {
      componentWillMount() {
        this.props.UsersPageStore.getAll();
      }

      render() {
        const { users, isLoading } = this.props.UsersPageStore;
        return !isLoading && <UserList users={users} />;
      }
    }
  )
);
