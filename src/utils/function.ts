export const AvailableScore = (
  score1: number,
  score2: number,
  score3: number,
  score4: number,
  score5: number,
  score6: number
) => {
  return Math.round((score1 + score2 + score3 + score4 + score5 + score6) / 6);
};
