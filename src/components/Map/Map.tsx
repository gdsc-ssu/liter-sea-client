import styled from "styled-components";
import CircleSvg from "@/assets/SVGs/NormalSvg.svg?react";
import LockCircleSvg from "@/assets/SVGs/LockSvg.svg?react";
import IslandSvg from "@/assets/SVGs/IslandSvg.svg?react";
import LockIslandSvg from "@/assets/SVGs/IslandLockedSvg.svg?react";
import BoatSvg from "@/assets/SVGs/BoatSvg.svg?react";
import FlexContainer from "../common/flex-container";
import { COLORS } from "@/styles/colors";

type TileType = "circle" | "island";
type TileStatus = "COMPLETE" | "LOCKED" | "CURRENT";

interface MapProps {
  currentLocation: number;
}

interface TileButtonProps {
  xLocation: number;
}

const TEN_ARRAY = [...Array(10)].map((_, i) => 10 - i);
const LOCATION_ARRAY = [-150, -80, 0, 100, 160, 90, 0, -80, -150, -90];

const Map = ({ currentLocation }: MapProps) => {
  return (
    <MapContainer direction="column">
      {TEN_ARRAY.map((item, index) => (
        <TileButton key={index} xLocation={LOCATION_ARRAY[item - 1]}>
          {item <= currentLocation ? (
            item === currentLocation ? (
              <Tile tileType="circle" status="CURRENT" />
            ) : item % 5 != 0 ? (
              <Tile tileType="circle" status="COMPLETE" />
            ) : (
              <Tile tileType="island" status="COMPLETE" />
            )
          ) : item % 5 != 0 ? (
            <Tile tileType="circle" status="LOCKED" />
          ) : (
            <Tile tileType="island" status="LOCKED" />
          )}
        </TileButton>
      ))}
    </MapContainer>
  );
};

export default Map;

const MapContainer = styled(FlexContainer)`
  overflow: scroll;
  background-color: ${COLORS.primaryDim};
  border-radius: 0.8rem;
  height: calc(100vh - 220px);
  padding: 2rem;
`;

const TileButton = styled.button<TileButtonProps>`
  padding: 1rem;
  transform: ${({ xLocation }) => `translate(${xLocation}px, 0px)`};
`;

const Tile = ({
  tileType,
  status,
}: {
  tileType: TileType;
  status: TileStatus;
}): JSX.Element => {
  switch (tileType) {
    case "circle":
      if (status === "COMPLETE") return <CircleSvg />;
      else if (status === "CURRENT") return <BoatSvg />;
      else return <LockCircleSvg />;

    case "island":
      if (status === "COMPLETE") return <IslandSvg />;
      else if (status === "CURRENT") return <BoatSvg />;
      else return <LockIslandSvg />;
  }
};
