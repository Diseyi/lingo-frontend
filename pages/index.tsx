import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Logo from "../assets/icon/logo.svg";
import Image from "next/image";
import Hamburger from "../assets/icon/hamburger.svg";
import Sidebar from "../components/sidebar";

const Home: NextPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenu, setIsMenu] = useState(false);

  useEffect(() => checkLoggedIn());

  const checkLoggedIn = () => {
    const userInSession = sessionStorage.getItem("auth") || "";
    const parsed = userInSession ? JSON.parse(userInSession) : "";
    console.log(parsed);

    if (parsed) {
      setIsLoggedIn(true);
    }
  };

  const showMenu = () => {
    setIsMenu(!isMenu);
  };

  return (
    <div className="bg-[#f2f3f5] h-screen ">
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
            <div className="">
              <Image
                src={Logo.src}
                width="230px"
                height="68px"
                alt=""
                className=""
              />
            </div>
          </div>

          {isLoggedIn ? (
            <div className="flex-row items-center hidden lg:flex ">
              <div className="text-base font-bold bg-[#AAE8DF] px-8 mx-2 py-2 rounded ">
                <Link href="/chats">Go to chat </Link>
              </div>
            </div>
          ) : (
            <div className=" flex-row gap-4 items-center hidden lg:flex ">
              <Link href="/login">
                <div className="text-[#171B23] px-8 py-2 rounded hover:border hover:bg-gray-200 text-base cursor-pointer">
                  Login 
                </div>
              </Link>
              <Link href="/signup">
                <div className="text-white hover:bg-[#AAE8DF] hover:text-gray-600 px-8 py-2 rounded text-base boxshadow2 bg-[#52B1A4] cursor-pointer">
                  Sign up
                </div>
              </Link>
            </div>
          )}
        </nav>
      </header>
      {isMenu && <Sidebar />}
      <main className="py-10">
        <h1 className="text-center text-2xl">Welcome to Lingo</h1>
      </main>
    </div>
  );
};

export default Home;
