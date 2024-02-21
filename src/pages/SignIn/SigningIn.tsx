import { userApi } from "@/apis/axiosInstance";
import styled from "styled-components";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { TokenAtom } from "@/recoil/TokenAtom";
import { useNavigate, useLocation } from "react-router-dom";

const SigningIn = () => {
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");
  const setAccessToken = useSetRecoilState(TokenAtom);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.redirectedFrom?.pathname || "/";

  useEffect(() => {
    const googleSignIn = userApi.GoogleSignIn(code);
    googleSignIn.then((res) => {
      if (res.status === 200) {
        localStorage.setItem("accessToken", res.data.result.accessToken);
        setAccessToken(res.data.result.accessToken);
        navigate(from);
      }
    });
  }, []);

  return <SigningInWrapper>Signing In ...</SigningInWrapper>;
};

export default SigningIn;

const SigningInWrapper = styled.div``;
