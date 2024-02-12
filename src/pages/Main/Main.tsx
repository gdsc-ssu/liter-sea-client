import BlueButton from "@/components/Button/BlueButton";
import Dashboard from "@/components/Dashboard/Dashboard";
import Map from "@/components/Map/Map";
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
    <>
      <MainContainer>
        <Map currentLocation={USER_INFO.currentLocation} />
        <Dashboard
          level={USER_INFO.level}
          exp={USER_INFO.exp}
          todayComplete={USER_INFO.todayComplete}
          badgeName={USER_INFO.badgeName}
          boatName={USER_INFO.boatName}
        />
      </MainContainer>
      <BlueButton text="항해 시작" onClickFunc={handleGoToTodaySummary} />
    </>
  );
};

export default Main;

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
