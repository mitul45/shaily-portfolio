import type { NextPage } from "next";
import Head from "next/head";
import styles from "./Index.module.scss";
import Image from "next/image";
import Link from "next/link";
import cx from "classnames";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ButtonLink from "../components/Link";

import ProfileImage from "../public/home/profile.jpg";
import GoogleKeepImage from "../public/home/Google keep.jpg";
import MarmitasImage from "../public/home/Marmitas.jpg";
import NutriScanImage from "../public/home/NutriScan.jpg";
import PeeledOrangeImage from "../public/home/Peeled orange.jpg";

const Home: NextPage = () => (
  <>
    <Head>
      <title>Shaily Gandhi</title>
    </Head>

    <Header />
    <main>
      <div className={styles["hero-bg"]}>
        <section className={cx(styles.hero, styles.container)}>
          <div className={styles["hero__profile"]}>
            <Image src={ProfileImage} alt="Profile photo" />
          </div>
          <div className={styles["hero__content"]}>
            <div>
              <h4 className={styles["hero__subtitle"]}>Hi, I am</h4>
              <h1 className={styles["hero__title"]}>Shaily</h1>
              <h4 className={styles["hero__subtitle"]}>UX / UI Designer.</h4>
              <p className={styles["hero__desc"]}>
                I create meaningful journeys revolving around human aspirations
                and behavior.
              </p>
            </div>
            <div>
              <ButtonLink
                href="/Resume Shaily Gandhi.pdf"
                title="See my resume"
              />
            </div>
          </div>
        </section>
      </div>
      <section className={cx(styles.section, styles.container)}>
        <h1 className={styles["section__title"]}>Work</h1>
        <div className={styles.projects}>
          <Project
            image={NutriScanImage}
            title="NutriScan"
            desc="Helping users choose healthier food products"
            link="/work/nutriscan"
          />
          <Project
            image={PeeledOrangeImage}
            title="Peeled Orange"
            desc="An online magazine for busy intellactuals"
            link="/work/peeled-orange"
          />
          <Project
            image={GoogleKeepImage}
            title="Google Keep"
            desc="Adding a new feature for travel enthusiastics to plan better"
            link="/work/google-keep"
          />
          <Project
            image={MarmitasImage}
            title="Marmitas Da Horta"
            desc="Designing an e-commerce website for a vegan meal service"
            link="/work/marmitas"
          />
        </div>
      </section>
    </main>
    <Footer />
  </>
);

const Project = (props: {
  image: StaticImageData;
  title: string;
  desc: string;
  link: string;
}) => (
  <Link href={props.link}>
    <a className={styles["projects__project"]}>
      <Image src={props.image} alt="Profile photo" />
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
    </a>
  </Link>
);

export default Home;
