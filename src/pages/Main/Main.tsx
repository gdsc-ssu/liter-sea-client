import BlueButton from "@/components/Button/BlueButton";
import Dashboard from "@/components/Dashboard/Dashboard";
import Map from "@/components/Map/Map";
import FlexContainer from "@/components/common/flex-container";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const USER_INFO = {
	nickname: "sna0e",
	level: 8,
	exp: 89,
	todayComplete: 4,
	badgeName: "겁 없는 탐험가",
	boatName: "초심자의 배",
	currentLocation: 7,
};

const Main = () => {
	const navigate = useNavigate();

	function handleGoToTodaySummary() {
		navigate("/summary/1");
	}

	return (
		<FlexContainer wrap="wrap" gap={2}>
			<FlexItem direction="column">
				<Map currentLocation={USER_INFO.currentLocation} />
				<BlueButton text="항해 시작" onClickFunc={handleGoToTodaySummary} />
			</FlexItem>
			<FlexItem fullWidth>
				<Dashboard
					level={USER_INFO.level}
					exp={USER_INFO.exp}
					todayComplete={USER_INFO.todayComplete}
					badgeName={USER_INFO.badgeName}
					boatName={USER_INFO.boatName}
				/>
			</FlexItem>
		</FlexContainer>
	);
};

const FlexItem = styled(FlexContainer).attrs({
	alignItems: "stretch",
	alignSelf: "stretch",
	wrap: "wrap",
})`
	flex: 1 1 40%;
`;

export default Main;
