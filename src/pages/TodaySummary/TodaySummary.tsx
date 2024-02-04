import styled from "styled-components";
import Text from "@/components/Text/Text";
import StateStage from "@/components/StateStage/StateStage";
import Problem from "@/components/Problem/Problem";
import InputComponent from "@/components/AnswerInput/InputComponent";
import NextButton from "@/components/Button/NextButton";

const TodaySummary = () => {
  return (
    <Container>
      <TextBox>
        <Text />
      </TextBox>
      <ProblemBox>
        <StateStage number={1} />
        <Problem title={"다음 지문을 요약해주세요"}>
          <InputComponent placeholder="내 요약" />
        </Problem>
        <NextButton text="제출하기" />
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

const ProblemBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export default TodaySummary;
