import { isSignInSelector } from "@/recoil/TokenAtom";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";

const ProtectedRoute = () => {
  const isSignIn = useRecoilValue(isSignInSelector);
  const currentLocation = useLocation();

  return isSignIn ? (
    <Outlet />
  ) : (
    <Navigate
      to={"/signin"}
      replace
      state={{ redirectedFrom: currentLocation }}
    />
  );
};

export default ProtectedRoute;
