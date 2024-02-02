import styled from "styled-components";
import Problem from "../Problem/Problem";
import Text from "../Text/Text";
import { COLORS } from "@/styles/colors";
import StateStage from "../StateStage/StateStage";

const TestLayout = () => {
  return (
    <Container>
      <TextBox>
        <Text />
      </TextBox>
      <ProblemBox>
        <StateStage number={1} />

        <Problem title={"주어진지문핵심문장은?"}>
          <MultipleBox>
            <NumberBox>1</NumberBox>
            <NumberTextBox>1</NumberTextBox>
          </MultipleBox>
          <MultipleBox>
            <NumberBox>2</NumberBox>
            <NumberTextBox>2</NumberTextBox>
          </MultipleBox>
        </Problem>
      </ProblemBox>
    </Container>
  );
};

const Container = styled.div`
  padding: 3rem;
  display: flex;
  justify-content: center;
  margin: auto;
`;

const TextBox = styled.div`
  margin-right: 100px;
  margin-top: 4rem;
`;

const ProblemBox = styled.div``;

const MultipleBox = styled.div`
  display: flex;
  background-color: white;
  margin-top: 0.7rem;
  height: 3rem;
`;

const NumberBox = styled.div`
  background-color: ${COLORS.primary};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto 0 auto 1rem;
  width: 1.5rem;
  height: 1.5rem;
`;

const NumberTextBox = styled.div`
  margin-left: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default TestLayout;
