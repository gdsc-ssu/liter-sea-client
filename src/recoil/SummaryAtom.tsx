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

export const summaryResultListAtom = atom({
  key: "summaryResultListAtom",
  default: [
    {
      articleId: 0,
      score1: 0,
      score2: 0,
      score3: 0,
      score4: 0,
      score5: 0,
      score6: 0,
      answer: "",
    },
  ],
});

export const summaryResultListSelector = selector({
  key: "summaryResultListSelector",
  get: ({ get }) => get(summaryResultListAtom),
  set: ({ set }, newSummaryResultListAtom) => {
    return set(summaryResultListAtom, newSummaryResultListAtom);
  },
});
