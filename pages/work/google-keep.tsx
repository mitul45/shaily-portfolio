import type { NextPage } from "next";
import Head from "next/head";
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
        <article className="container">
          <h1 className={styles.title}>Google Keep: Travel Template</h1>
          <h2 className={styles.subtitle}>
            Ironhack project-3: propose a feature
          </h2>
          <p>
            For this individual project, I was needed to study & analyze an
            already existing app and incorporate a new feature into the existing
            product. I chose{" "}
            <a href="https://keep.google.com" target="_blank" rel="noreferrer">
              Google Keep
            </a>{" "}
            app as I use it in my everyday life. The main focus of this project
            is on UI design.
          </p>
          <Image src={HeroImage} alt="Google Keep: Travel Template" />
          <p>
            <h3 className={styles.sectionTitle}>Design Challenge</h3>
            <i>
              How might I help Google Keep users make notes in a more structured
              way to better organize their travel information?
            </i>
          </p>
          <p>
            <h3 className={styles.sectionTitle}>What is Google Keep?</h3>
            <b>Google Keep</b> is a note-taking service included as part of the
            free, web-based Google Docs Editors suite offered by Google. It is
            available as a web application as well as a mobile app for Android
            and iOS, with a total of +1B users across the world.
          </p>
          <Image src={AboutImage} alt="About Google Keep" />
          <p>
            The interface of the app is similar to a bulletin board with post-it
            notes. It is used for making different notes, lists such as grocery
            lists, books to read, movies to watch, things to pack for travel,
            etc.
          </p>
          <p>
            <h3 className={styles.sectionTitle}>The thought behind the Idea</h3>
            The idea behind the new feature came in the picture when I wanted to
            plan my next trip to Paris. As a regular user of Google Keep, I
            started making notes of the information/suggestions I got from
            friends & colleagues on it and struggled to make a cohesive one.
            Also, it was difficult to find & edit the required note every time
            there was any new edition/suggestion.
          </p>
          <Image src={OpportunityImage} alt="Opportunities and Goals" />
          <p>
            To check if my idea stands the ground, I did the feature comparison
            with 3 other such apps, to understand the functionality of
            note-taking apps, their features, and to locate the area of
            improvement for Google Keep.
          </p>
          <Image src={FeatureComparisonImage} alt="Feature comparison chart" />
          <p>
            I did 5 user interviews to understand the people who use Google
            Keep, for what purpose they use it, what features they miss in it,
            and if they would like to use the new feature I was proposing.
          </p>
          <p>Here’s the excerpts of the interviews:</p>
          <Image
            src={UserInterviewsImage}
            alt="Excerpts from user interviews"
          />
          <p>
            Based on the response I got from conducting the interviews, I could
            clearly see the need for Google Keep to be able to offer wider
            possibilities, where users can use its simple yet more diverse
            application for purposes such as planning a trip, planning an event,
            reading lists etc.
          </p>
          <p>
            For my proposed feature, I narrowed down the requirements & made my
            goal clear to draft my proto persona, <b>Travel enthusiast Tyler</b>
            .
          </p>
          <Image src={TravelTylerImage} alt="Travel enthusiast Tyler persona" />
          <p>
            <h3 className={styles.sectionTitle}>User Journey</h3>
            From the user journey of Tyler, we could see that he started getting
            information from all different sorts of sources regarding planning
            his next trip. As a routine user of Google Keep, he starts to jot
            down the information in Google Keep in a random manner. Someone who
            likes to have his things managed more systematically, struggles to
            find ways to manage his notes/information put with more structure in
            the current Google Keep app. Apart from structuring the information,
            he has to keep checking the weather separately on the weather app
            for his travel dates.
          </p>
          <p>
            This journey revealed the opportunities we have to design some
            solutions that would help Tyler make different notes/lists
            efficiently. Like most of the young people of his generation, he
            likes to plan travel, small events, meetings with friends and family
            in advance, and this can be a tool he could use to plan his travel
            better. Working through the user journey helped me understand the
            situation in-depth and derive the problem statement.
          </p>
          <p>
            <h3 className={styles.sectionTitle}>Problem Statement</h3>
            <blockquote>
              <p>
                <i>
                  Travel enthusiasts need to find an organized way to manage
                  their travel informations on finger tips because they want to
                  plan better & not waste their time.
                </i>
              </p>
            </blockquote>
          </p>
          <p>
            <h3 className={styles.sectionTitle}>Ideation</h3>
            Based on the information I gathered about the possible solutions,
            here’s the new feature for Google Keep I want to introduce to all of
            you. It’s called ‘Travel Template’.
          </p>
          <p>
            As an existing user of Google Keep, travel enthusiast Tyler makes
            notes/reminders about booking for the flight/ hotel booking/ things
            to pack etc. So, the new feature comes in as soon as Tyler uses any
            of the trigger words and prompts him to use the new Travel template
            for Google Keep.
          </p>
          <Image src={PlanningTripImage} alt="Planning a trip?" />
          <p>
            Before moving forward with the design, I made a user flow for Tyler
            to follow him from opening the app to adding the different
            notes/lists needed to plan his travel.
          </p>
          <Image
            src={HappyPathImage}
            alt="Happy Path: Tyler plans his Paris trip"
          />
          <p>
            <h3 className={styles.sectionTitle}>Lo-fi sketches</h3>
            <Image src={LoFiImage} alt="Lo-fi sketches" />
          </p>
          <p>
            <h3 className={styles.sectionTitle}>Usability testing</h3>
            Before I started creating my Hi-fi prototype, I conducted usability
            tests for Mid-fi prototype with 3 users to see if they see the new
            feature as part of the existing app & the flow and how they interact
            with the new feature to manage their travel information. I got
            useful feedback which I incorporated into the design and worked
            towards making Hi-fi screens.
          </p>
          <p>
            <blockquote>
              <p>
                <i>
                  The first look of the travel template is a bit new to me. It
                  doesn’t give me a clear flow.
                </i>
              </p>
              <p>
                <i>
                  The weather information is confusing. Is it the current
                  weather or for the travel dates?
                </i>
              </p>
              <p>Why there are ‘more buttons’ on every note?</p>
            </blockquote>
          </p>
          <p>
            <h3 className={styles.sectionTitle}>Design System</h3>
            <i>“Design always loves constraints”</i>
          </p>
          <p>
            For this project, thinking about the feature, how to implement it
            with an existing brand, its design guidelines are more important.
            Reading through the brand guidelines, values gave me a clear base to
            come up with the design that feels native to the existing app.
            Breaking down the app into smaller pieces helped me understand the
            rules behind it.
          </p>
          <Image
            src={DesignSystemImage}
            alt="Understanding the design system of Google Keep"
          />
          <p>
            Based on the theory coined by Brad frost, I could understand the
            importance of having an inventory to build a consistent design
            through the whole website/app.
          </p>
          <Image src={AtomicStructureImage} alt="Atomic structure of the app" />
          <p>
            Here are some of the components I made along the way I was creating
            the screens for the new feature.
          </p>
          <Image
            src={ComponentsImage}
            alt="Screenshots of Variants & Components"
          />
          <p>
            <h3 className={styles.sectionTitle}>Evolution of a screen</h3>
            This is an example of how I developed a screen from Lo-fi to Hi-fi,
            with many design iterations, based on intuitions & insights I got
            from the user tests I did. Designing the <b>Add button</b> for the
            proposed feature, to make it visible yet not on-your-face, readable,
            while following the brand guidelines gave me a real sneak peek into
            how a UI designer works and has an impact on the users & their
            behavior.
          </p>
          <Image src={EvolutionImage} alt="Evolution of a screen" />
          <p>
            <h3 className={styles.sectionTitle}>Hi-fi prototype</h3>
            Once I completed all the screens, I created the Hi-fi prototype in
            Figma. The tasks for the prototype are:
            <ul>
              <li>
                Add a reminder to Google Keep, about booking tickets for the
                Paris trip
              </li>
              <li>
                Once the new feature pops up, add destination & travel dates
              </li>
              <li>Add ‘Things to pack’ list to the travel template</li>
              <li>Add ‘travel articles’ note to the travel template</li>
            </ul>
          </p>
          <p>
            <iframe
              width="640"
              height="680"
              src="https://www.youtube.com/embed/Mqk-eDK0mK4"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </p>
          <p>
            So, this is how it works:
            <ul>
              <li>
                Once the user adds the reminder in the existing app with any of
                the trigger words, the new app asks if the user is planning for
                a trip and wants to use the new feature- Travel template?
              </li>
              <li>
                Upon clicking on the ‘ Try now’ button, the user gets the search
                field to enter the travel destination & gets the calendar to add
                the travel dates respectively.
              </li>
              <li>
                Once filling up this information, the user gets the Travel
                template- with the destination as a title of the template, along
                with the travel dates mentioned. The user can also find the
                updated Google weather as part of the template.
              </li>
              <li>
                The user can find the reminder which he/she made, through which
                the new feature appeared, as part of this template.
              </li>
              <li>
                The template allows the user to directly access Google Maps &
                add the favorite/ want to visit places to it & have them updated
                in the Google Keep app as well.
              </li>
              <li>
                The user can start adding lists/notes with the ‘+’ button, where
                there are new features to upload a photo, embed a video, add
                text & save a link. This allows the user to make a note where a
                text can be added along with the photo or a video.
              </li>
              <li>
                Likewise, the user can keep on adding information to plan for
                the upcoming/next travel & be assured of having all the
                recommendations/ suggestions gathered from friends to be found
                at one place in Google Keep.
              </li>
            </ul>
          </p>
          <p>
            Please feel free to try the Travel template{" "}
            <u>
              <a
                href="https://www.figma.com/proto/mDNxCxRJILbt1XinLNfvdG/P3%3A-Add-A-Feature---Shaily?page-id=2%3A4134&node-id=1395%3A3997&viewport=241%2C48%2C0.32&scaling=min-zoom&starting-point-node-id=1395%3A3997"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
            </u>
            ! :)
          </p>
          <p>
            <h3 className={styles.sectionTitle}>Next steps</h3>I feel that I was
            successful in adapting to the existing design system of Google Keep.
            What I would like to do is to test more users with the current Hi-fi
            prototype & gather more feedback regarding its functionality.
          </p>
          <p>
            Also, due to the limitation of time, I narrowed down the requirement
            to travel information, but it would be great to design all different
            kinds of templates to help users manage their notes more efficiently
            & easily.
          </p>
          <p>
            <h3 className={styles.sectionTitle}>Learnings</h3>
            This project being an individual project, it was challenging to
            manage the work & deliver the product on time. Sometimes, I was too
            much focused on the smaller aspect of the project, discussing with
            other designers & teachers helped me move forward and think for the
            larger picture. Along the way, I learned the best practices and how
            to work smartly with components & variants.
          </p>
          <p>
            I loved working on the UI design and especially working within the
            constraints always intrigue me to put my efforts more to reach for
            the better. Google is well-known for its design, I could learn a
            lot.
          </p>
          <p>
            <i>Thanks for reading :)</i>
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default GoogleKeep;
