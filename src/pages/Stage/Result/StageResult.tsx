import styled from "styled-components";
import { COLORS } from "@/styles/colors";
import BlueButton from "@/components/Button/BlueButton";

const StageResult = () => {
  const handleOnClick = () => {};

  return (
    <Container>
      <LeftBox>이미지</LeftBox>
      <RightBox>
        <TopTitle>테스트 결과</TopTitle>
        <ResultBox>
          <ResultComponent>
            <ResultTitle>수필</ResultTitle>
            <ResultBar></ResultBar>
          </ResultComponent>
          <ResultComponent>
            <ResultTitle>수능 비문학</ResultTitle>
            <ResultBar></ResultBar>
          </ResultComponent>
          <ResultComponent>
            <ResultTitle>보고서</ResultTitle>
            <ResultBar></ResultBar>
          </ResultComponent>
          <ResultComponent>
            <ResultTitle>뉴스 기사 생활</ResultTitle>
            <ResultBar></ResultBar>
          </ResultComponent>
          <ResultComponent>
            <ResultTitle>뉴스 기사 경제 / 과학</ResultTitle>
            <ResultBar></ResultBar>
          </ResultComponent>
        </ResultBox>
        <ResultCommenet>수필부터 시작해요</ResultCommenet>
        <BlueButton text="시작하기" onClickFunc={handleOnClick} />
      </RightBox>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  padding: 5rem;
  justify-content: center;
`;

const LeftBox = styled.div`
  width: 30rem;
`;

const RightBox = styled.div``;

const TopTitle = styled.div``;

const ResultBox = styled.div`
  background-color: ${COLORS.primary};
  width: 25rem;
  display: flex;
  flex-direction: column;
  padding: 2rem 5rem;
`;

const ResultComponent = styled.div`
  padding: 1rem 0;
`;

const ResultTitle = styled.div``;

const ResultBar = styled.div`
  background-color: ${COLORS.ligthGray};
  width: 15rem;
  height: 1.2rem;
`;

const ResultCommenet = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
`;

export default StageResult;
