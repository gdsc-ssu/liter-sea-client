import { COLORS } from "@/styles/colors";
import { useState } from "react";
import styled from "styled-components";
import VocaModal from "../VocaModal/VocaModal";

const Text = () => {
  const [clickedIdx, setIsClickedIdx] = useState(-1);
  const data =
    "대충 엄청 긴 내용대충 엄청 긴 내용대충 엄청 긴 내용대충 엄청 긴 내용대충 엄청 긴 내용대충 엄청 긴 내용대충 엄청 긴 내용대충 엄청 긴 내용대충 엄청 긴 내용대충 엄청 긴 내용대충 엄청 긴 내용대충 엄청 긴 내용대충 엄청 긴 내용대충 엄청 긴 내용";
  const dataArr = data.split(" ");

  return (
    <Container>
      <TitleBox>제목</TitleBox>
      <TextBox>
        {dataArr.map((el, idx) => {
          return (
            <>
              <Span
                id="ClickedSpan"
                clicked={idx === clickedIdx}
                onClick={() => {
                  setIsClickedIdx(idx);
                }}
              >
                {el}
              </Span>
              <span> </span>
            </>
          );
        })}
      </TextBox>
      {clickedIdx > -1 && <VocaModal word={dataArr[clickedIdx]} />}
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

const Span = styled.span<{ clicked: boolean }>`
  background-color: ${(props) => (props.clicked ? COLORS.blue : "transparent")};
`;

export default Text;
