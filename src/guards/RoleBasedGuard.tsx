import useAuth from "@hooks/useAuth";
import { ROLES } from "@utils/constants";
import { FC, ReactNode } from "react";

export interface RoleBasedGuardProps {
  accessibleRoles: Array<ROLES>;
  children: ReactNode;
}

const RoleBasedGuard: FC<RoleBasedGuardProps> = ({
  children,
  accessibleRoles,
}) => {
  const { user } = useAuth();

  if (!accessibleRoles.includes(user!.role)) {
    return <div>You don't have permission to access this page.</div>;
  }

  return <>{children}</>;
};

export default RoleBasedGuard;
