import type { NextPage } from "next";
import Head from "next/head";
import cx from "classnames";
import styles from "./Work.module.scss";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "../../components/Image";
import YT from "../../components/YT";

import HeroImage from "../../public/home/Google keep.jpg";
import PersonaImage from "../../public/google-keep/1-user-persona.jpg";
import NewFeatureImage from "../../public/google-keep/2-new-feature.jpg";
import HappyPathImage from "../../public/google-keep/3-happy-path.jpg";
import LofiImage from "../../public/google-keep/4-lo-fi-sketches.jpg";
import EvoluationImage from "../../public/google-keep/5-evolution-of-a-screen.jpg";
import DesignGuidelinesImage from "../../public/google-keep/6-design-guidelines.jpg";
import AtomicStructureImage from "../../public/google-keep/7-atomic-structure.jpg";
import ComponentsImage from "../../public/google-keep/8-components-and-variants.jpg";

const GoogleKeep: NextPage = () => {
  return (
    <>
      <Head>
        <title>Case study: Google Keep – Shaily Gandhi</title>
      </Head>

      <Header />
      <main>
        <article>
          <section className={cx(styles.hero, "container")}>
            <h1 className={styles["hero__title"]}>Google Keep</h1>
            <h2 className={styles["hero__subtitle"]}>
              Adding a new feature for travel enthusiastics to plan better
            </h2>
          </section>
          <section className={styles["hero--google-keep"]}>
            <div className={styles["hero__image"]}>
              <Image
                src={HeroImage}
                alt="Google Keep: Travel Template"
                showAlt={false}
              />
            </div>
          </section>
          <div className="container">
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
                  Business analysis, UX research, User flow, Sitemap,
                  Wireframes, Usability testing, results, Style tiles, Hi-fi
                  mockups
                </p>
                <p>Hi-fi interactive prototype</p>
              </div>
              <div>
                <h3>Project time:</h3>4 part-time weeks
              </div>
              <div>
                <h3>Team:</h3>
                <p>Shaily Gandhi</p>
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
                    For this individual project, I was needed to study & analyze
                    an already existing app and incorporate a new feature into
                    the existing product.
                  </p>
                  <p>
                    I chose Google Keep app as I use it in my everyday life. The
                    main focus of this project is on UI design.
                  </p>
                </div>
                <h4>Challenge:</h4>
                <div>
                  <p>
                    How might we help Google Keep users make notes in a more
                    structured way to better organize their travel information?
                  </p>
                </div>
                <h4>Solution:</h4>
                <div>
                  <p>
                    Develop an app that enables the users to add the travel
                    informations in different formats and keep them orgaised for
                    the future
                  </p>
                </div>
              </div>
            </section>
            <section className={styles.section}>
              <h3 className={styles["section__title"]}>Process</h3>
              <div className={styles["section__item"]}>
                <Image src={PersonaImage} alt="User Persona" />
              </div>
              <div className={styles["section__item"]}>
                <Image src={NewFeatureImage} alt="Proposed new feature" />
              </div>
              <div className={styles["section__item"]}>
                <Image src={HappyPathImage} alt="Happy path" />
              </div>
              <div className={styles["section__item"]}>
                <Image src={LofiImage} alt="Lo-fi sketches" />
              </div>
              <div className={styles["section__item"]}>
                <Image src={EvoluationImage} alt="Evoluation of a screen" />
              </div>
              <div className={styles["section__item"]}>
                <Image src={DesignGuidelinesImage} alt="Design guidelines" />
              </div>
              <div className={styles["section__item"]}>
                <Image src={AtomicStructureImage} alt="Atomic structure" />
              </div>
              <div className={styles["section__item"]}>
                <Image src={ComponentsImage} alt="Components and variants" />
              </div>
            </section>
            <section className={styles.section}>
              <h3 className={styles["section__title"]}>Hi Fi Prototype</h3>
              <div className={styles["section__item"]}>
                <YT videoId="Mqk-eDK0mK4" alt="Hi-fi prototype" />
              </div>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default GoogleKeep;
