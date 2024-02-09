import { useLocation, useNavigate } from "react-router-dom";
import BackButton from "@/assets/SVGs/Back.svg?react";
import styled from "styled-components";
import WordCard from "@/components/Vocabook/WordCard";
import { useState, useEffect } from "react";

const VocabularyStudy = () => {
  const [index, setIndex] = useState(0);
  const [sec, setSec] = useState(5);
  const [isPlay, setIsPlay] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();
  const wordCardData = location.state.contents;

  setInterval(handleNextCard, 5000);

  function handleGoToBack() {
    navigate(-1);
  }

  function handleNextCard() {
    var newIndex = index;
    if (newIndex + 1 >= wordCardData.length) {
      newIndex = -1;
    }
    setIndex(newIndex + 1);
  }

  function handlePriorCard() {
    var newIndex = index;
    if (newIndex - 1 < 0) {
      newIndex = wordCardData.length;
    }
    setIndex(newIndex - 1);
  }

  function handlePlayButton() {
    var currentIsPlay = isPlay;
    setIsPlay(!currentIsPlay);
  }

  return (
    <>
      <BackButton onClick={handleGoToBack} />
      <PageTitle>{location.state.title}</PageTitle>
      <CardContainer>
        <CurrentIndex>
          {index + 1} / {wordCardData.length}
        </CurrentIndex>
        <WordCard
          word={wordCardData[index].word}
          meaning={wordCardData[index].meaning}
          example={wordCardData[index].example}
        />
      </CardContainer>
      <PlayBarContainer>
        <IntervalController>재생간격 {sec} 초</IntervalController>
        <PriorCardButton onClick={handlePriorCard}>⏪</PriorCardButton>
        <PlayButton onClick={handlePlayButton}>{isPlay ? "▶" : "⏸"}</PlayButton>
        <NextCardButton onClick={handleNextCard}>⏩</NextCardButton>
      </PlayBarContainer>
    </>
  );
};

export default VocabularyStudy;

const PageTitle = styled.div`
  color: black;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CurrentIndex = styled.div`
  color: black;
`;

const PlayBarContainer = styled.div`
  color: black;
  display: flex;
  justify-content: center;
`;

const IntervalController = styled.div`
  position: absolute;
  left: 100px;
`;

const PriorCardButton = styled.button``;

const PlayButton = styled.button`
  color: black;
`;

const NextCardButton = styled.button``;
