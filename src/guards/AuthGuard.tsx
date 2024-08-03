import useAuth from "@hooks/useAuth";
import { FC } from "react";
import { Navigate } from "react-router-dom";

interface ChildrenProps {
  children: React.ReactNode;
}

const AuthGuard: FC<ChildrenProps> = ({ children }) => {
  const { isAuthenticated, isInitialized } = useAuth();

  if (!isInitialized) return <div>Loading</div>;

  if (!isAuthenticated) return <Navigate to="/auth/sign-in" replace />;

  return <>{children}</>;
};

export default AuthGuard;
