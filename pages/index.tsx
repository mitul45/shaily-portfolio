import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Shaily Gandhi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col h-screen justify-center items-center">
        <h1 className="text-2xl">Hi! I'm Shaily.</h1>
        <h2 className="text-xl">It is great to have you here :)</h2>
      </main>
    </div>
  );
};

export default Home;
