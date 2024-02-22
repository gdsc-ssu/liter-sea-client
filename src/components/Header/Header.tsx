import * as styled from "./Header.style";
import { COLORS } from "@/styles/colors";
import { useNavigate } from "react-router-dom";
import ProfileHat from "@/assets/SVGs/UserHat.svg?react";
import { useState } from "react";
import ProfileModal from "@/components/Modals/ProfileModal";
import ModalPortal from "@/components/Modals/ModalPortal";
import FlexContainer from "../common/flex-container";
import Logo from "@/assets/SVGs/logo.svg?react";
import { useRecoilValue } from "recoil";
import { UserInfoAtom } from "@/recoil/UserInfoAtom";
import { isSignInSelector } from "@/recoil/TokenAtom";

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
  const userInfo = useRecoilValue(UserInfoAtom);

  function handleModal() {
    const currentIsOpen = isOpen;
    setIsOpen(!currentIsOpen);
  }

  return (
    <FlexContainer
      justifyContent="center"
      withBorder={false}
      style={{
        backgroundColor: `${COLORS.white}`,
        borderBottom: `1px solid ${COLORS.lightGray}`,
        position: "sticky",
        zIndex: 100,
        top: 0,
      }}
    >
      <FlexContainer
        wrap="wrap"
        style={{
          width: "100%",
          maxWidth: "1280px",
        }}
        alignItems="center"
        justifyContent="space-between"
      >
        <FlexContainer>
          <styled.LogoBox onClick={handleGoToMain}>
            <Logo />
          </styled.LogoBox>
          <styled.MenuComponentBox onClick={handleGoToReview}>
            복습 노트
          </styled.MenuComponentBox>
          <styled.MenuComponentBox onClick={handleGoToVocabulary}>
            단어장
          </styled.MenuComponentBox>
        </FlexContainer>
        <FlexContainer wrap="wrap">
          {userInfo ? userInfo.nickname : ""}
          {isOpen && (
            <ModalPortal>
              <ProfileModal onClose={handleModal} />
            </ModalPortal>
          )}
          <styled.ProfileImgBox onClick={handleModal}>
            <ProfileHat width={"60%"} />
          </styled.ProfileImgBox>
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  );
};

export default Header;
