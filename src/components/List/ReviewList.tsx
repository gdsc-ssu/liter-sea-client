import styled from "styled-components";
import FlexContainer from "../common/flex-container";

interface RLProps {
	number: number;
	title: string;
	score: number;
}

const ReviewList = ({ number, title, score }: RLProps) => {
	return (
		<FlexContainer
			justifyContent="space-between"
			style={{ padding: "1.5rem 2rem" }}
		>
			<NumberBox>{number}</NumberBox>
			<TitleBox>{title}</TitleBox>
			<ScoreBox>{score}</ScoreBox>
			<ArrowBox>{">"}</ArrowBox>
		</FlexContainer>
	);
};

export const NumberBox = styled.div`
	display: flex;
	justify-content: center;

	font-size: 1.4rem;
`;

export const TitleBox = styled.div`
	display: flex;

	margin-left: 5rem;
	font-size: 1.4rem;
`;

export const ScoreBox = styled.div`
	display: flex;
	justify-content: center;

	font-size: 1.4rem;
`;

export const ArrowBox = styled.div`
	display: flex;
	justify-content: center;

	font-size: 1.4rem;
`;

export default ReviewList;
