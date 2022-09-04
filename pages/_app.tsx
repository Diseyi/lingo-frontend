import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import AuthProvider from "../store/auth";
import Theme from "../store/themeContext";
import UserProvider from "../store/userContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <UserProvider>
        <Theme>
          <ThemeProvider attribute="class">
            <Component {...pageProps} />
          </ThemeProvider>
        </Theme>
      </UserProvider>
    </AuthProvider>
  );
}

export default MyApp;
