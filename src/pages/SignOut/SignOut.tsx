import styled from "styled-components";
import { TokenAtom } from "@/recoil/TokenAtom";
import { useRecoilState } from "recoil";
import { gapi, loadAuth2 } from "gapi-script";
import { useState } from "react";
import axios from "axios";
import { googleLogout } from "@react-oauth/google";

const SignOut = () => {
  const [accessToken, setAccessToken] = useRecoilState(TokenAtom);
  const clientId = import.meta.env.VITE_CLIENT_ID;
  const scopes = "https://www.googleapis.com/auth/userinfo.profile";

  const onSignOutSuccess = () => {
    setAccessToken(undefined);
    localStorage.removeItem("accessToken");
  };

  async function handleSignOutButton() {
    localStorage.removeItem("accessToken");
    setAccessToken(undefined);
  }

  return <SignOutButton onClick={handleSignOutButton}>로그아웃</SignOutButton>;
};

export default SignOut;

const SignOutButton = styled.button``;
