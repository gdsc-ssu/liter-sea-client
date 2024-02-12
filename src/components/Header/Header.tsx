import * as styled from "./Header.style";
import { useNavigate } from "react-router-dom";
import ProfileHat from "@/assets/SVGs/UserHat.svg?react";
import { useState } from "react";
import ProfileModal from "@/components/Modals/ProfileModal";
import ModalPortal from "@/components/Modals/ModalPortal";

const Header = () => {
  const navigate = useNavigate();

  const handleGoToMain = () => {
    navigate("/");
  };

  const handleGoToReview = () => {
    navigate("/review");
  };

  const handleGoToVocabulary = () => {
    navigate("/vocabulary");
  };

  const [isOpen, setIsOpen] = useState(false);

  function handleModal() {
    var currentIsOpen = isOpen;
    setIsOpen(!currentIsOpen);
  }

  return (
    <styled.FullBox>
      <styled.Container>
        <styled.LeftBox>
          <styled.LogoBox onClick={handleGoToMain}>logo</styled.LogoBox>
          <styled.MenuComponentBox onClick={handleGoToReview}>
            복습 노트
          </styled.MenuComponentBox>
          <styled.MenuComponentBox onClick={handleGoToVocabulary}>
            단어장
          </styled.MenuComponentBox>
        </styled.LeftBox>
        <styled.RightBox>
          <styled.NameBox>닉네임</styled.NameBox>
          {isOpen && (
            <ModalPortal>
              <ProfileModal onClose={handleModal} />
            </ModalPortal>
          )}
          <styled.ProfileImgBox onClick={handleModal}>
            <ProfileHat transform="scale(0.8)" />
          </styled.ProfileImgBox>
        </styled.RightBox>
      </styled.Container>
    </styled.FullBox>
  );
};

export default Header;
