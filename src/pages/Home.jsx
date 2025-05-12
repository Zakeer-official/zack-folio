import React from "react";
import LikeButton from "../components/LikeButton";
import Resume from "../components/homeComponents/Resume";
import Skills from "../components/homeComponents/Skills";
import Quotes from "../components/homeComponents/Quotes";
import Projects from "../components/homeComponents/Projects";
import Library from "../components/homeComponents/Library";
import Showcase from "../components/homeComponents/Showcase";

export default function Home() {
  return (
    <article className="active" id="homearticle">
      <div
        style={{ gridAutoFlow: "dense", position: "relative" }}
        className="homebox p-6 pb-0 relative overflow-hidden sm:p-8 lg:p-[30px]"
      >
        <header>
          <h2 className="text-white cristik quotefont font-bold text-lg sm:text-xl md:text-2xl lg:text-4xl">
            <p className="italic text-lg sm:text-xl md:text-2xl opacity-25">
              Hey there I am
            </p>
            <p className="cristik text-2xl sm:text-3xl md:text-4xl mt-2">
              Zakeer // :)
            </p>
          </h2>
        </header>

        <section className="about-text mb-0 pb-0">
          <p className="flex gap-1 sm:gap-2 text-xl sm:text-2xl md:text-3xl items-center">
            <span className="text-red-400 quotefont font-semibold">I Design ,</span>
            <span className="text-yellow-400 cristik">Code & </span>
            <span className="text-green-400 grotesk">Create</span>
          </p>
          <p className="mt-1 sm:mt-2 text-lg sm:text-xl md:text-2xl relative top-[-10px] md:top-[-20px] font-medium opacity-45">
            Robust , scalable & modern software solutions
          </p>
        </section>

        <img
          style={{
            mixBlendMode: "hard-light",
            maskImage: "linear-gradient(to right , transparent, black)",
          }}
          src="https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg?resize=1200,800"
          alt="Code"
          className="hidden lg:block absolute z-[30] right-0 top-0 h-[130%] grayscale opacity-60"
        />
      </div>

      <div className="bentogrid h-full w-full grid mt-6 gap-6">
        <div className="github homebox flex items-center cursor-pointer">
          <a
            href="https://github.com/Zakeer-official"
            className="flex w-full h-full justify-center items-center"
          >
            <img
              src="https://streak-stats.demolab.com?user=zakeer-official&theme=rising-sun&hide_border=true&background=00000000"
              alt="GitHub Streak Stats"
            />
          </a>
        </div>

        <div className="showcase homebox relative overflow-hidden">
          <p className="text-white cristik p-4 lg:text-2xl md:text-2xl text-xl">
            Liked the <br /> Portfolio ?
          </p>
          <div className="text-white cristik w-full mt-[30px] flex justify-center items-center gap-4">
            <LikeButton />
          </div>
        </div>

        <div className="home-social-media grid grid-cols-2 md:grid-cols-4 gap-4 text-white">
          <div
            onClick={() => window.open("https://www.linkedin.com/in/zakeer7/", "_blank")}
            className="homebox flex items-center justify-center p-4"
          >
            <ion-icon name="logo-linkedin"></ion-icon>
            <a href="https://www.linkedin.com/in/zakeer7/">Linked In</a>
          </div>
          <div
            onClick={() => window.open("https://www.github.com/Zakeer-official", "_blank")}
            className="homebox flex items-center justify-center p-4"
          >
            <ion-icon name="logo-github"></ion-icon>
            <a href="https://github.com/Zakeer-official">Github</a>
          </div>
          <div
            onClick={() => window.open("https://www.instagram.com/zakeer_ahamad_/", "_blank")}
            className="homebox flex items-center justify-center p-4"
          >
            <ion-icon name="logo-instagram"></ion-icon>
            <a href="https://www.instagram.com/zakeer_ahamad_/">Instagram</a>
          </div>
          <div
            onClick={() => window.open("https://medium.com/@zzakeer22/about", "_blank")}
            className="homebox flex items-center justify-center p-4"
          >
            <ion-icon name="logo-medium"></ion-icon>
            <a href="https://medium.com/@zzakeer22/about">Medium</a>
          </div>
        </div>

        <Resume />
        <Skills />
        <Quotes />
        <Projects />
        <Library />
        <Showcase />
      </div>
    </article>
  );
}
