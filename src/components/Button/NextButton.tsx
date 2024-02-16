import { COLORS } from "@/styles/colors";
import * as styled from "./Button.style";

interface BtnProps {
	text: string;
}

const NextButton = ({ text }: BtnProps) => {
	return (
		<styled.BtnContainer
			style={{ backgroundColor: `${COLORS.primary}`, borderRadius: "0.8rem" }}
		>
			{text}
		</styled.BtnContainer>
	);
};

export default NextButton;
