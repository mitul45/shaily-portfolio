import type { NextPage } from "next";
import Head from "next/head";
import NextImage from "next/image";
import NextLink from "next/link";
import cx from "classnames";
import styles from "./Work.module.scss";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "../../components/Image";
import YT from "../../components/YT";
import Link from "../../components/Link";

import HeroImage from "../../public/home/NutriScan.jpg";
import MidFiImage from "../../public/nutriscan/1-mid-fi.jpg";
import MoodboardImage from "../../public/nutriscan/2-moodboard.jpg";
import StyleGuideImage from "../../public/nutriscan/3-style-guide.jpg";
import ProductScreenImage from "../../public/nutriscan/4-product-screen.jpg";
import CommunityPageImage from "../../public/nutriscan/5-community-page.jpg";

const NutriScan: NextPage = () => {
  return (
    <>
      <Head>
        <title>Case study: NutriScan – Shaily Gandhi</title>
      </Head>

      <Header />
      <main>
        <article>
          <section className={styles["hero--nutriscan"]}>
            <div className={styles["hero__image"]}>
              <Image
                src={HeroImage}
                alt="NutriScan"
                showAlt={false}
                allowZoom={false}
              />
            </div>
          </section>
          <section className={cx(styles.hero, styles.container)}>
            <h1 className={styles["hero__title"]}>NutriScan</h1>
            <h2 className={styles["hero__subtitle"]}>
              Helping users choose healthier food products
            </h2>
          </section>
          <div className={styles.container}>
            <section className={styles["section--meta"]}>
              <div>
                <h3>Client:</h3>
                <p>Academic project</p>
              </div>
              <div>
                <h3>Tools:</h3>
                <p>Figma, Useberry, Pencil and paper</p>
              </div>
              <div>
                <h3>Deliverables:</h3>
                <p>
                  UX research: Survey, User interviews, Affinity diagram, User
                  persona, Jobs to be done, User journey, Concept sketches &
                  testing
                </p>
                <p>Information Architecture: User flow</p>
                <p>
                  Interaction Design: Wireframes, Usability testing, results
                </p>
                <p>
                  Visual Design: Brand attributes, Moodboard, Style tiles, Hi-fi
                  mockups
                </p>
                <p>Hi-fi interactive prototype</p>
              </div>
              <div>
                <h3>Project time:</h3>
                <p>4 part-time weeks</p>
              </div>
              <div>
                <h3>Team:</h3>
                <p>with Rosa Chiacchio</p>
              </div>
              <div>
                <h3>My role:</h3>
                <p>UX researcher, Interactions Designer & UI Designer</p>
              </div>
            </section>
            <section className={styles.section}>
              <h3 className={styles["section__title"]}>Project Overview</h3>
              <div className={styles["section--overview-grid"]}>
                <h4>Context:</h4>
                <div>
                  <p>
                    Despite the vast availability of personal metrics and health
                    apps, people continue to struggle to maintain a healthy
                    lifestyle.
                  </p>
                  <p>
                    We will be required to conduct user research to understand
                    people’s relationship with mental, physical, and emotional
                    well-being in order to develop a tool that will drive them
                    to action.
                  </p>
                  <p>
                    Our client, the National Wellness Institute wants designers
                    to reimagine how people can adopt and maintain a routine
                    that enhances their well-being.
                  </p>
                </div>
                <h4>Challenge:</h4>
                <div>
                  <p>
                    How might we help users to choose healthier products in the
                    market, to maintain a health-conscious lifestyle?
                  </p>
                </div>
                <h4>Solution:</h4>
                <div>
                  <p>
                    A native mobile app oriented towards wellness and health of
                    users
                  </p>
                </div>
              </div>
            </section>
            <section className={styles.section}>
              <h3 className={styles["section__title"]}>Process</h3>
              <div className={styles["section__item"]}>
                <Image src={MidFiImage} alt="Mi fi Screens" />
              </div>
              <div className={styles["section__item"]}>
                <Image src={MoodboardImage} alt="Moodboard" />
              </div>
              <div className={styles["section__item"]}>
                <Image src={StyleGuideImage} alt="Style tile" />
              </div>
              <div className={styles["section__item"]}>
                <Image
                  src={ProductScreenImage}
                  alt="Product screen evolution"
                />
              </div>
              <div className={styles["section__item"]}>
                <Image
                  src={CommunityPageImage}
                  alt="Community screen evolution"
                />
              </div>
            </section>
            <section className={styles.section}>
              <h3 className={styles["section__title"]}>Hi Fi Prototype</h3>
              <div className={styles["section__item"]}>
                <YT videoId="U6FjW3n4bDY" alt="Hi-fi prototype" />
              </div>
            </section>
            <section
              className={cx(styles.section, styles["section--read-more"])}
            >
              <Link
                href="https://bootcamp.uxdesign.cc/changing-the-way-you-buy-your-food-products-1d655811d2ed"
                title="Read full case study"
              />
            </section>
          </div>
          <section
            className={cx(styles.section, styles["section--other-articles"])}
          >
            <div></div>
            <NextLink href="/work/peeled-orange">
              <a className={styles["section--other-articles__next"]}>
                <div className={styles["section--other-articles__next__text"]}>
                  <span
                    className={
                      styles["section--other-articles__next__text__title"]
                    }
                  >
                    Peeled Orange
                  </span>
                  <span
                    className={
                      styles["section--other-articles__next__text__subtitle"]
                    }
                  >
                    Next
                  </span>
                </div>
                <div className={styles["section--other-articles__next__arrow"]}>
                  <NextImage
                    src="/right-arrow.svg"
                    alt="Right arrow"
                    width={48}
                    height={48}
                  />
                </div>
              </a>
            </NextLink>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default NutriScan;
