import styled from "styled-components";
import CircleSvg from "@/assets/SVGs/NormalSvg.svg?react";
import LockCircleSvg from "@/assets/SVGs/LockSvg.svg?react";
import IslandSvg from "@/assets/SVGs/IslandSvg.svg?react";
import LockIslandSvg from "@/assets/SVGs/IslandLockedSvg.svg?react";
import BoatSvg from "@/assets/SVGs/BoatSvg.svg?react";

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
    <MapContainer>
      <TileContainer>
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
      </TileContainer>
    </MapContainer>
  );
};

export default Map;

const MapContainer = styled.div`
  background-color: #a6ddfc;
  width: 600px;
  height: 620px;
  border-radius: 15px;
`;

const TileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  overflow-y: auto;
`;

const TileButton = styled.button<TileButtonProps>`
  margin: 40px;
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
