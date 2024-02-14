import styled from "styled-components";
import { COLORS } from "@/styles/colors";
import Text from "@/components/Text/Text";
import StateStage from "@/components/StateStage/StateStage";
import Problem from "@/components/Problem/Problem";
import NextButton from "@/components/Button/NextButton";
import FlexContainer from "@/components/common/flex-container";

const Multiple = () => {
	return (
		<FlexContainer direction="column" gap={2}>
			<StateStage number={1} />
			<FlexContainer gap={2} wrap="wrap">
				<FlexItem gap={2}>
					<Text />
				</FlexItem>
				<FlexItem
					fullWidth
					style={{
						position: "sticky",
						height: "100%",
						top: "7rem",
						zIndex: 10,
					}}
				>
					<Problem title={"주어진지문핵심문장은?"}>
						<MultipleBox>
							<NumberBox>1</NumberBox>
							<NumberTextBox>이거인가요</NumberTextBox>
						</MultipleBox>
						<MultipleBox>
							<NumberBox>2</NumberBox>
							<NumberTextBox>저거인가요</NumberTextBox>
						</MultipleBox>
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

const MultipleBox = styled(FlexContainer)`
	background-color: ${COLORS.white};
	padding: 1rem 1.5rem;
`;

const NumberBox = styled.span`
	background-color: ${COLORS.lightGray};
	color: ${COLORS.middleGray};
	border-radius: 100%;

	display: flex;
	align-items: center;
	align-self: center;
	justify-content: center;

	width: 2rem;
	height: 2rem;
`;

const NumberTextBox = styled(FlexContainer)``;

export default Multiple;
