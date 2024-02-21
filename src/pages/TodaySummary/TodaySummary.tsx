import styled from "styled-components";
import Text from "@/components/Text/Text";
import StateStage from "@/components/StateStage/StateStage";
import Problem from "@/components/Problem/Problem";
import InputComponent from "@/components/AnswerInput/InputComponent";
import NextButton from "@/components/Button/NextButton";
import FlexContainer from "@/components/common/flex-container";
import { useNavigate } from "react-router-dom";

export interface StageProps {
  stage: number;
}

const TodaySummary = ({ stage }: StageProps) => {
  const isLast = stage > 4 ? true : false;
  const navigate = useNavigate();

  return (
    <FlexContainer direction="column" gap={2}>
      <StateStage number={stage} />
      <FlexContainer gap={2} wrap="wrap">
        <FlexItem gap={2}>
          <Text stage={stage} />
        </FlexItem>
        <FlexItem fullWidth>
          <Problem title={"다음 지문을 요약해주세요"}>
            <InputComponent placeholder="내 요약" />
          </Problem>
          <NextButton
            text={isLast ? "제출하기" : "다음 단계"}
            onClick={() => {
              if (stage < 5) {
                navigate(`/summary/${stage + 1}`);
              } else {
                navigate(`/summary/result`);
              }
            }}
          />
        </FlexItem>
      </FlexContainer>
    </FlexContainer>
  );
};

const FlexItem = styled(FlexContainer).attrs({
  direction: "column",
  alignItems: "stretch",
  alignSelf: "stretch",
})`
  flex: 1 1 40%;
`;

export default TodaySummary;
