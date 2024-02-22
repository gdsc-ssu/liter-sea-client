import styled from "styled-components";
import { COLORS } from "@/styles/colors";
import BlueButton from "@/components/Button/BlueButton";
import FlexContainer from "@/components/common/flex-container";

const StageResult = () => {
	const handleOnClick = () => {};

	return (
		<FlexContainer gap={2} wrap="wrap">
			<div style={{ minWidth: "20rem" }}>이미지</div>
			<FlexItem fullWidth gap={4}>
				<FlexContainer direction="column" alignItems="flex-start">
					<div style={{ fontWeight: 600 }}>테스트 결과</div>
					<FlexContainer
						direction="column"
						alignItems="stretch"
						fullWidth
						padding={2}
						style={{ backgroundColor: `${COLORS.boxBg}` }}
						gap={2}
					>
						<ResultComponent>
							<ResultTitle>수필</ResultTitle>
							<ResultBar></ResultBar>
						</ResultComponent>
						<ResultComponent>
							<ResultTitle>수능 비문학</ResultTitle>
							<ResultBar></ResultBar>
						</ResultComponent>
						<ResultComponent>
							<ResultTitle>보고서</ResultTitle>
							<ResultBar></ResultBar>
						</ResultComponent>
						<ResultComponent>
							<ResultTitle>뉴스 기사 생활</ResultTitle>
							<ResultBar></ResultBar>
						</ResultComponent>
						<ResultComponent>
							<ResultTitle>뉴스 기사 경제 / 과학</ResultTitle>
							<ResultBar></ResultBar>
						</ResultComponent>
					</FlexContainer>
				</FlexContainer>
				<FlexContainer direction="column" alignItems="stretch">
					<span style={{ textAlign: "center" }}>
						<b>수필</b>부터 시작해요
					</span>
					<BlueButton text="시작하기" onClickFunc={handleOnClick} />
				</FlexContainer>
			</FlexItem>
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

const ResultComponent = styled(FlexContainer).attrs({
	direction: "column",
	alignItems: "flex-start",
})``;

const ResultTitle = styled.div`
	font-size: 1.4rem;
`;

const ResultBar = styled.div`
	background-color: ${COLORS.lightGray};

	width: 100%;
	height: 0.8rem;
	border-radius: 0.8rem;
`;

export default StageResult;
