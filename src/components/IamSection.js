import React from "react";
import Typewriter from "typewriter-effect";

const IamSection = () => {
  return (
    <div>
      <div className="container-fluid  IamSection_css">
        <div>
          I am a
          <span className="IamSection">
            <Typewriter
              options={{
                strings: [
                  "Product Analyst.",
                  "Business Analyst.",
                  "Computer Science Engineer",
                  "Decision Analytics Associate.",
                ],

                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </div>
      </div>
      <a href="#project" style={{ color: "white" }} className="bottom_arrow">
        <svg
          style={{ marginTop: "25rem" }}
          xmlns="http://www.w3.org/2000/svg"
          width="76"
          height="36"
          fill="currentColor"
          className="bi bi-caret-down-fill"
          viewBox="0 0 16 16"
        >
          <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
        </svg>
      </a>
    </div>
  );
};

export default IamSection;
