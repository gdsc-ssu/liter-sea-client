import styled from "styled-components";
import PercentState from "@/components/PercentState/PercentState";
import BlueButton from "@/components/Button/BlueButton";
import FlexContainer from "@/components/common/flex-container";
import { COLORS } from "@/styles/colors";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { summaryResultListAtom } from "@/recoil/SummaryAtom";
import { AvailableScore } from "@/utils/function";
import { useNavigate } from "react-router-dom";

const SummaryResult = () => {
  const [presentIdx, setPresentIdx] = useState<number>(1);
  const [summaryResult, setSummaryResult] = useRecoilState(
    summaryResultListAtom
  );
  const navigate = useNavigate();
  const number = [1, 2, 3, 4, 5];
  const ScoreTitle = [
    "한글 맞춤법 및 띄어쓰기",
    "단어 선택",
    "올바른 문장",
    "완전한 문장",
    "키워드 또는 중요 내용 포함",
    "유사한 내용 미반복",
  ];

  useEffect(() => {
    console.log("qwerqwer", summaryResult);
  }, []);

  const handleOnClick = () => {
    navigate("/review");
  };
  return (
    <FlexContainer direction="column" alignItems="stretch">
      <div style={{ fontWeight: 600 }}>오늘의 요약 결과</div>
      <FlexContainer wrap="wrap">
        <FlexItem
          style={{ minWidth: "20rem", background: ` ${COLORS.lightGray}` }}
        >
          {number.map((el, idx) => {
            const presentScore = AvailableScore(
              summaryResult[idx]?.score1,
              summaryResult[idx]?.score2,
              summaryResult[idx]?.score3,
              summaryResult[idx]?.score4,
              summaryResult[idx]?.score5,
              summaryResult[idx]?.score6
            );
            return (
              <div key={el} onClick={() => setPresentIdx(el)}>
                <PercentState
                  number={el}
                  title={el + "번 지문"}
                  percent={presentScore}
                />
              </div>
            );
          })}
        </FlexItem>
        <FlexItem style={{ background: `${COLORS.boxBg}` }}>
          <PercentState number={presentIdx} title={presentIdx + "번 지문"} />
          <ScoreBox>
            • {ScoreTitle[0]}: {summaryResult[presentIdx].score1}
          </ScoreBox>
          <ScoreBox>
            • {ScoreTitle[1]}: {summaryResult[presentIdx].score2}
          </ScoreBox>
          <ScoreBox>
            • {ScoreTitle[2]}: {summaryResult[presentIdx].score3}
          </ScoreBox>
          <ScoreBox>
            • {ScoreTitle[3]}: {summaryResult[presentIdx].score4}
          </ScoreBox>
          <ScoreBox>
            • {ScoreTitle[4]}: {summaryResult[presentIdx].score5}
          </ScoreBox>
          <ScoreBox>
            • {ScoreTitle[5]}: {summaryResult[presentIdx].score6}
          </ScoreBox>
          <FlexContainer
            style={{
              padding: "0.5rem 1rem",
              borderTop: "2px solid #d4dbde",
              borderRadius: "0",
            }}
          >
            {summaryResult[presentIdx].answer}
          </FlexContainer>
        </FlexItem>
      </FlexContainer>
      <BlueButton text="완료하기" onClickFunc={handleOnClick} />
    </FlexContainer>
  );
};

const FlexItem = styled(FlexContainer).attrs({
  direction: "column",
  alignItems: "stretch",
  alignSelf: "stretch",
})`
  flex: 1 1 40%;
  padding: 1rem;
`;

const ScoreBox = styled.div``;

export default SummaryResult;
