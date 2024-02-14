import { COLORS } from "@/styles/colors";
import styled from "styled-components";

interface ICProps {
	placeholder: string;
}

const InputComponent = ({ placeholder }: ICProps) => {
	return <Input placeholder={placeholder} />;
};

const Input = styled.input`
	width: 100%;
	color: ${COLORS.black};
	background-color: ${COLORS.white};
	border: 1px solid ${COLORS.lightGray};
	border-radius: 0.8rem;
	padding: 1rem;
	font-size: 1.4rem;
	min-height: 8rem;
`;

export default InputComponent;
