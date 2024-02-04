import styled from "styled-components";

const Text = () => {
  return (
    <Container>
      <TitleBox>제목</TitleBox>
      <TextBox>
        대충 엄청 긴 내용대충 엄청 긴 내용대충 엄청 긴 내용대충 엄청 긴 내용대충
        엄청 긴 내용대충 엄청 긴 내용대충 엄청 긴 내용대충 엄청 긴 내용대충 엄청
        긴 내용대충 엄청 긴 내용대충 엄청 긴 내용대충 엄청 긴 내용대충 엄청 긴
        내용대충 엄청 긴 내용
      </TextBox>
    </Container>
  );
};

const Container = styled.div`
  width: 30rem;
`;

const TitleBox = styled.div``;

const TextBox = styled.div`
  margin-top: 2rem;
`;

export default Text;
