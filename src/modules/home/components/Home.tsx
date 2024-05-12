import React from "react";
import SkillList from "./SkillList";
import Introduction from "./Introduction";
import Service from "./Service";

export const Home = () => {
  return (
    <>
        <Introduction />
        <Service />
        <SkillList />
    </>
  );
};
