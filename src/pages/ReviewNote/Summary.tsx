import styled from "styled-components";
import Text from "@/components/Text/Text";
import Problem from "@/components/Problem/Problem";
import InputComponent from "@/components/AnswerInput/InputComponent";
import BlueButton from "@/components/Button/BlueButton";
import { COLORS } from "@/styles/colors";
import FlexContainer from "@/components/common/flex-container";

const Summary = () => {
	const handleOnClick = () => {};
	return (
		<FlexContainer gap={2} wrap="wrap">
			<FlexItem gap={2}>
				<Text />
			</FlexItem>
			<FlexItem fullWidth>
				<ScoreBox>80점</ScoreBox>
				<Problem title={"내 요약"}>
					<InputComponent placeholder="내 요약" />
				</Problem>
				<Problem title={"모범 답안"}>
					<AnswerBox>
						한국전쟁은 1950년 6월 25일 북한의 남침으로 시작된 전쟁입니다. 전쟁은
						3년 동안 지속되었고, 결국 한국의 승리로 끝났습니다. 한국전쟁은
						한국의 역사에 큰 영향을 미친 사건입니다.
					</AnswerBox>
				</Problem>
				<FlexContainer fullWidth justifyContent="space-evenly">
					<ArrowBox>이전</ArrowBox>
					<BlueButton text="핵심문장 찾기" onClickFunc={handleOnClick} />
					<ArrowBox>다음</ArrowBox>
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

const ScoreBox = styled.div`
	align-self: flex-end;
	font-size: 1.4rem;
	color: ${COLORS.primary};
`;

const AnswerBox = styled.div`
	background-color: ${COLORS.white};
	border-radius: 0.8rem;
	border: 1px solid ${COLORS.lightGray};
	padding: 1rem;
	font-size: 1.4rem;
	line-height: 1.6;
`;

const ArrowBox = styled.div`
	margin: 0 2rem;
`;

export default Summary;
