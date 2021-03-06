import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import cx from "classnames";

import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./Work.module.scss";

import GoogleKeepImage from "../public/home/Google keep.jpg";
import MarmitasImage from "../public/home/Marmitas.jpg";
import NutriScanImage from "../public/home/NutriScan.jpg";
import PeeledOrangeImage from "../public/home/Peeled orange.jpg";

const Work: NextPage = () => (
  <>
    <Head>
      <title>Work – Shaily Gandhi</title>
    </Head>

    <Header />
    <main>
      <h1 className={styles.title}>Selected Work</h1>
      <Project
        image={NutriScanImage}
        title="NutriScan"
        subtitle="Helping users choose healthier food products"
        desc="How might we help users to choose healthier products in the market, to maintain a health-conscious lifestyle?"
        link="/work/nutriscan"
        backgroundColor="#f3e4a7"
      />
      <Project
        image={PeeledOrangeImage}
        title="Peeled Orange"
        subtitle="An online magazine for busy intellactuals"
        desc="How might we help users to indulge more in self-care and explore new passion despite having busy life?"
        link="/work/peeled-orange"
        backgroundColor="#ecd2ca"
      />
      <Project
        image={GoogleKeepImage}
        title="Google Keep"
        subtitle="Adding a new feature for travel enthusiastics to plan better"
        desc="How might we help Google Keep users make notes in a more structured way to better organize their travel information?"
        link="/work/google-keep"
        backgroundColor="#94b1d5"
      />
      <Project
        image={MarmitasImage}
        title="Marmitas Da Horta"
        subtitle="Designing an e-commerce website for a vegan meal service"
        desc="How might we help customers have a ready-made, tasty, home cooked meals to keep a healthy & eco-friendly lifestyle?"
        link="/work/marmitas"
        backgroundColor="#8bc1c5"
      />
    </main>
    <Footer />
  </>
);

const Project = (props: {
  image: StaticImageData;
  title: string;
  subtitle: string;
  desc: string;
  link: string;
  backgroundColor: string;
}) => (
  <section style={{ background: props.backgroundColor }}>
    <Link href={props.link}>
      <a className={cx(styles.project, styles.container)}>
        <div className={styles["project__image"]}>
          <Image src={props.image} alt={props.title} />
        </div>
        <div className={styles["project__content"]}>
          <h2 className={styles["project__title"]}>{props.title}</h2>
          <h3 className={styles["project__subtitle"]}>{props.subtitle}</h3>
          <p className={styles["project__desc"]}>{props.desc}</p>
        </div>
      </a>
    </Link>
  </section>
);

export default Work;
