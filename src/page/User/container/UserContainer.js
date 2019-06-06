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
        console.log("this.props", this.props.UsersPageStore.isLoading);
        const users = this.props.UsersPageStore.users;
        return <UserList users={users} />;
      }
    }
  )
);
