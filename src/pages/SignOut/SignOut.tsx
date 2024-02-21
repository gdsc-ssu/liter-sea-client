import styled from "styled-components";
import { TokenAtom } from "@/recoil/TokenAtom";
import { useSetRecoilState } from "recoil";
import { gapi, loadAuth2 } from "gapi-script";
import { useState } from "react";

const SignOut = () => {
  const setAccessToken = useSetRecoilState(TokenAtom);
  const clientId = import.meta.env.VITE_CLIENT_ID;
  const scopes = "https://www.googleapis.com/auth/userinfo.profile";

  const onSignOutSuccess = () => {
    setAccessToken(undefined);
    localStorage.removeItem("accessToken");
  };

  function handleSignOutButton() {
    gapi.load("auth2", () => {
      gapi.auth2
        .init({
          client_id: clientId,
          scope: scopes,
        })
        .then(() => {
          const auth2 = gapi.auth2.getAuthInstance(); // auth2 변수에 할당
          console.log(auth2);
          if (auth2 && auth2.isSignedIn.get()) {
            // 사용자가 로그인된 상태라면 로그아웃 실행
            auth2.signOut().then(() => {
              console.log("사용자가 로그아웃했습니다.");
              // 로컬 스토리지에서도 토큰 제거
              localStorage.removeItem("accessToken");
              // Recoil 상태 업데이트
              setAccessToken(undefined);
            });
          } else {
            console.log("사용자가 로그인되어 있지 않습니다.");
          }
        })
        .catch((error) => {
          console.error("Google API 초기화 중 오류 발생:", error);
        });
    });
  }

  return <SignOutButton onClick={handleSignOutButton}>로그아웃</SignOutButton>;
};

export default SignOut;

const SignOutButton = styled.button``;
