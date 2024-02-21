import styled from "styled-components";
import BlueButton from "@/components/Button/BlueButton";
import { COLORS } from "@/styles/colors";
import { userApi } from "@/apis/axiosInstance";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { TokenAtom } from "@/recoil/TokenAtom";
import { useSetRecoilState } from "recoil";

const SignIn = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const setAccessToken = useSetRecoilState(TokenAtom);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.redirectedFrom?.pathname || "/";

  async function handleSingInButton() {
    event?.preventDefault();
    await userApi
      .signIn()
      .then((res) => {
        if (res.data.code === 200) {
          localStorage.setItem("accessToken", res.data.result.accessToken);
          setAccessToken(res.data.result.accessToken);
          navigate(from);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <SignInContainer>
      <SignInForm>
        <InputID
          value={id}
          placeholder="id"
          type="text"
          onChange={(e) => setId(e.target.value)}
        ></InputID>
        <InputPW
          value={pw}
          placeholder="password"
          type="text"
          onChange={(e) => setPw(e.target.value)}
        ></InputPW>
        <BlueButton
          text={"로그인"}
          onClickFunc={handleSingInButton}
        ></BlueButton>
      </SignInForm>
    </SignInContainer>
  );
};

export default SignIn;

const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputID = styled.input`
  width: 20rem;
  color: ${COLORS.black};
  background-color: ${COLORS.white};
  border: 1px solid ${COLORS.lightGray};
  border-radius: 0.8rem;
  padding: 1rem;
  font-size: 1.4rem;
  min-height: 1rem;
  margin-bottom: 20px;
`;

const InputPW = styled.input`
  width: 20rem;
  color: ${COLORS.black};
  background-color: ${COLORS.white};
  border: 1px solid ${COLORS.lightGray};
  border-radius: 0.8rem;
  padding: 1rem;
  font-size: 1.4rem;
  min-height: 1rem;
  margin-bottom: 20px;
`;
function useReciolState(TokenAtom: RecoilState<undefined>): [any, any] {
  throw new Error("Function not implemented.");
}
