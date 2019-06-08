import { types, flow } from "mobx-state-tree";

export const UserModel = types
  .model({
    id: types.identifierNumber,
    first_name: types.optional(types.string, ""),
    last_name: types.optional(types.string, ""),
    email: types.optional(types.string, ""),
    gender: types.optional(types.string, ""),
    ip_address: types.optional(types.string, "")
  })
  .views(self => ({
    get name() {
      return self.first_name + " " + self.last_name;
    }
  }));

export const UsersPageStore = types
  .model({
    users: types.optional(types.array(UserModel), []),
    isLoading: types.optional(types.boolean, false)
  })
  .actions(self => ({
    getAll: flow(function*() {
      self.isLoading = true;
      self.users = yield fetch("https://api.myjson.com/bins/bpaod").then(
        response => response.json()
      );
      self.isLoading = false;
    })
  }));
