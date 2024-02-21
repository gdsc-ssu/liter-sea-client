import styled from "styled-components";
import Text from "@/components/Text/Text";
import Problem from "@/components/Problem/Problem";
import InputComponent from "@/components/AnswerInput/InputComponent";
import BlueButton from "@/components/Button/BlueButton";
import { COLORS } from "@/styles/colors";
import FlexContainer from "@/components/common/flex-container";
import { useEffect, useState } from "react";
import { reviewApi } from "@/apis/axiosInstance";
import { useParams } from "react-router-dom";

const Summary = () => {
  const [splitData, setSplitData] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");

  const handleOnClick = () => {};
  const pathId = useParams();
  console.log(pathId?.id);

  useEffect(() => {
    const ReviewRes = reviewApi.loadReviewBySolvedId(Number(pathId.id));
    ReviewRes.then((res) => {
      setSplitData(res.data.article.split(" "));
      setInput(res.data.userSummary);
      setAnswer(res.data.answer);
    });
  }, []);

  return (
    <FlexContainer gap={2} wrap="wrap">
      <FlexItem gap={2}>
        <Text splitData={splitData} />
      </FlexItem>
      <FlexItem fullWidth>
        <Problem title={"내 요약"}>
          <InputComponent
            placeholder="내 요약"
            input={input}
            setInput={setInput}
          />
        </Problem>
        <Problem title={"모범 답안"}>
          <AnswerBox>{answer}</AnswerBox>
        </Problem>
        <FlexContainer fullWidth justifyContent="space-evenly">
          <ArrowBox>이전</ArrowBox>
          <BlueButton text="핵심문장 찾기" onClickFunc={handleOnClick} />
          <ArrowBox>다음</ArrowBox>
        </FlexContainer>
      </FlexItem>
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

const AnswerBox = styled.div`
  background-color: ${COLORS.white};
  border-radius: 0.8rem;
  border: 1px solid ${COLORS.lightGray};
  padding: 1rem;
  font-size: 1.4rem;
  line-height: 1.6;
`;

const ArrowBox = styled.div`
  margin: 0 2rem;
`;

export default Summary;
