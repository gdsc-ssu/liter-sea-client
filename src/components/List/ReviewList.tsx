import styled from "styled-components";
import { COLORS } from "@/styles/colors";

interface RLProps {
  number: number;
  title: string;
  score: number;
}

const ReviewList = ({ number, title, score }: RLProps) => {
  return (
    <Container>
      <NumberBox>{number}</NumberBox>
      <TitleBox>{title}</TitleBox>
      <ScoreBox>{score}</ScoreBox>
      <ArrowBox>{">"}</ArrowBox>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 5rem;
  align-items: center;
`;

export const NumberBox = styled.div`
  display: flex;
  justify-content: center;
  width: 5rem;
`;

export const TitleBox = styled.div`
  display: flex;
  width: 32rem;
  margin-left: 5rem;
`;

export const ScoreBox = styled.div`
  display: flex;
  justify-content: center;
  width: 20rem;
`;

export const ArrowBox = styled.div`
  display: flex;
  justify-content: center;
  width: 10rem;
`;

export default ReviewList;
