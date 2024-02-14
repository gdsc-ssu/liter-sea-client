import styled from "styled-components";
import Vocabook from "@/components/Vocabook/Vacabook";
import VocabookSetting from "@/assets/SVGs/VocabookSetting.svg?react";
import ModalPortal from "@/components/Modals/ModalPortal";
import NewVocabookModal from "@/components/Modals/NewVocabookModal";
import { useState } from "react";
import VocabookDeleteButton from "@/assets/SVGs/VocabookDeleteButton.svg?react";
import { useNavigate } from "react-router-dom";
import { COLORS } from "@/styles/colors";

const BOOK_LIST = [
	{ title: "단어장1", id: "1" },
	{ title: "단어장2", id: "2" },
	{ title: "단어장3", id: "3" },
];

const Vocabulary = ({}) => {
	const navigate = useNavigate();

	const [isOpen, setIsOpen] = useState(false);
	const [isEditMode, setIsEditMode] = useState(false);

	function handleOpenModal() {
		setIsOpen(true);
	}

	function handleCloseModal() {
		setIsOpen(false);
	}

	function handleCreateModal() {
		setIsOpen(false);
	}

	function handleSettingButton() {
		const currentMode = isEditMode;
		setIsEditMode(!currentMode);
	}

	function handleVocabook(event: React.MouseEvent<HTMLElement, MouseEvent>) {
		const targetEvent = event?.currentTarget;
		navigate("/vocabulary/id", {
			state: BOOK_LIST[parseInt(targetEvent.id) - 1],
		});
	}

	return (
		<>
			<TitleContainer>
				<LayoutTitle>단어장</LayoutTitle>
				<VocabookSettingButton onClick={handleSettingButton}>
					<VocabookSetting />
				</VocabookSettingButton>
			</TitleContainer>
			<Container>
				{BOOK_LIST.map((item, index) => (
					<>
						<Vocabook
							key={index}
							title={item.title}
							id={item.id}
							onClickVocabook={handleVocabook}
						/>
						{isEditMode ? (
							<VocabookDeleteButton
								id="VocabookDeleteButton"
								className="hidden"
							/>
						) : (
							<></>
						)}
					</>
				))}
			</Container>
			<CreateVocabookButton onClick={handleOpenModal}>
				+ 새 단어장 추가
			</CreateVocabookButton>
			{isOpen && (
				<ModalPortal>
					<NewVocabookModal
						onClose={handleCloseModal}
						onCreate={handleCreateModal}
					/>
				</ModalPortal>
			)}
		</>
	);
};

const TitleContainer = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 40px auto 0px;
	width: 1080px;
`;

const LayoutTitle = styled.div`
	color: ${COLORS.black};
`;

const Container = styled.div`
	margin: 40px auto;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
	align-content: flex-start;
	width: 1080px;
	height: 600px;
	border-radius: 0.8rem;
	border: dashed 2px ${COLORS.primaryDim};
	padding: 60px 80px;
`;

const CreateVocabookButton = styled.button`
	background-color: ${COLORS.primary};
	color: ${COLORS.white};
	width: 500px;
	border-radius: 0.8rem;
	margin: -150px auto;
	padding: 18px;
`;

const VocabookSettingButton = styled.button``;

export default Vocabulary;
