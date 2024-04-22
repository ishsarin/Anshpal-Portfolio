import React from "react";
import ninja from "../media/ninja.png";
const About = () => {
  return (
    <div className="container about">
      <h2
        style={{ marginBottom: "4rem", fontSize: "3rem", paddingTop: "4rem" }}
        id="about"
      >
        Portfolio Theme
      </h2>

      <div className="row about-portfolio">
        <div className="col-md-6 about_the_website_text ">
          <p>
            Welcome to my portfolio website, where I showcase my expertise in
            product and business analysis through dynamic Tableau visualization
            projects. Dive into a world of data-driven storytelling as I unravel
            insights that transcend numbers, offering a glimpse into my
            analytical prowess and strategic thinking.
          </p>
        </div>
        <div className="col-md-6 token">
          <img
            className="logo github_token "
            // src="https://avatars.githubusercontent.com/u/73143061?v=4"
            src={ninja}
            height="75%"
            alt="Mohit"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
