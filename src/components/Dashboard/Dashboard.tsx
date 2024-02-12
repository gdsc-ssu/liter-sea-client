import styled from "styled-components";
import CurrentState from "./CurrentState";
import LevelIcon from "@/assets/SVGs/LevelIcon.svg?react";
import TodayIcon from "@/assets/SVGs/TodayIcon.svg?react";
import Badge from "./Badge";
import BadgeIcon from "@/assets/SVGs/BadgeIcon.svg?react";
import BoatIcon from "@/assets/SVGs/BoatIcon.svg?react";
import Report from "./Report";

interface DashboardPrps {
  level: number;
  exp: number;
  todayComplete: number;
  badgeName: string;
  boatName: string;
}

const Dashboard = ({
  level,
  exp,
  todayComplete,
  badgeName,
  boatName,
}: DashboardPrps) => {
  return (
    <DashboardContainer>
      <CurrentState
        icon={LevelIcon}
        name={`Level ${level}`}
        info={exp}
        max={100}
      />
      <CurrentState
        icon={TodayIcon}
        name={"오늘의 요약"}
        info={todayComplete}
        max={5}
      />
      <Badge icon={BadgeIcon} name={badgeName} />
      <Badge icon={BoatIcon} name={boatName} />
      <Report />
    </DashboardContainer>
  );
};

export default Dashboard;

const DashboardContainer = styled.div``;
