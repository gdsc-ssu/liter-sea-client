import styled from "styled-components";
import ReviewList, * as RLstyled from "@/components/List/ReviewList";
import { COLORS } from "@/styles/colors";

const ReviewNote = () => {
  return (
    <Container>
      <TitleBox>복습 노트</TitleBox>
      <DateBox></DateBox>
      <ListBox>
        <ListTitle>
          <RLstyled.NumberBox>번호</RLstyled.NumberBox>
          <RLstyled.TitleBox style={{ justifyContent: "center" }}>
            제목
          </RLstyled.TitleBox>
          <RLstyled.ScoreBox>점수</RLstyled.ScoreBox>
          <RLstyled.ArrowBox />
        </ListTitle>
        <ReviewList number={1} title="sdf" score={12} />
        <ReviewList number={1} title="sdf" score={12} />
        <ReviewList number={1} title="sdf" score={12} />
      </ListBox>
    </Container>
  );
};

const Container = styled.div`
  padding: 5rem;
`;

const TitleBox = styled.div``;

const DateBox = styled.div`
  margin-top: 3rem;
`;

const ListBox = styled.div`
  margin-top: 3rem;
  border: 1px solid ${COLORS.primary};
  border-radius: 10px;
  padding: 1rem;
`;

const ListTitle = styled.div`
  display: flex;
  height: 5rem;
  align-items: center;
  border-bottom: 1px solid ${COLORS.blue};
`;

export default ReviewNote;
