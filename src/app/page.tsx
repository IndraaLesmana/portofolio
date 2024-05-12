"use client";

import Home from "@/modules/home";
import React from "react";

const HomePage = () => {
  return (
    <>
        <article className="home active">
          <header>
            <h2 className="h2 article-title font-bold">Home</h2>
          </header>
          <Home />
        </article>
    </>
  );
};

export default HomePage;
