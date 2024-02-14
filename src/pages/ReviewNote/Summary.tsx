import styled from "styled-components";
import Text from "@/components/Text/Text";
import Problem from "@/components/Problem/Problem";
import InputComponent from "@/components/AnswerInput/InputComponent";
import BlueButton from "@/components/Button/BlueButton";
import { COLORS } from "@/styles/colors";

const Summary = () => {
	const handleOnClick = () => {};
	return (
		<Container>
			<TextBox>
				<Text />
			</TextBox>
			<ProblemBox>
				<ScoreBox>80점</ScoreBox>
				<Problem title={"내 요약"} height="15rem">
					<InputComponent placeholder="내 요약" />
				</Problem>
				<Problem title={"모범 답안"} height="15rem">
					<AnswerBox>
						한국전쟁은 1950년 6월 25일 북한의 남침으로 시작된 전쟁입니다. 전쟁은
						3년 동안 지속되었고, 결국 한국의 승리로 끝났습니다. 한국전쟁은
						한국의 역사에 큰 영향을 미친 사건입니다.
					</AnswerBox>
				</Problem>
				<ButtonBox>
					<ArrowBox>이전</ArrowBox>
					<div style={{ width: "20rem" }}>
						<BlueButton text="핵심문장 찾기" onClickFunc={handleOnClick} />
					</div>
					<ArrowBox>다음</ArrowBox>
				</ButtonBox>
			</ProblemBox>
		</Container>
	);
};

const Container = styled.div`
	padding: 3rem;
	display: flex;
	justify-content: center;
`;

const TextBox = styled.div`
	margin-right: 100px;
	margin-top: 4rem;
`;

const ProblemBox = styled.div`
	display: flex;
	margin-top: 4rem;
	flex-direction: column;
`;

const ScoreBox = styled.div`
	display: flex;
	margin-left: auto;
`;

const AnswerBox = styled.div`
	background-color: ${COLORS.white};
	width: 100%;
	padding: 1rem;
`;

const ButtonBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ArrowBox = styled.div`
	margin: 0 2rem;
`;

export default Summary;
