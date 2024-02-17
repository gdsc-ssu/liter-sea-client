import { atom, selector } from "recoil";

export const TokenAtom = atom({
  key: "TokenAtom",
  default: undefined,
});

export const isSignInSelector = selector({
  key: "isSignInSelector",
  get: ({ get }) => !!get(TokenAtom),
});
