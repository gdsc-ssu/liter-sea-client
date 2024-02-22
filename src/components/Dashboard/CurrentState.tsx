import styled from "styled-components";
import React, { FunctionComponent, useEffect, useState } from "react";
import FlexContainer from "../common/flex-container";
import { COLORS } from "@/styles/colors";

interface CurrentStateProps {
	name: string;
	info: number;
	max: number;
}

interface ProgressProps {
	width: number;
}

const CurrentState = ({ name, info, max }: CurrentStateProps) => {
	return (
		<StateContainer direction="column" fullWidth>
			<FlexContainer justifyContent="space-between">
				<span>{name}</span>
				<span>
					{info} / {max}
				</span>
			</FlexContainer>
			<ProgressBar>
				<Progress width={(info / max) * 100} />
			</ProgressBar>
		</StateContainer>
	);
};

export default CurrentState;

const StateContainer = styled(FlexContainer)`
	padding: 1.5rem 1.5rem 1.8rem 1.5rem;
	color: ${COLORS.black};
	border: solid ${COLORS.lightGray};
`;

const ProgressBar = styled.div`
	width: 100%;
	height: 0.8rem;
	background-color: ${COLORS.lightGray};
	border-radius: 0.8rem;
	font-weight: 600;
	overflow: hidden;
`;

const Progress = styled.div<ProgressProps>`
	width: ${({ width }) => width}%;
	height: 0.8rem;
	border-radius: 0.8rem;
	background-color: ${COLORS.point};
	color: ${COLORS.black};
`;
