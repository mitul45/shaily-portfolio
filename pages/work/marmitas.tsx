import type { NextPage } from "next";
import Head from "next/head";
import cx from "classnames";
import styles from "./Work.module.scss";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "../../components/Image";
import YT from "../../components/YT";

import HeroImage from "../../public/home/Marmitas.jpg";
import ClientImage from "../../public/marmitas/1-client.jpg";
import PersonaImage from "../../public/marmitas/2-user-persona.jpg";
import UserFlowImage from "../../public/marmitas/3-user-flow.jpg";
import SitemapImage from "../../public/marmitas/4-sitemap.jpg";
import LofiImage from "../../public/marmitas/5-Lo-fi-sketches.jpg";
import MidFiImage from "../../public/marmitas/6-mid-fi-screens.jpg";

const Marmitas: NextPage = () => {
  return (
    <>
      <Head>
        <title>Case study: Marmitas Da Horta – Shaily Gandhi</title>
      </Head>

      <Header />
      <main>
        <article>
          <section className={cx(styles.hero, styles.container)}>
            <h1 className={styles["hero__title"]}>Marmitas Da Horta</h1>
            <h2 className={styles["hero__subtitle"]}>
              Designing an e-commerce website for a vegan meal service
            </h2>
          </section>
          <section className={styles["hero--marmitas"]}>
            <div className={styles["hero__image"]}>
              <Image src={HeroImage} alt="Marmitas Da Horta" showAlt={false} />
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
                <p>Miro, Figma, Useberry, Maze, Pencil and paper</p>
              </div>
              <div>
                <h3>Deliverables:</h3>
                <p>
                  UX research, User stories, User flow, Sitemap, Wireframes,
                  Usability testing, results,
                </p>
                <p>Mid-fi interactive prototype</p>
              </div>
              <div>
                <h3>Project time:</h3>4 part-time weeks
              </div>
              <div>
                <h3>Team:</h3>
                <p>with Tineke Baan, Sara Peroz, Vanda Aragao</p>
              </div>
              <div>
                <h3>My role:</h3>
                <p>UX researcher, Interactions Designer</p>
              </div>
            </section>
            <section className={styles.section}>
              <h3 className={styles["section__title"]}>Project Overview</h3>
              <div className={styles["section--overview-grid"]}>
                <h4>Context:</h4>
                <div>
                  <p>
                    Local shops and practitioners are suffering a decrease in
                    the demand for their services and products due to the
                    extreme situation COVID-19 pushed worldwide. More and more
                    professionals are on the verge of their digital transition.
                  </p>
                  <p>
                    Marmitas da Horta is one such local business located in the
                    Island of Faial in Azores. Diana, the sole stakeholder of
                    the business, is a girl from the Azores who wants to
                    contribute towards a healthy lifestyle & sustainable
                    environment.
                  </p>
                </div>
                <h4>Challenge:</h4>
                <div>
                  <p>
                    How might we help busy professionals to find healthy ready
                    made meals with local ingredients and keep a healthy and
                    eco-conscious life style?
                  </p>
                </div>
                <h4>Solution:</h4>
                <div>
                  <p>
                    Develop a website for Marmitas Da Horta where the customers
                    can find information about the weekly menu, the ingredients,
                    the health benefits and how they can easily order them
                  </p>
                </div>
              </div>
            </section>
            <section className={styles.section}>
              <h3 className={styles["section__title"]}>Process</h3>
              <div className={styles["section__item"]}>
                <Image src={ClientImage} alt="Client details" />
              </div>
              <div className={styles["section__item"]}>
                <Image src={PersonaImage} alt="User Persona" />
              </div>
              <div className={styles["section__item"]}>
                <Image src={UserFlowImage} alt="User flow" />
              </div>
              <div className={styles["section__item"]}>
                <Image src={SitemapImage} alt="Sitemap" />
              </div>
              <div className={styles["section__item"]}>
                <Image src={LofiImage} alt="Lo-fi sketches" />
              </div>
              <div className={styles["section__item"]}>
                <Image src={MidFiImage} alt="Mid-fi screens" />
              </div>
            </section>
            <section className={styles.section}>
              <h3 className={styles["section__title"]}>Hi Fi Prototype</h3>
              <div className={styles["section__item"]}>
                <YT videoId="fFhTGo23rCw" alt="Hi-fi prototype" />
              </div>
            </section>
            <section
              className={cx(styles.section, styles["section--read-more"])}
            >
              <a
                href="https://bootcamp.uxdesign.cc/designing-an-e-commerce-website-for-a-vegan-meal-service-2d3a1c378376"
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

export default Marmitas;
