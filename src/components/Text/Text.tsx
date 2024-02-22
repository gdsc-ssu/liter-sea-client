import { COLORS } from "@/styles/colors";
import { useEffect, useState } from "react";
import styled from "styled-components";
import VocaModal from "../VocaModal/VocaModal";
import FlexContainer from "../common/flex-container";
import { wordApi } from "@/apis/axiosInstance";
import { useRecoilState } from "recoil";
import { VocaIdxAtom, VocaModalAtom } from "@/recoil/VocaModalAtom";

interface TProps {
  splitData: string[];
}

const Text = ({ splitData }: TProps) => {
  const [clickedIdx, setIsClickedIdx] = useState(-1);
  const [explain, setExplain] = useState<string>("");
  const [isOpen, setIsOpen] = useRecoilState(VocaModalAtom);
  const [recoilIdx, setRecoilIdx] = useRecoilState(VocaIdxAtom);
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
                clicked={recoilIdx != -1 && idx === clickedIdx}
                onClick={() => {
                  setIsClickedIdx(idx);
                  setRecoilIdx(idx);
                  setIsOpen(true);
                }}
              >
                {el}
              </Word>{" "}
            </>
          );
        })}
      </TextBox>
      {clickedIdx > -1 && isOpen && (
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
