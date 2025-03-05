import type { AppProps } from 'next/app';
import ThreeDScene from "../../components/ThreeDScene";
import NameCard from './nameCard';
import ReloadButton from './ReloadButton';
import ProjectButton from './ProjectButton';
import AboutButton from './AboutButton';
import BlogButton from './BlogButton';
import GamesButton from './GamesButton';
import Head from 'next/head';
import { useAnimation, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div id="threeDContainer" className="absolute top-0 left-0 w-full h-full">
        <ThreeDScene />
      </div>
      <div className="absolute top-0 left-0 w-full h-full z-10">
        <div className="p-[3vh] grid grid-cols-[1fr_minmax(200px,_2fr)_1fr] content-normal gap-[0vh] h-[99vh] ...">
          <div className="big-style h-[var(--custom-top-height)]"><ReloadButton /></div>
          <div className="big-style h-[var(--custom-top-height)] text-white lexend text-[100px]"><NameCard /></div>
          <div className="big-style h-[var(--custom-top-height)]"><AboutButton /></div>
          <div className="big-style h-[var(--custom-middle-height)]"><GamesButton /></div>
          {/* <div id="threeDContainer" className="relative big-style h-[var(--custom-middle-height)]"> */}
          <div className="big-style h-[var(--custom-middle-height)]">
            {/* <ThreeDScene /> */}
            <ProjectButton />

            {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-4xl font-bold font-lexend">
              Projects
            </div> */}
          </div>
          <div className="big-style h-[var(--custom-middle-height)]"><BlogButton /></div>
          {/* <div className="big-style h-[var(--custom-bottom-height)]">07</div>
          <div className="big-style h-[var(--custom-bottom-height)]">08</div>
          <div className="big-style h-[var(--custom-bottom-height)]">09</div> */}
        </div>
      </div>
    </>
  );
}