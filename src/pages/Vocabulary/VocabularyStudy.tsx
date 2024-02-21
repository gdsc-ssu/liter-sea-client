import { useLocation, useNavigate } from "react-router-dom";
import BackButton from "@/assets/SVGs/Back.svg?react";
import styled from "styled-components";
import WordCard from "@/components/Vocabook/WordCard";
import { useState, useEffect } from "react";
import { COLORS } from "@/styles/colors";
import FlexContainer from "@/components/common/flex-container";

const VocabularyStudy = () => {
  const [index, setIndex] = useState(0);
  const [sec, setSec] = useState(5);
  const [isPlay, setIsPlay] = useState(true);
  const [wordCardData, setWordCardData] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    setWordCardData(location.state.contents);
  }, [wordCardData]);

  setInterval(handleNextCard, 5000);

  function handleGoToBack() {
    navigate(-1);
  }

  function handleNextCard() {
    let newIndex = index;
    if (newIndex + 1 >= wordCardData.length) {
      newIndex = -1;
    }
    setIndex(newIndex + 1);
  }

  function handlePriorCard() {
    let newIndex = index;
    if (newIndex - 1 < 0) {
      newIndex = wordCardData.length;
    }
    setIndex(newIndex - 1);
  }

  function handlePlayButton() {
    const currentIsPlay = isPlay;
    setIsPlay(!currentIsPlay);
  }

  return (
    <FlexContainer direction="column" gap={3} alignItems="stretch">
      <BackButton onClick={handleGoToBack} />
      <FlexContainer direction="column">
        <FlexContainer justifyContent="space-between">
          <PageTitle>{location.state.title}</PageTitle>
          <CurrentIndex>
            {index + 1} / {wordCardData.length}
          </CurrentIndex>
        </FlexContainer>
        <WordCard
          word={wordCardData[index].koreanWord}
          meaning={wordCardData[index].mean}
        />
      </FlexContainer>

      <FlexContainer alignSelf="center" gap={1.5} direction="column">
        <IntervalController>재생간격 {sec} 초</IntervalController>
        <FlexContainer alignSelf="center" gap={4}>
          <PriorCardButton onClick={handlePriorCard}>⏪</PriorCardButton>
          <PlayButton onClick={handlePlayButton}>
            {isPlay ? "▶" : "⏸"}
          </PlayButton>
          <NextCardButton onClick={handleNextCard}>⏩</NextCardButton>
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  );
};

export default VocabularyStudy;

const PageTitle = styled.div`
  color: ${COLORS.black};
`;

const CurrentIndex = styled.span`
  color: ${COLORS.black};
  align-self: flex-end;
`;

const IntervalController = styled.div``;

const PriorCardButton = styled.button``;

const PlayButton = styled.button`
  color: ${COLORS.black};
`;

const NextCardButton = styled.button``;
