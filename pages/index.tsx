import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import "../styles/global.css";

const Home: NextPage = () => {
  return (
    <div className="bg-[#F2F3F4]">
      <Head>
        <title>Lingo</title>
        <meta name="description" content="chat app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-3xl font-bold text-center">Lingo</h1>
    </div>
  );
};

export default Home;
