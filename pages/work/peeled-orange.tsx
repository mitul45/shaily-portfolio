import type { NextPage } from "next";
import Head from "next/head";
import styles from "./Work.module.scss";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "../../components/Image";

import HeroImage from "../../public/home/Peeled orange.jpg";
import UserPersonaImage from "../../public/peeled-orange/User Persona.jpg";
import HowMightWeImage from "../../public/peeled-orange/HMW.jpg";
import ContentImage from "../../public/peeled-orange/Content.jpg";
import StructureImage from "../../public/peeled-orange/Structure.jpg";
import SiteMapImage from "../../public/peeled-orange/Sitemap.jpg";
import UserFlowImage from "../../public/peeled-orange/User-flow.jpg";
import LoFiImage from "../../public/peeled-orange/Lo-fi sketches.jpg";
import MidFiImage from "../../public/peeled-orange/Mid-fi wireframes.jpg";
import BrandAttributesImage from "../../public/peeled-orange/Final Brand Attributes.jpg";

const GoogleKeep: NextPage = () => {
  return (
    <>
      <Head>
        <title>Case study: Peeled Orange – Shaily Gandhi</title>
      </Head>

      <Header />
      <main>
        <article className="container">
          <h1 className={styles.title}>
            Helping busy intellectuals indulge more in self-care and explore new
            passions
          </h1>
          <h2 className={styles.subtitle}>
            Ironhack project-4: Designing a digital editorial experience
          </h2>
          <Image src={HeroImage} alt="Editorial design: peeled orange" />
          <p>
            <h3 className={styles.sectionTitle}>The briefing</h3>
            The rise of the digital press has seen a tremendous peak over the
            last few years. The audience is increasing as Millennials grow
            older, demanding all sorts of content.
          </p>
          <p>
            With numbers increasing, publishers are prompted to deliver quality
            content along with a great digital product for readers to experience
            a different but still unique act of opening up a magazine and diving
            into it.
          </p>
          <p>
            <h3 className={styles.sectionTitle}>The challenge</h3>
            Design{" "}
            <b>
              a responsive online platform for a magazine, newspaper, or blog
            </b>{" "}
            directed to meet the needs and goals of one of the presented User
            Personas.
          </p>
          <p>
            <h3 className={styles.sectionTitle}>Deliverables</h3>
            We were supposed to deliver a consistent, branded, and engaging
            experience which consisted of:
            <ul>
              <li>
                <i>UX research</i>
              </li>
              <li>
                <i>Visual competitive analysis</i>
              </li>
              <li>
                <i>Brand attributes</i>
              </li>
              <li>
                <i>Mood board</i>
              </li>
              <li>
                <i>Desirability test</i>
              </li>
              <li>
                <i>Style tile</i>
              </li>
              <li>
                <i>Responsive designs</i>
              </li>
              <li>
                <i>Hi-fi interactive prototype</i>
              </li>
            </ul>
          </p>
          <p>
            <h3 className={styles.sectionTitle}>User persona</h3>
          </p>
          <Image
            src={UserPersonaImage}
            alt="User persona: Elaine, an eco-friendly researcher"
          />
          <p>
            <h3 className={styles.sectionTitle}>Market research</h3>
            We started researching the market by getting to know about the
            magazines, their story, gathering reviews, and building up the scene
            for our project. As part of the research, we broke down the website
            of all these 3 magazines into atoms & molecules. We could understand
            how they have divided the sections, headlines, how they have worked
            out graphically.
          </p>
          <p>
            <h3 className={styles.sectionTitle}>Competitive analysis</h3>
            Once we understood the market deeper, we conducted a competitive
            analysis where we could find opportunities our competitors weren’t
            focusing on.
          </p>
          <p>
            <h3 className={styles.sectionTitle}>Define</h3>
            With our user research and market research complete, we started
            defining all the insights and data we had gathered.
          </p>
          <p>
            <h3 className={styles.sectionTitle}>How might we</h3>
            For us, it was important that we address our user persona’s habits
            and needs in order to get in her shoes. Based on those requirements,
            we created 3 How might we statements in order to start ideating and
            reaching our final goal.
          </p>
          <Image src={HowMightWeImage} alt="How might we questions" />
          <p>
            <h3 className={styles.sectionTitle}>Problem statement</h3>
          </p>
          <blockquote>
            <p>
              Eco-friendly researchers need to find a way to achieve & maintain
              a good work-life balance and fulfill their lives by discovering
              new passions and contributing to the society through an online
              magazine because they don’t have time to gather information from
              different online media.
            </p>
          </blockquote>
          <p>
            After we defined our HMW questions and problem statement, it was
            time for us to start the ideation process.
          </p>
          <p>
            <h3 className={styles.sectionTitle}>MoSCow map</h3>
            As we started brainstorming ideas about possible features & content,
            it was interesting to see how each of us visualized the project.
            Some things we were on the same lines, while few things we listened
            to each other’s ideas and worked jointly to come to a conclusion. We
            made 2 MoSCoW maps to categorize our ideas: One being the content
            and the other being the structure.
          </p>
          <Image src={ContentImage} alt="Content prioritization: MoSCoW map" />
          <Image
            src={StructureImage}
            alt="Structure prioritization: MoSCoW map"
          />
          <p>We could craft our MVP based on this as:</p>
          <p className={styles.greyText}>
            The goal of the Peeled Orange website, at the bare minimum, is to
            help readers grow and achieve a good work-life balance. By grouping
            topics and suggesting related content , the website further aims to
            help the user to discover new passions. Therefore, we must do the
            following:
          </p>
          <p className={styles.greyText}>
            Create a home page that highlights some topics that interest the
            readers, create a mood section and a menu that includes all
            published articles. This includes culture, self-care, environment,
            society, & volunteering opportunities.
          </p>
          <p className={styles.greyText}>
            By ensuring that the user can easily find the reading time of the
            articles and saving them in the library, they can utilize their time
            better. By mentioning the reading time and having the library to
            save the favourite articles, we are enabling the user to utilize her
            time better.
          </p>
          <p>
            <h3 className={styles.sectionTitle}>Site Map</h3>
            Working on the sitemap gave us the opportunity to visualize our
            design in a website format, which was the foundation for the final
            design of our magazine.
          </p>
          <Image src={SiteMapImage} alt="peeled orange: sitemap" />
          <p>
            <h3 className={styles.sectionTitle}>User flow</h3>
            we constructed the happy path for Elaine, where she reads the
            article ‘ Trying to be kinder to ourselves ’ and saves the article
            in the library for future reference.
          </p>
          <Image
            src={UserFlowImage}
            alt="Eco-friendly researcher Elaine reading the online magazine ‘Peeled Orange’"
          />
          <p>
            <h3 className={styles.sectionTitle}>Lo-fi sketches</h3>
          </p>
          <Image src={LoFiImage} alt="Teamwork: Lo-fi sketches" />
          <p>
            Each of us did the concept sketches for the happy path we had
            defined for Elaine. We discussed our ideas & sketches and finalized
            the Lo-fi wireframes based on that. We did the Lo-fi test with 3
            users and got really interesting insights. Few key insights:
          </p>
          <blockquote>
            <p>
              I don’t understand the intention behind the ‘How are you feeling
              today?’ that’s something personal for me.
            </p>
          </blockquote>
          <blockquote>
            <p>
              Why do I have this picture on my profile page? I prefer just to
              see the articles here.
            </p>
          </blockquote>
          <blockquote>
            <p>
              I don’t like the “Based on your reading” suggestions, it makes me
              think that I would be stuck in a narrow area of info, without
              knowing all the views. I usually search for the opposite opinions
              to be sure I am well informed.
            </p>
          </blockquote>
          <p>
            <h3 className={styles.sectionTitle}>Preserve or Pivot?</h3>
            based on the feedback on the lo-fi, we discussed the possibility of
            modifying the ‘Mood-based section’, improving the current design,
            and not totally pivoting with the idea.
          </p>
          <p>
            <h3 className={styles.sectionTitle}>Mid-fi wireframes</h3>
          </p>
          <Image src={MidFiImage} alt="Mid-fi wireframes" />
          <p>
            <h3 className={styles.sectionTitle}>Mid-fi usability test</h3>
            We Conducted the usability test with 3 users. While we had some
            positive feedback for the personal homepage, the possibility of
            saving articles to the library and overall organization, there was
            still room to improve upon other things.
          </p>
          <p>
            Working on the mid-fi wireframes was helpful to refine the design
            and we gained a fair idea of how we’re going to produce the Hi-fi
            and are going ahead with our final goal. It took some time to
            achieve consistency and a good flow in the design which still needed
            a few iterations in the Hi-Fi.
          </p>
          <p>
            <h3 className={styles.sectionTitle}>Brand Identity</h3>
            Working on the Brand attributes helped us think about the visual identity we wanted our magazine to have and how it would make the reader feel. Based on Elaine’s needs and motivations, we brainstormed several values/adjectives that our brand would constitute. After discussing amongst ourselves, we defined 5 adjectives for our magazine brand to represent to the readers.
          </p>
          <Image src={BrandAttributesImage} alt="Brand attributes for the magazine" />
          <p>
            <h3 className={styles.sectionTitle}></h3>
          </p>
          <p>
            <h3 className={styles.sectionTitle}></h3>
          </p>
          <p>
            <h3 className={styles.sectionTitle}></h3>
          </p>
          <p>
            <h3 className={styles.sectionTitle}></h3>
          </p>
          <p>
            <h3 className={styles.sectionTitle}></h3>
          </p>
          <p>
            <h3 className={styles.sectionTitle}></h3>
          </p>
          <p>
            <h3 className={styles.sectionTitle}></h3>
          </p>
          <p>
            <h3 className={styles.sectionTitle}></h3>
          </p>
          <p>
            <h3 className={styles.sectionTitle}></h3>
          </p>
          <p>
            <h3 className={styles.sectionTitle}></h3>
          </p>
          <p>
            <h3 className={styles.sectionTitle}></h3>
          </p>
          <p>
            <h3 className={styles.sectionTitle}></h3>
          </p>
          <p>
            <h3 className={styles.sectionTitle}></h3>
          </p>
          <p>
            <h3 className={styles.sectionTitle}></h3>
          </p>
          <p>
            <h3 className={styles.sectionTitle}></h3>
          </p>
          <p>
            <h3 className={styles.sectionTitle}></h3>
          </p>
          <p>
            <h3 className={styles.sectionTitle}></h3>
          </p>
          <p>
            <h3 className={styles.sectionTitle}></h3>
          </p>
          <p>
            <h3 className={styles.sectionTitle}></h3>
          </p>
          <p>
            <h3 className={styles.sectionTitle}></h3>
          </p>
          <p>
            <h3 className={styles.sectionTitle}></h3>
          </p>
          <p>
            <h3 className={styles.sectionTitle}></h3>
          </p>
          <p>
            <h3 className={styles.sectionTitle}></h3>
          </p>
          <p>
            <h3 className={styles.sectionTitle}></h3>
          </p>
          <p>
            <h3 className={styles.sectionTitle}></h3>
          </p>
          <p>
            <h3 className={styles.sectionTitle}></h3>
          </p>
          <p>
            <h3 className={styles.sectionTitle}></h3>
          </p>
          <p>
            <h3 className={styles.sectionTitle}></h3>
          </p>
          <p>
            <h3 className={styles.sectionTitle}></h3>
          </p>
          <p>
            <h3 className={styles.sectionTitle}></h3>
          </p>
          <p>
            <h3 className={styles.sectionTitle}></h3>
          </p>
          <p>
            <h3 className={styles.sectionTitle}></h3>
          </p>
          <p>
            <h3 className={styles.sectionTitle}></h3>
          </p>
          <p>
            <h3 className={styles.sectionTitle}></h3>
          </p>
          <p>
            <h3 className={styles.sectionTitle}></h3>
          </p>
          <p>
            <h3 className={styles.sectionTitle}></h3>
          </p>
          <p>
            <h3 className={styles.sectionTitle}></h3>
          </p>
          <p>
            <h3 className={styles.sectionTitle}></h3>
          </p>
          <p>
            <h3 className={styles.sectionTitle}></h3>
          </p>
          <p>
            <h3 className={styles.sectionTitle}></h3>
          </p>
          <p>
            <h3 className={styles.sectionTitle}></h3>
          </p>
          <p>
            <h3 className={styles.sectionTitle}></h3>
          </p>
          <p>
            <h3 className={styles.sectionTitle}></h3>
          </p>
          <h3 className={styles.sectionTitle}></h3>
          <p>
            <h3 className={styles.sectionTitle}></h3>
          </p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default GoogleKeep;
