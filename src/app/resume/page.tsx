import Resume from "@/modules/resume";
import React from "react";
const ResumePage = () => {
  return (
    <article className="resume active">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>
      <Resume/>
    </article>
  );
};

export default ResumePage;
