import React from "react";
import Header from "./Header";
import TopProjects from "./TopProjects";
import Education from "./Education";
import Courses from "./Courses";
import Skills from "./Skills";

const HomePage = () => {
  return (
    <div>
      <Header />
      <TopProjects />
      <Education />
      <Courses />
      <Skills />
    </div>
  );
};

export default HomePage;
