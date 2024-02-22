import { homeApi } from "@/apis/axiosInstance";
import BlueButton from "@/components/Button/BlueButton";
import Dashboard from "@/components/Dashboard/Dashboard";
import Map from "@/components/Map/Map";
import FlexContainer from "@/components/common/flex-container";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { UserInfoAtom } from "@/recoil/UserInfoAtom";

const USER_INFO = {
  todayComplete: 0,
  badgeName: "겁 없는 탐험가",
  boatName: "초심자의 배",
};

const Main = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useRecoilState(UserInfoAtom);
  const [badgeInfo, setBadgeInfo] = useState("");
  const [boatInfo, setBoatInfo] = useState("");

  useEffect(() => {
    const main = homeApi.loadMain();

    main
      .then((res) => {
        if (res.status === 200) {
          setUserInfo(res.data);
          console.log(userInfo);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    homeApi
      .loadBadgeInfo()
      .then((res) => {
        if (res.status === 200) {
          setBadgeInfo(res.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    homeApi
      .loadBoatInfo()
      .then((res) => {
        if (res.status === 2000) {
          setBoatInfo(res.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function handleGoToTodaySummary() {
    navigate("/summary/1");
  }

  return (
    <FlexContainer wrap="wrap" gap={2}>
      <FlexItem direction="column">
        <Map currentLocation={userInfo?.location + 1} />
        <BlueButton text="항해 시작" onClickFunc={handleGoToTodaySummary} />
      </FlexItem>
      <FlexItem fullWidth>
        <Dashboard
          level={userInfo?.level}
          exp={userInfo?.exp}
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
