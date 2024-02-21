import styled from "styled-components";
import Text from "@/components/Text/Text";
import StateStage from "@/components/StateStage/StateStage";
import Problem from "@/components/Problem/Problem";
import InputComponent from "@/components/AnswerInput/InputComponent";
import NextButton from "@/components/Button/NextButton";
import FlexContainer from "@/components/common/flex-container";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { SummaryAtom, summaryResultListAtom } from "@/recoil/SummaryAtom";
import { todayApi } from "@/apis/axiosInstance";

interface StageProps {
  stage: number;
}

export interface PostSummary {
  articleId: number;
  summary: string;
}

const TodaySummary = ({ stage }: StageProps) => {
  const [input, setInput] = useState<string>("");
  const [recoilSummary, setRecoilSummary] = useRecoilState(SummaryAtom);
  const [summaryResult, setSummaryResult] = useRecoilState(
    summaryResultListAtom
  );
  const [articleId, setArticleID] = useState<number>(0);
  const [splitData, setSplitData] = useState<string[]>([]);

  const isLast = stage > 4 ? true : false;
  const navigate = useNavigate();

  useEffect(() => {
    const TodayRes = todayApi.loadPassages();
    TodayRes.then((res) => {
      setSplitData(
        res.data.result.todayArticleList[stage - 1].article.split(" ")
      );
      setArticleID(res.data.result.todayArticleList[stage - 1].articleId);
    });
  }, [stage]);

  const PostSummaryList = (articleID: number) => {
    const GetRes = todayApi.getResult({ articleId: articleID, summary: input });
    GetRes.then((res) => {
      if (recoilSummary[0].articleId == 0) {
        setSummaryResult(res.data.result.summaryResultList);
      } else {
        console.log("artilce", articleID);
        setSummaryResult((prev) => [
          ...prev,
          ...res.data.result.summaryResultList,
        ]);
      }
    });
  };

  return (
    <FlexContainer direction="column" gap={2}>
      <StateStage number={stage} />
      <FlexContainer gap={2} wrap="wrap">
        <FlexItem gap={2}>
          <Text splitData={splitData} />
        </FlexItem>
        <FlexItem fullWidth>
          <Problem title={"다음 지문을 요약해주세요"}>
            <InputComponent
              placeholder="내 요약"
              input={input}
              setInput={setInput}
            />
          </Problem>
          <NextButton
            text={isLast ? "제출하기" : "다음 단계"}
            onClick={() => {
              if (stage < 5) {
                PostSummaryList(articleId);
                if (recoilSummary[0].articleId == 0) {
                  setRecoilSummary([{ articleId: articleId, summary: input }]);
                } else {
                  setRecoilSummary((prev) => [
                    ...prev,
                    { articleId: stage, summary: input },
                  ]);
                }
                navigate(`/summary/${stage + 1}`);
              } else {
                setRecoilSummary((prev) => [
                  ...prev,
                  { articleId: stage, summary: input },
                ]);
                PostSummaryList(articleId);
                navigate(`/summary/result`);
              }
              console.log("recoilsave", recoilSummary);
              console.log("summary", summaryResult);
              setInput("");
              setArticleID(0);
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
