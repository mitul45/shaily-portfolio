import type { NextPage } from "next";
import Head from "next/head";
import cx from "classnames";
import styles from "./Work.module.scss";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "../../components/Image";

import HeroImage from "../../public/home/Marmitas.jpg";

const Marmitas: NextPage = () => {
  return (
    <>
      <Head>
        <title>Case study: Marmitas Da Horta – Shaily Gandhi</title>
      </Head>

      <Header />
      <main>
        <article>
          <section className="container">
            <h1 className={styles.title}>Marmitas Da Horta</h1>
            <h2 className={styles.subtitle}>
              Designing an e-commerce website for a vegan meal service
            </h2>
          </section>
          <section className={cx(styles.hero, styles.marmitas)}>
            <div className={styles.image}>
              <Image src={HeroImage} alt="Marmitas Da Horta" showAlt={false} />
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
            <section className={styles.overview}>
              <h3 className="center">Project Overview</h3>
              <div className={styles.overviewGrid}>
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
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default Marmitas;
