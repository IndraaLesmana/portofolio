import About from "@/modules/about";
import React from "react";

const AboutPage = () => {
  return (
    <article className="about active">
      <header>
        <h2 className="h2 article-title font-bold">About</h2>
      </header>
      <About/>
    </article>
  );
};

export default AboutPage;
