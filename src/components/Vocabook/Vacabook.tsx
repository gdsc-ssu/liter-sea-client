import { COLORS } from "@/styles/colors";
import styled from "styled-components";

interface VacabookProps {
	title: string;
	id: string;
	onClickVocabook: () => void;
}

const Vocabook = ({ title, id, onClickVocabook }: VacabookProps) => {
	return (
		<>
			<Container onClick={onClickVocabook} id={id}>
				<BookTitle>{title}</BookTitle>
			</Container>
		</>
	);
};

const Container = styled.div`
	display: flex;
	background-color: ${COLORS.white};

	flex: 1 1 40%;

	border-radius: 0.8rem;
`;

const BookTitle = styled.div`
	color: ${COLORS.black};
	padding: 1.5rem;
`;
export default Vocabook;
