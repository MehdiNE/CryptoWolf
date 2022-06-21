import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import HomeFeed from "../components/HomeFeed";
import Sidebar from "../components/sidebar/Sidebar";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.home}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.div}>
        <HomeFeed />
      </div>
    </div>
  );
};

export default Home;
