import Project from "@/modules/project";
import React from "react";

const ProjectPage = () => {

  return (
    <article className="about active">
      <header>
        <h2 className="h2 article-title">Project</h2>
      </header>
      <section className="grid gap-5 pt-2 lg:grid-cols-2">
      <Project />
      </section>
    </article>
  );
};

export default ProjectPage;
