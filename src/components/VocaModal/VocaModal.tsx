import { COLORS } from "@/styles/colors";
import styled from "styled-components";
import FlexContainer from "../common/flex-container";

interface VMProps {
	word: string;
}

const VocaModal = ({ word }: VMProps) => {
	return (
		<Container direction="column" alignItems="stretch" gap={0.25} padding={1}>
			<WordBox>{word}</WordBox>
			<ExplainBox>어쩌구저쩌구</ExplainBox>
		</Container>
	);
};

const Container = styled(FlexContainer)`
	background-color: ${COLORS.white};
	box-shadow: 0 15px 30px 0 rgba(212, 216, 229, 0.3),
		0 0 1px 0 rgba(0, 0, 0, 0.4);

	position: sticky;
	bottom: 3.4rem;
	z-index: 10;
`;

const WordBox = styled.span`
	font-weight: 600;
	color: ${COLORS.primary};
`;

const ExplainBox = styled.span``;

export default VocaModal;
