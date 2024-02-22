import { atom, selector } from "recoil";

export const VocaModalAtom = atom({
  key: "VocaModalAtom",
  default: false,
});

export const isVocaModalOpenSelector = selector({
  key: "isVocaModalOpenSelector",
  get: ({ get }) => !!get(VocaModalAtom),
});

export const VocaIdxAtom = atom({
  key: "VocaIdxAtom",
  default: -1,
});

export const isVocaIdxSelector = selector({
  key: "isVocaIdxSelector",
  get: ({ get }) => !!get(VocaIdxAtom),
});
