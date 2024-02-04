import PercentState from "@/components/PercentState/PercentState";
import * as styled from "./Result.style";
import BlueButton from "@/components/Button/BlueButton";

const SummaryResult = () => {
  const handleOnClick = () => {};
  return (
    <styled.FlexBox>
      <styled.CenterTitle>오늘의 요약 결과</styled.CenterTitle>
      <styled.Container>
        <styled.LeftBox>
          <PercentState number={1} title="10xp 획득하기" percent={50} />
          <PercentState number={2} title="10xp 획득하기" percent={50} />
          <PercentState number={3} title="10xp 획득하기" percent={50} />
          <PercentState number={4} title="10xp 획득하기" percent={50} />
        </styled.LeftBox>
        <styled.RightBox>
          <styled.ComponentBox>
            <PercentState number={4} title="10xp 획득하기" percent={50} />
          </styled.ComponentBox>
          <styled.DescriptionBox>
            <styled.DescTitle>참 잘했어요!</styled.DescTitle>
            <styled.DescInfo>
              귀하의 답변은 문단의 주제와 주요 내용을 정확하게 파악하고
              있습니다. 또한, 문단의 세부 내용인 "3년 동안의 지속"과 "한국의
              승리"를 언급하고 있습니다.
            </styled.DescInfo>
          </styled.DescriptionBox>
        </styled.RightBox>
      </styled.Container>
      <styled.ButtonBox>
        <BlueButton text="완료하기" onClickFunc={handleOnClick} />
      </styled.ButtonBox>
    </styled.FlexBox>
  );
};

export default SummaryResult;
