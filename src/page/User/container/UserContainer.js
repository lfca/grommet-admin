import React from "react";
import { observer, inject } from "mobx-react";
import { UserList } from "./UserList";

export const UsersContainer = inject("UsersPageStore")(
  observer(
    class UsersContainer extends React.Component {
      state = { filterTerm: null };

      componentWillMount() {
        this.props.UsersPageStore.getAll();
      }

      updateSearch = event => {
        this.setState({ filterTerm: event.target.value });
      };

      render() {
        const { users, isLoading } = this.props.UsersPageStore;
        const usersFilterd = !!this.state.filterTerm
          ? users.filter(user =>
              user.name
                .toLowerCase()
                .includes(this.state.filterTerm.toLowerCase())
            )
          : users;
        console.log(isLoading);
        return (
          !isLoading && (
            <UserList users={usersFilterd} updateSearch={this.updateSearch} />
          )
        );
      }
    }
  )
);
