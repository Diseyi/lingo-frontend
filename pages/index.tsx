import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Logo from "../assets/icon/logo.svg";
import Image from "next/image";

const Home: NextPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => checkLoggedIn());

  const checkLoggedIn = () => {
    const userInSession = sessionStorage.getItem("auth") || "";
    const parsed = userInSession ? JSON.parse(userInSession) : "";
    console.log(parsed);

    if (parsed) {
      setIsLoggedIn(true);
    }
  };

  return (
    <div className="bg-[#f2f3f5] h-screen ">
      <Head>
        <title>Lingo</title>
        <meta name="description" content="chat app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="hidden  md:block">
        <nav className="flex flex-row items-center justify-between w-[90%] m-auto py-4 ">
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
            <div className=" flex-row items-center hidden lg:flex ">
              <div className="text-lg px-8">
                Already have an account?
              </div>
              <div className="text-base bg-[#AAE8DF] px-8 py-2 rounded ">
                <Link href="/login"> Login </Link>
              </div>
            </div>
          )}
        </nav>
      </header>
      <main className="">
        <h1 className="text-center">Lingo</h1>
      </main>
    </div>
  );
};

export default Home;
