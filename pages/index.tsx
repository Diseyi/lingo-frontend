import type { NextPage } from "next";
import { Button, Space, DatePicker, Card } from "antd";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
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
