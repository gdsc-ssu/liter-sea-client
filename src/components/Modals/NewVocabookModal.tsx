import React, { ChangeEvent, useState, FormEvent } from "react";
import styled from "styled-components";

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

const ModalContent = styled.div`
  background-color: #fff;
  padding: 1rem;
  width: 400px;
  height: auto;
  border-radius: 5px;
`;

const NewVocabookForm = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
`;

const ExitButton = styled.button`
  color: black;
  transform: translate(170px, 0);
`;

const NewVocabookInput = styled.input`
  background-color: #e1f6ff;
  border-radius: 15px;
  border-style: none;
  padding: 10px 20px;
  margin: 20px 0px 20px 0px;
  text-align: left;
  color: black;
`;

const NewVocabookButton = styled.button`
  background-color: #46c9f3;
  padding: 10px 80px;
  border-radius: 15px;
  text-align: center;
`;

export default NewVocabookModal;
