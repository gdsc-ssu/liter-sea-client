import * as styled from "./Header.style";

const Header = () => {
  return (
    <styled.FullBox>
      <styled.Container>
        <styled.LeftBox>
          <styled.LogoBox>logo</styled.LogoBox>
          <styled.MenuComponentBox>복습 노트</styled.MenuComponentBox>
          <styled.MenuComponentBox>단어장</styled.MenuComponentBox>
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
