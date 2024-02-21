import { COLORS } from "@/styles/colors";
import * as styled from "./Button.style";

interface BtnProps {
  text: string;
  onClick: () => void;
}

const NextButton = ({ text, onClick }: BtnProps) => {
  return (
    <styled.BtnContainer
      onClick={onClick}
      style={{ backgroundColor: `${COLORS.primary}`, borderRadius: "0.8rem" }}
    >
      {text}
    </styled.BtnContainer>
  );
};

export default NextButton;
