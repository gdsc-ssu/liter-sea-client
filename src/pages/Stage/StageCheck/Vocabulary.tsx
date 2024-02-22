import styled from "styled-components";
import StateStage from "@/components/StateStage/StateStage";
import Problem from "@/components/Problem/Problem";
import InputComponent from "@/components/AnswerInput/InputComponent";
import NextButton from "@/components/Button/NextButton";
import FlexContainer from "@/components/common/flex-container";

const Vocabulary = () => {
	return (
		<FlexContainer direction="column" gap={2}>
			<StateStage number={1} />
			<FlexContainer gap={2} wrap="wrap">
				<FlexItem gap={2}>
					<TextBox>단어</TextBox>
				</FlexItem>
				<FlexItem fullWidth>
					<Problem title={"다음 단어의 의미를 설명하시오"}>
						<InputComponent placeholder="내 답변" />
					</Problem>
					<NextButton text="다음 문제 풀기" />
				</FlexItem>
			</FlexContainer>
		</FlexContainer>
	);
};

const FlexItem = styled(FlexContainer).attrs({
	direction: "column",
	alignItems: "stretch",
	alignSelf: "stretch",
})`
	flex: 1 1 40%;
`;

const TextBox = styled.div`
	width: 30rem;
`;

export default Vocabulary;
