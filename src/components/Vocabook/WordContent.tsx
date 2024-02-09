import styled from "styled-components";

interface WordContentProps {
  word: string;
  meaning: string;
  example: string;
}

const WordContent = ({ word, meaning, example }: WordContentProps) => {
  return (
    <Content>
      <WordName>{word}</WordName>
      <WordMeaning>{meaning}</WordMeaning>
      <WordExample>{example}</WordExample>
    </Content>
  );
};

export default WordContent;

const Content = styled.div`
  width: 1200px;
  height: 140px;
  border: solid 2px;
  border-color: #a6ddfc;
  border-radius: 15px;
  color: black;
  margin: 10px 0px;
  padding: 10px;
`;

const WordName = styled.div``;

const WordMeaning = styled.div``;

const WordExample = styled.div``;
