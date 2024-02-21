import styled from "styled-components";
import Vocabook from "@/components/Vocabook/Vacabook";
import VocabookSetting from "@/assets/SVGs/VocabookSetting.svg?react";
import ModalPortal from "@/components/Modals/ModalPortal";
import NewVocabookModal from "@/components/Modals/NewVocabookModal";
import { useState, useEffect } from "react";
import VocabookDeleteButton from "@/assets/SVGs/VocabookDeleteButton.svg?react";
import { useNavigate } from "react-router-dom";
import { COLORS } from "@/styles/colors";
import FlexContainer from "@/components/common/flex-container";
import { wordApi } from "@/apis/axiosInstance";

const BOOK_LIST = [
  { title: "단어장1", id: "1" },
  { title: "단어장2", id: "2" },
  { title: "단어장3", id: "3" },
];

const Vocabulary = ({}) => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [vocaList, setVocaList] = useState([]);

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

  useEffect(() => {
    const word = wordApi.loadWordList();
    word
      .then((res) => {
        if (res.status === 200) {
          setVocaList(res.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <FlexContainer direction="column" alignItems="stretch">
      <div style={{ fontWeight: 600 }}>단어장</div>
      <FlexContainer
        direction="column"
        style={{ background: `${COLORS.boxBg}` }}
        padding={2}
        gap={3}
        alignItems="stretch"
      >
        <VocabookSettingButton onClick={handleSettingButton}>
          <VocabookSetting />
        </VocabookSettingButton>
        <Container gap={2} wrap="wrap">
          {BOOK_LIST.map((item, index) => (
            <FlexContainer gap={0.5} fullWidth>
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
                " "
              )}
            </FlexContainer>
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
      </FlexContainer>
    </FlexContainer>
  );
};

const Container = styled(FlexContainer)`
  border-radius: 0.8rem;
`;

const CreateVocabookButton = styled.button`
  background-color: ${COLORS.primary};
  color: ${COLORS.white};

  border-radius: 0.8rem;
  padding: 1rem;
`;

const VocabookSettingButton = styled.button`
  align-self: flex-start;
`;

export default Vocabulary;
