import styled from "styled-components";
import React, { FunctionComponent } from "react";

interface BadgeProps {
  icon: FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;
  name: string;
}
const Badge = ({ icon: Icon, name }: BadgeProps) => {
  return (
    <BadgeContainer>
      <Icon />
      <BadgeName>{name}</BadgeName>
    </BadgeContainer>
  );
};

export default Badge;

const BadgeContainer = styled.div`
  color: black;
  width: 140px;
  height: 100px;
  border: solid #a6ddfc;
  border-radius: 15px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const BadgeName = styled.div``;
