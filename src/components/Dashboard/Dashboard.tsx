import CurrentState from "./CurrentState";
import Badge from "./Badge";
import BadgeIcon from "@/assets/SVGs/BadgeIcon.svg?react";
import BoatIcon from "@/assets/SVGs/BoatIcon.svg?react";
import Report from "./Report";
import FlexContainer from "../common/flex-container";

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
		<FlexContainer
			direction="column"
			alignItems="stretch"
			alignSelf="stretch"
			fullWidth
		>
			<FlexContainer fullWidth alignItems="stretch" alignSelf="stretch">
				<CurrentState name={`Level ${level}`} info={exp} max={100} />
				<CurrentState name={"오늘의 요약"} info={todayComplete} max={5} />
			</FlexContainer>
			<FlexContainer alignItems="stretch" alignSelf="stretch">
				<Badge icon={BadgeIcon} name={badgeName} />
				<Badge icon={BoatIcon} name={boatName} />
				<Badge icon={BoatIcon} name={boatName} />
			</FlexContainer>
			<FlexContainer>
				<Report />
			</FlexContainer>
		</FlexContainer>
	);
};

export default Dashboard;
