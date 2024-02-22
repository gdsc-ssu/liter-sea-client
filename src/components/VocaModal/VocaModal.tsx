import { COLORS } from "@/styles/colors";
import styled from "styled-components";
import FlexContainer from "../common/flex-container";

interface VMProps {
  word: string;
  explain: string;
}

const VocaModal = ({ word, explain = "" }: VMProps) => {
  return (
    <Container direction="column" alignItems="stretch" gap={0.25} padding={1}>
      <WordBox>{word}</WordBox>
      <ExplainBox>{explain}</ExplainBox>
    </Container>
  );
};

const Container = styled(FlexContainer)`
  background-color: ${COLORS.white};
  border: 1px solid ${COLORS.primary};
  box-shadow: 0 20px 30px 0 rgba(164, 186, 255, 0.3),
    0 0 2px 0 rgba(103, 121, 219, 0.4);

  position: sticky;
  bottom: 3.4rem;
  z-index: 10;
`;

const WordBox = styled.span`
  font-weight: 600;
  color: ${COLORS.primary};
`;

const ExplainBox = styled.span``;

export default VocaModal;
