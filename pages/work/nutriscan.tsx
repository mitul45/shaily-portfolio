import type { NextPage } from "next";
import Head from "next/head";
import cx from "classnames";
import styles from "./Work.module.scss";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "../../components/Image";

import HeroImage from "../../public/home/NutriScan.jpg";

const NutriScan: NextPage = () => {
  return (
    <>
      <Head>
        <title>Case study: NutriScan – Shaily Gandhi</title>
      </Head>

      <Header />
      <main>
        <article>
          <section className="container">
            <h1 className={styles.title}>NutriScan</h1>
            <h2 className={styles.subtitle}>
              Helping users choose healthier food products
            </h2>
          </section>
          <section className={cx(styles.hero, styles.nutriscan)}>
            <div className={styles.image}>
              <Image
                src={HeroImage}
                alt="NutriScan"
                showAlt={false}
              />
            </div>
          </section>
          <div className="container">
            <section className={styles.meta}>
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
                <h3>Project time:</h3>4 part-time weeks
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
            <section className={styles.overview}>
              <h3 className="center">Project Overview</h3>
              <div className={styles.overviewGrid}>
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
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default NutriScan;