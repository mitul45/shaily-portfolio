import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import cx from "classnames";

import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Work.module.css";

import ProfileImage from "../public/profile.jpg";
import GoogleKeepImage from "../public/home/Google keep.jpg";
import MarmitasImage from "../public/home/Marmitas.jpg";
import NutriScanImage from "../public/home/NutriScan.jpg";
import PeeledOrangeImage from "../public/home/Peeled orange.jpg";

const Work: NextPage = () => (
  <>
    <Head>
      <title>Work – Shaily Gandhi</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />
    <main>
      <div className="container">
        <h1 className={cx(styles.title, "center")}>Selected Work</h1>
        <Project
          image={NutriScanImage}
          title="NutriScan"
          subtitle="Helping users choose healthier food products"
          desc="How might we help users to choose healthier products in the market, to maintain a health-conscious lifestyle?"
        />
        <Project
          image={PeeledOrangeImage}
          title="Peeled Orage"
          subtitle="An online magazine for busy intellactuals"
          desc="How might we help users to indulge more in self-care and explore new passion despite having busy life?"
        />
        <Project
          image={GoogleKeepImage}
          title="Google Keep"
          subtitle="Adding a new feature for travel enthusiastics to plan better"
          desc="How might we help Google Keep users make notes in a more structured way to better organize their travel information?"
        />
        <Project
          image={MarmitasImage}
          title="Marmitas Da Horta"
          subtitle="Designing an e-commerce website for a vegan meal service"
          desc="How might we help customers have a ready-made, tasty, home cooked meals to keep a healthy & eco-friendly lifestyle?"
        />
      </div>
    </main>
    <Footer />
  </>
);

const Project = (props: {
  image: StaticImageData;
  title: string;
  subtitle: string;
  desc: string;
}) => (
  <>
    <div className={styles.project}>
      <div className={styles.projectImage}>
        <Image src={props.image} alt="Profile photo" />
      </div>
      <div className={styles.projectText}>
        <h2>{props.title}</h2>
        <h3>{props.subtitle}</h3>
        <p>{props.desc}</p>
      </div>
    </div>
  </>
);

export default Work;