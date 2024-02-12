import styled from "styled-components";
import React, { FunctionComponent, useEffect, useState } from "react";

interface CurrentStateProps {
  icon: FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;
  name: string;
  info: number;
  max: number;
}

interface ProgressProps {
  width: number;
}

const CurrentState = ({ icon: Icon, name, info, max }: CurrentStateProps) => {
  return (
    <StateContainer>
      <Icon />
      <StateName>{name} </StateName>
      <ProgressBar>
        <Progress width={(info / max) * 100} />
      </ProgressBar>
      <Info>
        {info} / {max}
      </Info>
    </StateContainer>
  );
};

export default CurrentState;

const StateContainer = styled.div`
  color: black;
  width: 420px;
  height: 100px;
  border: solid #a6ddfc;
  border-radius: 15px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const StateName = styled.div``;

const ProgressBar = styled.div`
  width: 80%;
  height: 30px;
  background-color: #dedede;
  border-radius: 12px;
  font-weight: 600;
  font-size: 0.8rem;
  margin-top: 20px;
  overflow: hidden;
`;

const Progress = styled.div<ProgressProps>`
  width: ${({ width }) => width}%;
  height: 30px;
  padding: 0;
  text-align: center;
  background-color: #ffc041;
  color: #111;
`;

const Info = styled.div``;
