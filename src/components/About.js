import React from "react";

const About = () => {
  return (
    <div className="container about">
      <h2
        style={{ marginBottom: "4rem", fontSize: "3rem", paddingTop: "4rem" }}
        id="about"
      >
        Portfolio Theme- A Dance of Dragons
      </h2>

      <div className="row">
        <div className="col-md-6 about_the_website_text ">
          <p>
            Welcome to my corner of the web! I'm Anshpal Sahni, a versatile
            professional with a passion for technology, analytics, and community
            impact. With a background in computer science and experience in
            software development and management consulting, I bring a unique
            blend of technical expertise and strategic insight to everything I
            do.
          </p>
          <p>
            My journey began with a Bachelor's degree in Computer Science, where
            I immersed myself in the world of programming and technology. I then
            embarked on a rewarding career in software development, where I had
            the opportunity to work on innovative projects at American Express
            GBT. There, I cultivated my problem-solving skills and gained
            valuable experience collaborating within a global team environment.
            Seeking to broaden my horizons and make a difference beyond the tech
            realm, I also serve as a Management and Marketing Lead at the Indian
            Podiatry Association, a non-profit organization dedicated to
            promoting foot health and education. In this role, I have the
            privilege of leveraging my expertise to drive awareness and
            engagement within the community, contributing to meaningful
            initiatives that improve lives.
          </p>
          <p className="mb-5">
            Currently, I am further expanding my skill set as a Decision Analyst
            Associate at ZS Associates, a leading management consulting firm.
            Here, I specialize in harnessing data-driven insights to inform
            strategic business decisions, helping clients navigate complex
            challenges and achieve their goals. Passionate about continuous
            learning and growth, I'm actively pursuing opportunities in business
            and product analysis, where I can leverage my diverse background to
            drive innovation and create value. On this website, you'll find a
            showcase of my projects, insights, and experiences, offering a
            glimpse into my journey and the unique perspective I bring to the
            table. Whether you're a fellow professional, a potential
            collaborator, or an organization seeking talent, I invite you to
            explore further and connect with me to explore how we can create
            impact together. Thank you for visiting, and I look forward to the
            opportunity to connect and collaborate!
          </p>
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
