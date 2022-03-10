import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import ProfileImage from "../public/profile.jpg";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About – Shaily Gandhi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="container mx-auto my-32 max-w-container flex">
          <div className="w-3/4">
            <h1 className="text-2xl my-4">Hi, I&apos;m Shaily!</h1>
          </div>
          <div>
            <Image
              className="rounded-md mx-auto"
              src={ProfileImage}
              alt="Profile photo"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
