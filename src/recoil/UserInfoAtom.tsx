import { atom, selector } from "recoil";

export const UserInfoAtom = atom({
  key: "UserInfoAtom",
  default: null as any | null,
});

export const userInfoSelector = selector({
  key: "userInfoSelector",
  get: ({ get }) => get,
});
