import { COLORS } from "@/styles/colors";
import styled from "styled-components";

interface StageProps {
  number: number;
}

const StateStage = ({ number }: StageProps) => {
  const circles = Array.from({ length: 6 }, (_, index) => (
    <Circle
      key={index}
      backgroundColor={index < number ? COLORS.primary : COLORS.ligthGray}
    />
  ));
  return <Container>{circles}</Container>;
};

const Container = styled.div`
  display: flex;
  height: 4rem;
  align-items: center;
`;

const Circle = styled.div<{ backgroundColor: string }>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 0.1rem;
  background-color: ${(props) => props.backgroundColor};
`;

export default StateStage;
