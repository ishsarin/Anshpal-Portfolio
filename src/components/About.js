import React from "react";

const About = () => {
  return (
    <div className="container about">
      <h2
        style={{ marginBottom: "4rem", fontSize: "3rem", paddingTop: "4rem" }}
        id="about"
      >
        A Dance of Dragons
      </h2>

      <div className="row">
        <div className="col-md-6 about_the_website_text ">
          <p>
            A synthesis of design and technology, this website is an attempt to
            showcase my knowledge, practical experience, and technical
            competence in the fields of Project Management and Design, along
            with some projects I am passionate about. Each project of mine has a
            story of its own with one particularly unique underlying commonality
            – dragons.{" "}
          </p>
          <div>
            {" "}
            The idea behind using dragons to introduce my projects is an ode to
            evolving technology and Artificial Intelligence (AI). Using
            AI-generative art and prompt engineering coupled with my admiration
            for mystical creatures, I have used images of dragons to introduce
            each project to give the readers a subtle glimpse of what they can
            expect from the project. The dragons have been created using
            exclusive elements which are unique to each project and a close look
            at them will help you discover the clues embedded in the images.
          </div>
        </div>
        <div className="col-md-6 token">
          <img
            className="logo github_token "
            src="https://avatars.githubusercontent.com/u/73143061?v=4"
            height="75%"
            alt="Mohit"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
