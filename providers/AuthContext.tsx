'use client'

import React, { createContext, useContext, ReactNode } from "react";
import { useAuth, AuthState } from "@/hooks/useAuth";

export const AuthContext = createContext<AuthState | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({
  children,
}: AuthProviderProps): JSX.Element | any {
  const authState = useAuth();

  return (
    <AuthContext.Provider value={authState}>{children}</AuthContext.Provider>
  );
}

export function useAuthContext(): AuthState {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
}