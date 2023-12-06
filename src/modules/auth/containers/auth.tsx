import React from "react";
import { useNavigate } from "react-router-dom";
import { LoadingOverlay } from "@mantine/core";
import { clearSession } from "services/store";

import { AuthContext } from "../context";
import { IEntity } from "../types";
import useProfile from "../use-profile";

interface AuthProps {
   children: React.ReactNode;
}

const Auth = ({ children }: AuthProps) => {
   const [{ user, isLoading }, setState] = useProfile();
   const navigete = useNavigate();

   if (isLoading) return <LoadingOverlay visible overlayBlur={2} />;

   const methods = {
      login: (user: IEntity.User) => setState(prev => ({ ...prev, user })),
      logout: () => {
         clearSession();
         setState(prev => ({ ...prev, user: null, verification: false }));
         navigete("/");
      }
   };

   return <AuthContext.Provider value={{ user, isLoading, methods }}>{children}</AuthContext.Provider>;
};

export default Auth;
