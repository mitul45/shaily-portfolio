import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import cx from "classnames";

import Header from "../components/Header";
import Footer from "../components/Footer";

import ProfileImage from "../public/home/profile.jpg";
import GoogleKeepImage from "../public/home/Google keep.jpg";
import MarmitasImage from "../public/home/Marmitas.jpg";
import NutriScanImage from "../public/home/NutriScan.jpg";
import PeeledOrangeImage from "../public/home/Peeled orange.jpg";

const Home: NextPage = () => (
  <>
    <Head>
      <title>Shaily Gandhi</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <Header />
      <div className={cx(styles.hero, styles.container)}>
        <div className={styles.profile}>
          <Image src={ProfileImage} alt="Profile photo" />
        </div>
        <div className={styles.heroContent}>
          <h4 className={styles.heroSubTitle}>Hi, I am</h4>
          <h1 className={styles.heroTitle}>Shaily</h1>
          <h4 className={styles.heroSubTitle}>UX / UI Designer</h4>
          <p>
            Having my humble roots in Architecture, I am a curious designer who
            likes to focus on human centric experience rather than building just
            a product or an environment.
          </p>
          <p>
            I seek to bring harmony and balance in the world with my creative
            and critical design thinking.
          </p>
          <p>Explore. Build. Contribute.</p>
        </div>
      </div>
      <div className={styles.container}>
        <h1 className={styles.work}>Work</h1>
        <div className={styles.projects}>
          <Project
            Image={NutriScanImage}
            title="NutriScan"
            desc="Helping users choose healthier food products"
          />
          <Project
            Image={PeeledOrangeImage}
            title="Peeled Orange"
            desc="An online magazine for busy intellactuals"
          />
          <Project
            Image={GoogleKeepImage}
            title="Google Keep"
            desc="Adding a new feature – Travel template."
          />
          <Project
            Image={MarmitasImage}
            title="Marmitas Da Horta"
            desc="A vegan meal service"
          />
        </div>
      </div>
    </main>
    <Footer />
  </>
);

const Project = (props: {
  Image: StaticImageData;
  title: string;
  desc: string;
}) => (
  <>
    <div className={styles.project}>
      <Image src={props.Image} alt="Profile photo" />
      <h2 className={styles.center}>{props.title}</h2>
      <p className={styles.center}>{props.desc}</p>
    </div>
  </>
);

export default Home;
