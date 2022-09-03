import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import AuthProvider from "../store/auth";
import UserProvider from "../store/userContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </AuthProvider>
  );
}

export default MyApp;
