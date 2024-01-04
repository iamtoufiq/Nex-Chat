"use client";

import { SessionProvider } from "next-auth/react"; //the SessionProvider from next-auth/react relies on browser APIs to manage user sessions so we have used "use client";

export interface AuthContextProps {
  children: React.ReactNode;
}

export default function AuthContext({ children }: AuthContextProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
