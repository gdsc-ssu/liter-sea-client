import { COLORS } from "@/styles/colors";
import React, { ChangeEvent, useState, FormEvent } from "react";
import styled from "styled-components";
import FlexContainer from "../common/flex-container";

type ModalProps = {
	onClose: () => void;
	onCreate: () => void;
};

const NewVocabookModal = ({ onClose, onCreate }: ModalProps) => {
	const [newVocabookTitle, setNewVocabookTitle] = useState("");

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setNewVocabookTitle(value);
	};

	const handleNewVocabookButton = () => {
		// 단어장 추가하기
		onCreate();
	};

	return (
		<div className="MewVocabookModal">
			<Mask onClick={onClose} />
			<ModalBody>
				<ModalContent>
					<NewVocabookForm>
						<ExitButton onClick={onClose}>X</ExitButton>
						<NewVocabookInput
							placeholder="새 단어장"
							onChange={onChange}
							value={newVocabookTitle}
						/>
						<NewVocabookButton onClick={handleNewVocabookButton}>
							만들기
						</NewVocabookButton>
					</NewVocabookForm>
				</ModalContent>
			</ModalBody>
		</div>
	);
};

const Mask = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
`;

const ModalBody = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

const ModalContent = styled(FlexContainer)`
	background-color: ${COLORS.white};

	border-radius: 0.8rem;
`;

const NewVocabookForm = styled.form`
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	align-items: center;
	gap: 2rem;

	padding: 3rem 7rem;
`;

const ExitButton = styled.button`
	color: ${COLORS.black};
	align-self: flex-end;
`;

const NewVocabookInput = styled.input`
	background-color: ${COLORS.white};
	border-radius: 0.8rem;
	border: 1px solid ${COLORS.lightGray};
	padding: 2rem 10rem;

	color: ${COLORS.black};

	font-size: 1.4rem;
`;

const NewVocabookButton = styled.button`
	background-color: ${COLORS.primary};
	padding: 1rem;
	border-radius: 0.8rem;
	align-self: stretch;
`;

export default NewVocabookModal;
