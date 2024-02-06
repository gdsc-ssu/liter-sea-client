import { COLORS } from "@/styles/colors";
import styled from "styled-components";

interface VMProps {
  word: string;
}

const VocaModal = ({ word }: VMProps) => {
  return (
    <Container>
      <WordBox>{word}</WordBox>
      <ExplainBox>어쩌구저쩌구</ExplainBox>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: 0 15px 30px 0 rgba(212, 216, 229, 0.3),
    0 0 1px 0 rgba(0, 0, 0, 0.4);
`;

const WordBox = styled.div`
  color: ${COLORS.blue};
`;

const ExplainBox = styled.div``;

export default VocaModal;
