import { COLORS } from "@/styles/colors";
import styled from "styled-components";
import FlexContainer from "../common/flex-container";

interface WordCardProps {
	word: string;
	meaning: string;
	example: string;
}

const WordCard = ({ word, meaning, example }: WordCardProps) => {
	return (
		<Content direction="column" padding={4}>
			<WordName>{word}</WordName>
			<WordMeaning>{meaning}</WordMeaning>
			<WordExample>{example}</WordExample>
		</Content>
	);
};

export default WordCard;

const Content = styled(FlexContainer)`
	border-radius: 0.8rem;
	color: ${COLORS.black};

	background-color: ${COLORS.boxBg};
`;

const WordName = styled.div``;

const WordMeaning = styled.div``;

const WordExample = styled.div``;
