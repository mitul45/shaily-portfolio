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
      <div className={cx(styles.hero, styles.container)}>
        <div className={styles.profile}>
          <Image src={ProfileImage} alt="Profile photo" />
        </div>
        <div className={styles.heroContent}>
          <div>
            <h4 className={styles.heroSubTitle}>Hi, I am</h4>
            <h1 className={styles.heroTitle}>Shaily</h1>
            <h4 className={styles.heroSubTitle}>UX / UI Designer</h4>
            <p>
              Having my humble roots in Architecture, I am a curious designer
              who likes to focus on human centric experience while building just
              a product.
            </p>
            <p>
              I seek to bring harmony and balance in the world with my creative
              and critical design thinking.
            </p>
            <p>Explore. Build. Contribute.</p>
          </div>
          <div>
            <ButtonLink href="/Resume.pdf" title="See my resume" />
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <h1 className={styles.work}>Work</h1>
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
      </div>
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
    <a className={styles.project}>
      <Image src={props.image} alt="Profile photo" />
      <h2 className="center">{props.title}</h2>
      <p className="center">{props.desc}</p>
    </a>
  </Link>
);

export default Home;
