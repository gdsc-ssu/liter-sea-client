import { COLORS } from "@/styles/colors";
import styled from "styled-components";
import FlexContainer from "../common/flex-container";

interface StageProps {
  number: number;
}

const StateStage = ({ number }: StageProps) => {
  const circles = Array.from({ length: 5 }, (_, index) => (
    <Circle
      key={index}
      backgroundColor={index < number ? COLORS.primary : COLORS.lightGray}
    />
  ));
  return <FlexContainer gap={0.5}>{circles}</FlexContainer>;
};

const Circle = styled.div<{ backgroundColor: string }>`
  width: 1rem;
  height: 1rem;
  border-radius: 100%;

  background-color: ${(props) => props.backgroundColor};
`;

export default StateStage;
