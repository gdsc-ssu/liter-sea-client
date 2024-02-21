import styled from "styled-components";
import PercentState from "@/components/PercentState/PercentState";
import BlueButton from "@/components/Button/BlueButton";
import FlexContainer from "@/components/common/flex-container";
import { COLORS } from "@/styles/colors";
import { useState } from "react";

const SummaryResult = () => {
  const [presentIdx, setPresentIdx] = useState<number>(1);
  const handleOnClick = () => {};
  return (
    <FlexContainer direction="column" alignItems="stretch">
      <div style={{ fontWeight: 600 }}>오늘의 요약 결과</div>
      <FlexContainer wrap="wrap">
        <FlexItem
          style={{ minWidth: "20rem", background: ` ${COLORS.lightGray}` }}
        >
          <div onClick={() => setPresentIdx(1)}>
            <PercentState number={1} title="1번 지문" percent={50} />
          </div>
          <div onClick={() => setPresentIdx(2)}>
            <PercentState number={2} title="2번 지문" percent={50} />
          </div>
          <div onClick={() => setPresentIdx(3)}>
            <PercentState number={3} title="3번 지문" percent={50} />
          </div>
          <div onClick={() => setPresentIdx(4)}>
            <PercentState number={4} title="4번 지문" percent={50} />
          </div>
          <div onClick={() => setPresentIdx(5)}>
            <PercentState number={5} title="5번 지문" percent={50} />
          </div>
        </FlexItem>
        <FlexItem style={{ background: `${COLORS.boxBg}` }}>
          <PercentState number={4} title="1번 지문" percent={50} />
          <FlexContainer style={{ padding: "0.5rem 1rem" }}>
            귀하의 답변은 문단의 주제와 주요 내용을 정확하게 파악하고 있습니다.
            또한, 문단의 세부 내용인 "3년 동안의 지속"과 "한국의 승리"를
            언급하고 있습니다.
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

export default SummaryResult;
