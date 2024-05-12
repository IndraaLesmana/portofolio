import React from "react";
import { render, screen } from "@testing-library/react";
import ProjectCard from "../ProjectCard";

describe("ProjectCard", () => {
  it("renders the project title correctly", () => {
    render(
      <ProjectCard
        title="Portfolio"
        description="Personal websites, portfolios and blogs built with Next Js, CSS and TypeScript"
        technologies={["Next.js", "CSS", "TypeScript"]}
        imageSrc="/portfolio.png"
      />
    );
    const titleElement = screen.getByText("Portfolio");
    expect(titleElement).toBeInTheDocument();
  });

  it("renders the project description correctly", () => {
    render(
      <ProjectCard
        title="Portfolio"
        description="Personal websites, portfolios and blogs built with Next Js, CSS and TypeScript"
        technologies={["Next.js", "CSS", "TypeScript"]}
        imageSrc="/portfolio.png"
      />
    );
    const descriptionElement = screen.getByText(
      "Personal websites, portfolios and blogs built with Next Js, CSS and TypeScript"
    );
    expect(descriptionElement).toBeInTheDocument();
  });

  it("renders the project technologies correctly", () => {
    render(
      <ProjectCard
        title="Portfolio"
        description="Personal websites, portfolios and blogs built with Next Js, CSS and TypeScript"
        technologies={["Next.js", "CSS", "TypeScript"]}
        imageSrc="/portfolio.png"
      />
    );
    const nextJsElement = screen.getByTestId("Next.js");
    const cssElement = screen.getByTestId("CSS");
    const typescriptElement = screen.getByTestId("TypeScript");
    expect(nextJsElement).toBeInTheDocument();
    expect(cssElement).toBeInTheDocument();
    expect(typescriptElement).toBeInTheDocument();
  });

  it("renders the project image correctly", () => {
    render(
      <ProjectCard
        title="Portfolio"
        description="Personal websites, portfolios and blogs built with Next Js, CSS and TypeScript"
        technologies={["Next.js", "CSS", "TypeScript"]}
        imageSrc="/portfolio.png"
      />
    );
    const imageElement = screen.getByRole("img");
    expect(imageElement).toHaveAttribute("src", "/portfolio.png");
  });
});
