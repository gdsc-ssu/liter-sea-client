import styled from "styled-components";
import WordContent from "@/components/Vocabook/WordContent";
import BackButton from "@/assets/SVGs/Back.svg?react";
import { useLocation, useNavigate } from "react-router-dom";
import DeleteWordButton from "@/assets/SVGs/DeleteWord.svg?react";
import BlueButton from "@/components/Button/BlueButton";
import { COLORS } from "@/styles/colors";
import FlexContainer from "@/components/common/flex-container";
import { useEffect, useState } from "react";
import { wordApi } from "@/apis/axiosInstance";

const VOCABOOK_CONTENTS = [
  { word: "word", meaning: "meaning", example: "example" },
  { word: "word2", meaning: "meaning2", example: "example2" },
  { word: "word3", meaning: "meaning3", example: "example3" },
];

const VocaburalyContents = () => {
  const navigate = useNavigate();
  const [vocaList, setVocaList] = useState([]);

  const location = useLocation();

  function handleGoToBack() {
    navigate(-1);
  }

  function handleGotoStudyWords() {
    navigate("/vocabulary/id/study", {
      state: { title: location.state.title, contents: vocaList },
    });
  }

  useEffect(() => {
    const wordList = wordApi.loadWordList();
    wordList
      .then((res) => {
        if (res.status === 200) {
          setVocaList(res.data);
          console.log(res);
          console.log(vocaList);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <FlexContainer direction="column" alignItems="stretch" gap={2}>
      <BackButton onClick={handleGoToBack} />
      <PageTitle>{location.state.title}</PageTitle>
      <FlexContainer direction="column" alignItems="stretch" gap={2}>
        {vocaList.map((item, index) => (
          <WordContainer>
            <WordContent
              key={index}
              word={item.koreanWord}
              meaning={item.mean}
            ></WordContent>
            <DeleteWordButtonContainer>
              <DeleteWordButton />
            </DeleteWordButtonContainer>
          </WordContainer>
        ))}
        <BlueButton
          onClickFunc={handleGotoStudyWords}
          text={"단어장 공부하기"}
        />
      </FlexContainer>
    </FlexContainer>
  );
};

export default VocaburalyContents;

const PageTitle = styled.div`
  color: ${COLORS.black};
`;

const WordContainer = styled(FlexContainer)`
  display: flex;
  align-items: center;
`;

const DeleteWordButtonContainer = styled.div``;
