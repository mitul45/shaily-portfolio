import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./About.module.scss";

import heroImage from "../public/about/hero.jpg";

const About: NextPage = () => (
  <>
    <Head>
      <title>About me – Shaily Gandhi</title>
    </Head>

    <Header />
    <main>
      <section className={styles.hero}>
        <div className={styles["hero__content"]}>
          <div className={styles["hero__image"]}>
            <Image src={heroImage} alt="" />
          </div>
          <div className={styles["hero__text"]}>
            Explore. Build. Contribute.
          </div>
        </div>
      </section>
      <section className={styles.content}>
        <p>
          Having my humble roots in Architecture, I love to build digital
          products that help users to have meaningful and pleasurable
          experience.
        </p>
        <p>
          I have always been fascinated with designing products that people can
          relate them with. Having worked in Architecture gives me the ability
          to work cross-functions and to look at the bigger picture and lead
          with it. I like to engage in work where attention to detail and
          precision matter a great deal.
        </p>
        <p>
          I am a designer, hailing from India. Currently, settled down in the
          Netherlends since 4 years. I like to spend time with my family, read a
          book, or paint when I am not busy crafting digital experiences.
        </p>
      </section>
    </main>
    <Footer />
  </>
);

export default About;
