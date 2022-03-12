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

    <Header />
    <main>
      <div className={cx(styles.hero, "container")}>
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
      <div className="container">
        <h1 className={styles.work}>Work</h1>
        <div className={styles.projects}>
          <Project
            image={NutriScanImage}
            title="NutriScan"
            desc="Helping users choose healthier food products"
          />
          <Project
            image={PeeledOrangeImage}
            title="Peeled Orange"
            desc="An online magazine for busy intellactuals"
          />
          <Project
            image={GoogleKeepImage}
            title="Google Keep"
            desc="Adding a new feature for travel enthusiastics to plan better"
          />
          <Project
            image={MarmitasImage}
            title="Marmitas Da Horta"
            desc="Designing an e-commerce website for a vegan meal service"
          />
        </div>
      </div>
    </main>
    <Footer />
  </>
);

const Project = (props: {
  image: StaticImageData;
  title: string;
  desc: string;
}) => (
  <>
    <div className={styles.project}>
      <Image src={props.image} alt="Profile photo" />
      <h2 className="center">{props.title}</h2>
      <p className="center">{props.desc}</p>
    </div>
  </>
);

export default Home;
