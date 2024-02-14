import { COLORS } from "@/styles/colors";
import { useState } from "react";
import styled from "styled-components";
import VocaModal from "../VocaModal/VocaModal";
import FlexContainer from "../common/flex-container";

const Text = () => {
	const [clickedIdx, setIsClickedIdx] = useState(-1);
	const title = "어디서 구할 수 있나요?";
	const data =
		"사용 가능한 로렘 입섬 구절에는 많은 변형이 있지만, 대부분은 어떤 형태로든 주입된 유머나 조금도 믿을 수 없어 보이는 무작위 단어에 의해 변형되었습니다. 로렘 입섬 구절을 사용하려면 텍스트 중간에 창피한 것이 숨겨져 있지 않은지 확인해야 합니다. 인터넷의 모든 로렘 입섬 생성기는 필요에 따라 미리 정의된 청크를 반복하는 경향이 있으며, 이를 인터넷 최초의 진정한 생성기로 만듭니다. 이는 합리적으로 보이는 로렘 입섬을 생성하기 위해 200개 이상의 라틴어 단어 사전과 소수의 모델 문장 구조를 결합하여 사용합니다. 따라서 생성된 로렘 입섬은 항상 반복, 주입된 유머 또는 특징 없는 단어 등으로부터 자유롭습니다. 사용 가능한 로렘 입섬 구절에는 많은 변형이 있지만, 대부분은 어떤 형태로든 주입된 유머나 조금도 믿을 수 없어 보이는 무작위 단어에 의해 변형되었습니다. 로렘 입섬 구절을 사용하려면 텍스트 중간에 창피한 것이 숨겨져 있지 않은지 확인해야 합니다. 인터넷의 모든 로렘 입섬 생성기는 필요에 따라 미리 정의된 청크를 반복하는 경향이 있으며, 이를 인터넷 최초의 진정한 생성기로 만듭니다. 이는 합리적으로 보이는 로렘 입섬을 생성하기 위해 200개 이상의 라틴어 단어 사전과 소수의 모델 문장 구조를 결합하여 사용합니다. 따라서 생성된 로렘 입섬은 항상 반복, 주입된 유머 또는 특징 없는 단어 등으로부터 자유롭습니다";
	const dataArr = data.split(" ");

	return (
		<FlexContainer
			direction="column"
			alignItems="stretch"
			style={{ minWidth: "20rem" }}
		>
			<div style={{ fontWeight: 600 }}>{title}</div>
			<div style={{ marginBottom: "1.6rem" }}>
				{dataArr.map((el, idx) => {
					return (
						<>
							<Word
								id="ClickedSpan"
								clicked={idx === clickedIdx}
								onClick={() => {
									setIsClickedIdx(idx);
								}}
							>
								{el}
							</Word>{" "}
						</>
					);
				})}
			</div>
			{clickedIdx > -1 && <VocaModal word={dataArr[clickedIdx]} />}
		</FlexContainer>
	);
};

const Word = styled.span<{ clicked: boolean }>`
	background-color: ${(props) =>
		props.clicked ? COLORS.primary : "transparent"};
	line-height: 1.8;
	font-size: 1.4rem;
`;

export default Text;
