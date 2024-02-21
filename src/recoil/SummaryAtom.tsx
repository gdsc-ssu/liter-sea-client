import { atom, selector } from "recoil";

export const SummaryAtom = atom({
  key: "SummaryAtom",
  default: [
    {
      articleId: 0,
      summary: "",
    },
  ],
});

export const SummarySelector = selector({
  key: "SummarySelector",
  get: ({ get }) => get(SummaryAtom),
  set: ({ set }, newSummary) => {
    return set(SummaryAtom, newSummary);
  },
});
