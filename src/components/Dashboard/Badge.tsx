import { COLORS } from "@/styles/colors";
import styled from "styled-components";
import React, { FunctionComponent } from "react";
import FlexContainer from "../common/flex-container";

interface BadgeProps {
	icon: FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;
	name: string;
}
const Badge = ({ icon: Icon, name }: BadgeProps) => {
	return (
		<BadgeContainer
			direction="column"
			alignSelf="stretch"
			fullWidth
			padding={1.5}
		>
			<Icon />
			<span>{name}</span>
		</BadgeContainer>
	);
};

export default Badge;

const BadgeContainer = styled(FlexContainer)`
	color: ${COLORS.black};
	border: solid ${COLORS.lightGray};
	border-radius: 0.8rem;
`;
