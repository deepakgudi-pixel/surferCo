import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen px-12 bg-cream selection:bg-red-400">
      <Head>
        <title>Home | Surfer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <main className="grid grid-cols-[3fr_1fr] py-12">
        <h1 className="text-8xl font-bold w-[32rem] leading-[90%] tracking-[-2px]">Unleash inner surfer with us</h1>
        <div className="text-base leadimg-[150%] self-end">
          Surf in style with our exclusive collection of apparel designed for
          ocean adventures. High-performance materials, innovative designs, and
          a passion for the surf lifestyle. Join the wave and elevate your
          surfing experience with us.
        </div>
      </main>
      <video autoPlay loop playsInline muted>
        <source src="/assets/surf-video.mp4" type="video/mp4"/>
      </video>
    </div>
  );
};

export default Home;
