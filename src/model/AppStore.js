import { types } from "mobx-state-tree";
import { UsersPageStore } from "./User";

export const AppStore = types.model({
  UsersStore: types.optional(UsersPageStore, {})
});
