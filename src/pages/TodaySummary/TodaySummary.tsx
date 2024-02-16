import styled from "styled-components";
import Text from "@/components/Text/Text";
import StateStage from "@/components/StateStage/StateStage";
import Problem from "@/components/Problem/Problem";
import InputComponent from "@/components/AnswerInput/InputComponent";
import NextButton from "@/components/Button/NextButton";
import FlexContainer from "@/components/common/flex-container";

const TodaySummary = () => {
	return (
		<FlexContainer direction="column" gap={2}>
			<StateStage number={1} />
			<FlexContainer gap={2} wrap="wrap">
				<FlexItem gap={2}>
					<Text />
				</FlexItem>
				<FlexItem fullWidth>
					<Problem title={"다음 지문을 요약해주세요"}>
						<InputComponent placeholder="내 요약" />
					</Problem>
					<NextButton text="제출하기" />
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

export default TodaySummary;
