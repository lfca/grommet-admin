import { types, flow, getSnapshot, applySnapshot } from "mobx-state-tree";

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
  }))
  .actions(self => ({
    afterCreate() {
      console.log("after create", self);
      // self.save();
    },
    save: flow(function*() {
      yield fetch(
        "https://my-json-server.typicode.com/lfca/grommet-admin/users",
        {
          method: "POST",
          body: JSON.stringify(getSnapshot(self)),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        }
      );
    })
  }));

export const UsersPageStore = types
  .model({
    users: types.optional(types.array(UserModel), []),
    user: types.maybe(types.reference(UserModel)),
    isLoading: types.optional(types.boolean, false)
  })
  .actions(self => ({
    getAll: flow(function*() {
      self.isLoading = true;
      //https://my-json-server.typicode.com/lfca/grommet-admin
      //https://api.myjson.com/bins/bpaod
      const users = yield fetch("https://api.myjson.com/bins/bpaod").then(
        response => response.json()
      );
      users.forEach(item => {
        self.users.push(item);
      });
      self.isLoading = false;
    }),
    add(user) {
      user.value.id = new Date().getTime();
      console.log("adding", user.value, getSnapshot(self.users), self.user);
      self.users.put(user.value);
      self.user = {};
    }
  }));
