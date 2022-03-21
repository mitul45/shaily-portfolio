import type { NextPage } from "next";
import Head from "next/head";
import cx from "classnames";
import styles from "./Work.module.scss";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "../../components/Image";
import YT from "../../components/YT";

import HeroImage from "../../public/home/Peeled orange.jpg";
import MidFiImage from "../../public/peeled-orange/2-mid-fi-wireframes.jpg";
import SiteMapImage from "../../public/peeled-orange/3-sitemap.jpg";
import MoodboardImage from "../../public/peeled-orange/4-moodboard.jpg";
import StyleGuideImage from "../../public/peeled-orange/5-style-guide.jpg";
import Mockup1Image from "../../public/peeled-orange/6-mockup-1.jpg";
import Mockup2Image from "../../public/peeled-orange/7-mockup-2.jpg";

const GoogleKeep: NextPage = () => {
  return (
    <>
      <Head>
        <title>Case study: Peeled Orange – Shaily Gandhi</title>
      </Head>

      <Header />
      <main>
        <article>
          <section className={cx(styles.hero, styles.container)}>
            <h1 className={styles["hero__title"]}>Peeled Orange</h1>
            <h2 className={styles["hero__subtitle"]}>
              An online magazine for busy intellactuals
            </h2>
          </section>
          <section className={styles["hero--peeled-orange"]}>
            <div className={styles["hero__image"]}>
              <Image src={HeroImage} alt="Peeled Orange" showAlt={false} />
            </div>
          </section>
          <div className={styles.container}>
            <section className={styles["section--meta"]}>
              <div>
                <h3>Client:</h3>
                <p>Academic project</p>
              </div>
              <div>
                <h3>Tools:</h3>
                <p>Miro, Figma, Useberry, Pencil and paper</p>
              </div>
              <div>
                <h3>Deliverables:</h3>
                <p>
                  UX research, User flow, Sitemap, Wireframes, Usability
                  testing, results, Brand attributes, Moodboard, Style tiles,
                  Responsive designs, Hi-fi mockups
                </p>
                <p>Hi-fi interactive prototype</p>
              </div>
              <div>
                <h3>Project time:</h3>4 part-time weeks
              </div>
              <div>
                <h3>Team:</h3>
                <p>with Sara Peroz, Maritina Tsouvala</p>
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
                    The rise of the digital press has seen a tremendous peak
                    over the last few years. The audience is increasing as
                    Millennials grow older, demanding all sorts of content.
                  </p>
                  <p>
                    With numbers increasing, publishers are prompted to deliver
                    quality content along with a great digital product for
                    readers to experience a different but still unique act of
                    opening up a magazine and diving into it.
                  </p>
                </div>
                <h4>Challenge:</h4>
                <div>
                  <p>
                    How might we help users to indulge more in self-care and
                    explore new passion despite having a busy life?
                  </p>
                </div>
                <h4>Solution:</h4>
                <div>
                  <p>
                    Develop an online web-based magazine that is directed to
                    meet the needs and goals of one of the presented User
                    Persona
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
                <Image src={SiteMapImage} alt="Site map" />
              </div>
              <div className={styles["section__item"]}>
                <Image src={MoodboardImage} alt="Moodboard" />
              </div>
              <div className={styles["section__item"]}>
                <Image src={StyleGuideImage} alt="Style tile" />
              </div>
              <div className={styles["section__item"]}>
                <Image src={Mockup1Image} alt="Mockup – Laptop" />
              </div>
              <div className={styles["section__item"]}>
                <Image src={Mockup2Image} alt="Mockup – Tablet + Phone" />
              </div>
            </section>
            <section className={styles.section}>
              <h3 className={styles["section__title"]}>Hi Fi Prototype</h3>
              <div className={styles["section__item"]}>
                <YT
                  videoId="z7GsFbZs5qk"
                  alt="Hi-fi prototype: Peeled orange magazine"
                />
              </div>
              <div className={styles["section__item"]}>
                <YT videoId="aieJuY8Hr6Q" alt="Tablet version in action" />
              </div>
              <div className={styles["section__item"]}>
                <YT videoId="PTjQNpcNO4M" alt="Mobile version in action" />
              </div>
            </section>
            <section
              className={cx(styles.section, styles["section--read-more"])}
            >
              <a
                href="https://bootcamp.uxdesign.cc/helping-busy-intellectuals-indulge-more-in-self-care-and-explore-new-passions-2abee2419d7"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read full case study
              </a>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default GoogleKeep;
