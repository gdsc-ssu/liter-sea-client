import * as styled from "./Header.style";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleGoToVocabulary = () => {
    navigate("/vocabulary");
  };

  return (
    <styled.FullBox>
      <styled.Container>
        <styled.LeftBox>
          <styled.LogoBox>logo</styled.LogoBox>
          <styled.MenuComponentBox>복습 노트</styled.MenuComponentBox>
          <styled.MenuComponentBox onClick={handleGoToVocabulary}>
            단어장
          </styled.MenuComponentBox>
        </styled.LeftBox>
        <styled.RightBox>
          <styled.NameBox>닉네임</styled.NameBox>
          <styled.ProfileImgBox></styled.ProfileImgBox>
        </styled.RightBox>
      </styled.Container>
    </styled.FullBox>
  );
};

export default Header;
