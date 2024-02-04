import styled from "styled-components";
import { COLORS } from "@/styles/colors";

interface ProblemProps {
  title: string;
  children: React.ReactNode;
}

const Problem = ({ title, children }: ProblemProps) => {
  return (
    <>
      <Container>
        <ProblemTitle>{title}</ProblemTitle>
        <AnswerBox>{children}</AnswerBox>
      </Container>
    </>
  );
};

const Container = styled.div`
  background-color: ${COLORS.primary};
  width: 32rem;
  height: 35rem;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
`;
const ProblemTitle = styled.div``;

const AnswerBox = styled.div`
  margin-top: 2rem;
`;

export default Problem;
