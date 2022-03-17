import type { NextPage } from "next";
import Head from "next/head";
import cx from "classnames";
import styles from "./Work.module.scss";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "../../components/Image";

import HeroImage from "../../public/home/Google keep.jpg";
import AboutImage from "../../public/google-keep/What is Google Keep.jpg";
import OpportunityImage from "../../public/google-keep/Opportunity.jpg";
import FeatureComparisonImage from "../../public/google-keep/Feature Comparison.jpg";
import UserInterviewsImage from "../../public/google-keep/Interviews quotes.jpg";
import TravelTylerImage from "../../public/google-keep/User persona.jpg";
import PlanningTripImage from "../../public/google-keep/New feature.jpg";
import HappyPathImage from "../../public/google-keep/Happy path.jpg";
import LoFiImage from "../../public/google-keep/Lo-fi sketches.jpg";
import DesignSystemImage from "../../public/google-keep/Design guidelines.jpg";
import AtomicStructureImage from "../../public/google-keep/Atomic structure.jpg";
import ComponentsImage from "../../public/google-keep/Components & Variants.jpg";
import EvolutionImage from "../../public/google-keep/Evolution of a screen.jpg";

const GoogleKeep: NextPage = () => {
  return (
    <>
      <Head>
        <title>Case study: Google Keep – Shaily Gandhi</title>
      </Head>

      <Header />
      <main>
        <article>
          <div className="container">
            <h1 className={styles.title}>Google Keep</h1>
            <h2 className={styles.subtitle}>
              Adding a new feature for travel enthusiastics to plan better
            </h2>
          </div>
          <div className={cx(styles.hero, styles.googleKeep)}>
            <div className={styles.image}>
              <Image
                src={HeroImage}
                alt="Google Keep: Travel Template"
                showAlt={false}
              />
            </div>
          </div>
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
            <section className={styles.overview}>
              <h3 className="center">Project Overview</h3>
              <div className={styles.overviewGrid}>
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
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default GoogleKeep;
