import { types, flow } from "mobx-state-tree";

export const UserModel = types.model({
  id: types.identifier,
  first_name: types.string,
  last_name: types.string,
  email: types.string,
  gender: types.string,
  ip_address: types.string
});

export const UsersPageStore = types
  .model({
    users: types.optional(types.array(UserModel), []),
    isLoading: types.optional(types.boolean, false)
  })
  .action(self => ({
    getAll: flow(function*() {
      self.isLoading = true;
      const users = yield fetch(
        "https://my-json-server.typicode.com/lfca/grommet-admin/users"
      ).then(response => response.json());
      self.users = users;
      self.isLoading = false;
    })
  }));
