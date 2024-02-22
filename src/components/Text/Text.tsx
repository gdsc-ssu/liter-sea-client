import { COLORS } from "@/styles/colors";
import { useEffect, useState } from "react";
import styled from "styled-components";
import VocaModal from "../VocaModal/VocaModal";
import FlexContainer from "../common/flex-container";
import { wordApi } from "@/apis/axiosInstance";

interface TProps {
  splitData: string[];
}

const Text = ({ splitData }: TProps) => {
  const [clickedIdx, setIsClickedIdx] = useState(-1);
  const [explain, setExplain] = useState<string>("");
  useEffect(() => {
    wordApi.saveWord(splitData[clickedIdx]).then((res) => setExplain(res.data));
  }, [clickedIdx]);

  return (
    <FlexContainer
      direction="column"
      alignItems="stretch"
      style={{ minWidth: "20rem" }}
    >
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
      {clickedIdx > -1 && (
        <VocaModal word={splitData[clickedIdx]} explain={explain} />
      )}
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
