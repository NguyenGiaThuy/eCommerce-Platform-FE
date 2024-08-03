import { FC } from "react";
import { useRoutes } from "react-router-dom";

import SignIn from "../pages/SignIn";
import GuestGuard from "@guards/GuestGuard";
import Home from "@pages/Home";

const AppRouter: FC = () => {
  return useRoutes([
    {
      path: "/",
      element: (
        <GuestGuard>
          <Home />
        </GuestGuard>
      ),
    },
    {
      path: "auth",
      children: [
        {
          path: "sign-in",
          element: (
            <GuestGuard>
              <SignIn />
            </GuestGuard>
          ),
        },
      ],
    },
  ]);
};

export default AppRouter;
