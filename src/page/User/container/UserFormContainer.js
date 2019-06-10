import React from "react";
import { UserForm } from "../component/UserForm";
import { observer, inject } from "mobx-react";

export const UserFormContainer = inject("UsersStore")(
  observer(
    class UserFormContainer extends React.Component {
      onSubmit = user => {
        this.props.UsersStore.add(user);
      };

      render() {
        return (
          <UserForm
            onSubmit={this.onSubmit}
            user={this.props.UsersStore.user}
          />
        );
      }
    }
  )
);
