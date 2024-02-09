import styled from "styled-components";

interface WordCardProps {
  word: string;
  meaning: string;
  example: string;
}

const WordCard = ({ word, meaning, example }: WordCardProps) => {
  return (
    <Content>
      <WordName>{word}</WordName>
      <WordMeaning>{meaning}</WordMeaning>
      <WordExample>{example}</WordExample>
    </Content>
  );
};

export default WordCard;

const Content = styled.div`
  width: 1080px;
  height: 400px;
  border-radius: 15px;
  color: black;
  margin: 10px 0px;
  padding: 10px;
  background-color: #e1f6ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const WordName = styled.div``;

const WordMeaning = styled.div``;

const WordExample = styled.div``;
