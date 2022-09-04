import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import { useThemeContext } from "../common/hooks/useThemeContext";
import Head from "next/head";
import Link from "next/link";
import Logo from "../assets/icon/logo.svg";
import darkmodeLogo from "../assets/icon/darkmodeLogo.svg";
import Image from "next/image";
import Hamburger from "../assets/icon/hamburger.svg";
import Sidebar from "../components/sidebar";

const Home: NextPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenu, setIsMenu] = useState(false);

  const { state } = useThemeContext() as any;

  useEffect(() => checkLoggedIn());

  const checkLoggedIn = () => {
    const userInSession = localStorage.getItem("user") || "";
    const parsed = userInSession ? JSON.parse(userInSession) : "";

    if (parsed) {
      setIsLoggedIn(true);
    }
  };

  const showMenu = () => {
    setIsMenu(!isMenu);
  };

  return (
    <div className=" h-screen dark:bg-[#1f2e2b] ">
      <Head>
        <title>Lingo</title>
        <meta name="description" content="chat app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="">
        <nav className="flex py-4 items-center justify-between w-[90%] m-auto md:hidden">
          <div className="">
            <Image
              src={Logo.src}
              width="179px"
              height="53px"
              alt=""
              className=""
            />
          </div>

          <div className="" onClick={showMenu}>
            <Image
              src={Hamburger.src}
              width="24px"
              height="24px"
              alt=""
              className=""
            />
          </div>
        </nav>
        <nav className="hidden  md:flex flex-row items-center justify-between w-[90%] m-auto py-4 ">
          <div className="flex flex-row items-center gap-9">
            {state === "light" && (
              <div className="">
                <Image
                  src={Logo.src}
                  width="230px"
                  height="68px"
                  alt=""
                  className=""
                />
              </div>
            )}

            {state === "dark" && (
              <div className="">
                <Image
                  src={darkmodeLogo.src}
                  width="230px"
                  height="68px"
                  alt=""
                  className=""
                />
              </div>
            )}
          </div>

          {isLoggedIn ? (
            <div className="flex-row items-center hidden lg:flex ">
              <Link href="/chats">
                <div className="text-white font-semibold hover:bg-[#AAE8DF] hover:text-gray-600 px-8 py-2 rounded text-base boxshadow2 bg-[#52B1A4] cursor-pointer">
                  Go to chat
                </div>
              </Link>
            </div>
          ) : (
            <div className=" flex-row gap-4 items-center hidden lg:flex ">
              <Link href="/login">
                <div className=" font-semibold hover:bg-gray-200 text-gray-600 px-8 py-2 rounded text-base boxshadow2 bg-gray-300 cursor-pointer">
                  Login
                </div>
              </Link>
              <Link href="/signup">
                <div className="text-white font-semibold hover:bg-[#AAE8DF] hover:text-gray-600 px-8 py-2 rounded text-base boxshadow2 bg-[#52B1A4] cursor-pointer">
                  Sign up
                </div>
              </Link>
            </div>
          )}
        </nav>
      </header>
      {isMenu && <Sidebar />}
      <main className="py-10">
        <h1 className="text-center dark:text-[#DCE0E8] text-2xl">
          Welcome to Lingo
        </h1>
      </main>
    </div>
  );
};

export default Home;
