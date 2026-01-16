import React, { createContext, useContext, useState } from "react";
import type { AuthState, Tenant, Role } from "../types";

interface AuthContextType extends AuthState {
  setTenant: (tenant: Tenant) => void;
  setRole: (role: Role) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [tenant, setTenant] = useState<Tenant>("orgA");
  const [role, setRole] = useState<Role>("admin");

  return (
    <AuthContext.Provider value={{ tenant, role, setTenant, setRole }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return context;
};
