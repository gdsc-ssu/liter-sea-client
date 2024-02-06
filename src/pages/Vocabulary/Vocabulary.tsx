import styled from "styled-components";
import Vocabook from "@/components/Vocabook/Vacabook";
import VocabookSetting from "@/assets/SVGs/VocabookSetting.svg?react";
import ModalPortal from "@/components/Modals/ModalPortal";
import NewVocabookModal from "@/components/Modals/NewVocabookModal";
import { useState } from "react";
import VocabookDeleteButton from "@/assets/SVGs/VocabookDeleteButton.svg?react";

const BOOK_LIST = [
  { title: "단어장1", id: "1" },
  { title: "단어장2", id: "2" },
  { title: "단어장3", id: "3" },
];

const Vocabulary = ({}) => {
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
    const vocabook = document.querySelector("#VocabookDeleteButton");
    vocabook?.toggleAttribute("hidden");
    setIsEditMode(true);
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
            <Vocabook key={index} title={item.title} id={item.id} />
            <VocabookDeleteButton
              id="VocabookDeleteButton"
              className="hidden"
            />
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

export default Vocabulary;

const LayoutTitle = styled.div`
  color: black;
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
  border-radius: 15px;
  border: dashed 2px #a6ddfc;
  padding: 60px 80px;
`;

const CreateVocabookButton = styled.button`
  background-color: #46c9f3;
  color: white;
  width: 500px;
  border-radius: 15px;
  margin: -150px auto;
  padding: 18px;
`;

const VocabookSettingButton = styled.div``;
