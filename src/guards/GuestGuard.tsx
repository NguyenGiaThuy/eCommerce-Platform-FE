import useAuth from "@hooks/useAuth";
import { FC } from "react";
import { Navigate } from "react-router-dom";

interface ChildrenProps {
  children: React.ReactNode;
}

const GuestGuard: FC<ChildrenProps> = ({ children }) => {
  const { isInitialized, isAuthenticated } = useAuth();

  if (!isInitialized) return <div>Loading</div>;

  if (isAuthenticated) return <Navigate to="/" />;

  return <>{children}</>;
};

export default GuestGuard;
