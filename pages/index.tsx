import { useEffect, useState } from "react";
import type { NextPage } from "next";
import { useTheme } from "next-themes";
import Head from "next/head";
import Link from "next/link";
import Logo from "../assets/icon/logo.svg";
import darkmodeLogo from "../assets/icon/darkmodeLogo.svg";
import Image from "next/image";
import Hamburger from "../assets/icon/hamburger.svg";
import Hamburger2 from "../assets/icon/hamburger2.svg";
import Sidebar from "../components/sidebar";

const Home: NextPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenu, setIsMenu] = useState(false);

  const { theme, setTheme } = useTheme();

  // useEffect(() => checkLoggedIn());

  const checkLoggedIn = () => {
    const userInSession = localStorage.getItem("user");
    if (userInSession) {
      try {
        const parsed = JSON.parse(userInSession);
        if (parsed) {
          setIsLoggedIn(true);
        }
      } catch (error) {
        // Handle the error if JSON parsing fails
        console.error("Error parsing userInSession:", error);
      }
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
            {theme === "dark" ? (
              <div className="">
                <Image
                  src={darkmodeLogo.src}
                  width="230px"
                  height="68px"
                  alt=""
                  className=""
                />
              </div>
            ) : (
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
          </div>

          <div className="" onClick={showMenu}>
            {theme === "dark" ? (
              <div className="">
                <Image
                  src={Hamburger2.src}
                  width="24px"
                  height="24px"
                  alt=""
                  className=""
                />
              </div>
            ) : (
              <div className="">
                <Image
                  src={Hamburger.src}
                  width="24px"
                  height="24px"
                  alt=""
                  className=""
                />
              </div>
            )}
          </div>
        </nav>
        <nav className="hidden  md:flex flex-row items-center justify-between w-[90%] m-auto py-4 ">
          <div className="flex flex-row items-center gap-9">
            {theme === "dark" ? (
              <div className="">
                <Image
                  src={darkmodeLogo.src}
                  width="230px"
                  height="68px"
                  alt=""
                  className=""
                />
              </div>
            ) : (
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
          </div>

          {isLoggedIn ? (
            <div className="flex-row items-center hidden md:flex ">
              <Link href="/chats">
                <div className="text-white font-semibold hover:bg-[#AAE8DF] hover:text-gray-600 px-8 py-2 rounded text-base boxshadow2 bg-[#52B1A4] cursor-pointer">
                  Go to chat
                </div>
              </Link>
            </div>
          ) : (
            <div className=" flex-row gap-4 items-center hidden md:flex ">
              <Link href="/login">
                <button className=" font-semibold hover:bg-gray-200 text-gray-600 px-8 py-2 rounded text-base boxshadow2 bg-gray-300 cursor-pointer">
                  Log in
                </button>
              </Link>
              <Link href="/signup">
                <button className="text-white font-semibold hover:bg-[#AAE8DF] hover:text-gray-600 px-8 py-2 rounded text-base boxshadow2 bg-[#52B1A4] cursor-pointer">
                  Sign up
                </button>
              </Link>
            </div>
          )}
        </nav>
      </header>
      {isMenu && <Sidebar />}
      <main className="py-10">
        <div className=" m-auto w-[90%] md:w-[600px] text-center">
          <h1 className=" dark:text-[#DCE0E8] text-2xl py-2 font-bold">
            Welcome to Lingo
          </h1>
          <p className=" ">
            Lingo is a chat app that bridges the communication gap of people of
            different languages, it enables people of different languages
            communicate with one another effectively. With Lingo, a french can
            now communicate with a spanish in their own language with ease.{" "}
          </p>

          <h2 className="font-bold dark:text-[#DCE0E8] text-2xl py-2 mt-6 ">
            How does Lingo Work
          </h2>
          <p className="">
            If your primary language of communication is French and you have a
            spanish friend whose primary language of commuication is spanish,
            when you send them a message in french, they get to receive your
            message in spanih.
          </p>
          <p className="">
            Under the hood, Lingo intercepts your message and translates it
            before sending it to the receiver. With Lingo chatting is now fun
            and easy
          </p>
        </div>
      </main>
    </div>
  );
};

export default Home;
