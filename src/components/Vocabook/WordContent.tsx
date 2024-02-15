import { COLORS } from "@/styles/colors";
import styled from "styled-components";
import FlexContainer from "../common/flex-container";

interface WordContentProps {
	word: string;
	meaning: string;
	example: string;
}

const WordContent = ({ word, meaning, example }: WordContentProps) => {
	return (
		<Content direction="column" alignItems="stretch" fullWidth padding={2}>
			<WordName>{word}</WordName>
			<WordMeaning>{meaning}</WordMeaning>
			<WordExample>{example}</WordExample>
		</Content>
	);
};

export default WordContent;

const Content = styled(FlexContainer)`
	border: solid 1px ${COLORS.primaryDim};
	border-radius: 0.8rem;
	color: ${COLORS.black};
`;

const WordName = styled.div``;

const WordMeaning = styled.div``;

const WordExample = styled.div``;
