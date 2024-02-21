import { COLORS } from "@/styles/colors";
import { useEffect, useState } from "react";
import styled from "styled-components";
import VocaModal from "../VocaModal/VocaModal";
import FlexContainer from "../common/flex-container";
import { todayApi } from "@/apis/axiosInstance";

interface TProps {
  stage: number;
  setArticleID: (number: number) => void;
}

const Text = ({ stage, setArticleID }: TProps) => {
  const [clickedIdx, setIsClickedIdx] = useState(-1);
  const [splitData, setSplitData] = useState<string[]>([]);
  useEffect(() => {
    const TodayRes = todayApi.loadPassages();
    TodayRes.then((res) => {
      setSplitData(
        res.data.result.todayArticleList[stage - 1].article.split(" ")
      );
      setArticleID(res.data.result.todayArticleList[stage - 1].articleId);
    });
  }, [stage]);
  const title = "어디서 구할 수 있나요?";

  return (
    <FlexContainer
      direction="column"
      alignItems="stretch"
      style={{ minWidth: "20rem" }}
    >
      <div style={{ fontWeight: 600 }}>{title}</div>
      <TextBox>
        {splitData.map((el, idx) => {
          return (
            <>
              <Word
                id="ClickedSpan"
                clicked={idx === clickedIdx}
                onClick={() => {
                  setIsClickedIdx(idx);
                }}
              >
                {el}
              </Word>{" "}
            </>
          );
        })}
      </TextBox>
      {clickedIdx > -1 && <VocaModal word={splitData[clickedIdx]} />}
    </FlexContainer>
  );
};

const Word = styled.span<{ clicked: boolean }>`
  background-color: ${(props) =>
    props.clicked ? COLORS.primary : "transparent"};
  line-height: 1.8;
  font-size: 1.4rem;
`;

const TextBox = styled.div`
  margin-bottom: 1.6rem;
  height: 72vh;
  overflow-y: auto;
`;

export default Text;
