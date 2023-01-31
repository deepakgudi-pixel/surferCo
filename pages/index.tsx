import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { staggerdChildren, textFadeInOut, videoPopOut, wordsAnimation } from "../utils/animations";
import { useEffect } from "react";

const Home: NextPage = () => {
  const control = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      control.start("animate");
    } else {
      control.start("initial");
    }
  }, [control, inView]);

  return (
    <motion.div className="min-h-screen px-12 bg-cream selection:bg-red-400" initial="initial" animate="animate">
      <Head>
        <title>Home | Surfer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="grid grid-cols-[3fr_1fr] py-12">
        <h1 className="text-8xl font-bold w-[32rem] leading-[90%] tracking-[-2px]">
         <AnimateWords title="Unleash inner surfer with us"/>
        </h1>
        <motion.div
          variants={textFadeInOut}
          className="text-base leadimg-[150%] self-end"
          initial="initial"
          animate="animate"
        >
          Surf in style with our exclusive collection of apparel designed for
          ocean adventures. High-performance materials, innovative designs, and
          a passion for the surf lifestyle. Join the wave and elevate your
          surfing experience with us.
        </motion.div>
      </main>
      <motion.video
        autoPlay
        loop
        playsInline
        muted
        variants={videoPopOut}
        initial="initial"
        animate={control}
        ref={ref}
      >
        <source src="/assets/surf-video.mp4" type="video/mp4" />
      </motion.video>
      <footer className="flex justify-center text-sm text-black py-12">
        <p>&copy; 2023 Surfer Co. All rights reserved.</p>
      </footer>
    </motion.div>
  );
};

type AnimateWordsProps = {
  title: string;
};

const AnimateWords: React.FC<AnimateWordsProps> = ({ title }) => {
  return (
    <motion.span variants={staggerdChildren}>
      {title.split(" ").map((word, idx) => (
        <div key={idx} className="inline-block overflow-hidden">
          <motion.span variants={wordsAnimation}
            className="inline-block overflow-hidden"
          >
            {word + "\u00A0"}
          </motion.span>
        </div>
      ))}
    </motion.span>
  );
};

export default Home;
