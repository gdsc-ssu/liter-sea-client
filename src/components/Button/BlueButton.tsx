import { COLORS } from "@/styles/colors";
import * as styled from "./Button.style";

interface BtnProps {
  text: string;
  onClickFunc: () => void;
}

const BlueButton = ({ text, onClickFunc }: BtnProps) => {
  return (
    <styled.BtnContainer
      style={{ backgroundColor: `${COLORS.blue}` }}
      onClick={onClickFunc}
    >
      {text}
    </styled.BtnContainer>
  );
};

export default BlueButton;
