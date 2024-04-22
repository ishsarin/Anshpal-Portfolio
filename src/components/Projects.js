import React from "react";
import { Link } from "react-router-dom";
import imperialdicechess from "../media/C2_Dragon_Sicilian.png";
import VIFDM from "../media/DS_Dragon_Lavarys.png";
import Rebirth from "../media/SDE_Dragon_Penelope.png";
import Home_visual from "../media/House_Sales_Visualization.png";
import Airline_visual from "../media/Airline_visual.png";
import Blok1 from "../media/IDE_Dragon_Waeve.png";
const Projects = () => {
  return (
    <div className="container" id="project">
      <h2
        style={{
          marginBottom: "4rem",
          fontSize: "3rem",
          color: "white",
          paddingTop: "3rem",
        }}
        className="project_title"
      >
        PROJECTS
      </h2>

      <div className="container project_css ">
        <div className="container text-center">
          <div className="row row-cols-2">
            <div className="col projects_col">
              <span className="img1">
                {/* <Link to="/allprojects/imperialdicechess"> */}
                <a
                  target="_blank"
                  href="https://public.tableau.com/app/profile/anshpal.sahni/viz/HouseSalesDashboard_17125041304350/HouseSalesDashboard"
                >
                  <img
                    className="project_img img-fluid home_visual"
                    // src="https://i.ibb.co/KsV2WPs/C2-Dragon-Sicilian.png"
                    // src={imperialdicechess}
                    src={Home_visual}
                    alt=""
                    style={{ height: "25rem" }}
                  />
                  <span className="allprojects_img">
                    House Sales Visualization
                  </span>
                  {/* </Link> */}
                </a>
              </span>
            </div>
            <div className="col projects_col">
              <span className="img1">
                {/* <Link to="/allprojects/VIFDM"> */}
                <a
                  target="_blank"
                  href="https://public.tableau.com/app/profile/anshpal.sahni/viz/AirlineReviewDashboard_17125012265220/Dashboard1"
                >
                  {/* <img className="project_img img-fluid" src={VIFDM} alt="" /> */}
                  <img
                    className="project_img img-fluid"
                    src={Airline_visual}
                    alt=""
                  />

                  <span className="allprojects_img">
                    Airline Review Visualization
                  </span>
                  {/* </Link> */}
                </a>
              </span>
            </div>
            <div className="col projects_col">
              <span className="img2">
                {/* <Link to="/allprojects/Rebirth"> */}
                <img
                  className="project_img img-fluid"
                  // src="https://i.ibb.co/zHD06dn/SDE-Dragon-Penelope.png"
                  src={Rebirth}
                  alt=""
                />
                <span className="allprojects_img ">Coming Soon!</span>
                {/* </Link> */}
              </span>
            </div>
            <div className="col projects_col">
              <span className="img2">
                {/* <Link to="/allprojects/Blok1"> */}
                <img
                  className="project_img img-fluid"
                  // src="https://i.ibb.co/yVrBk38/IDE-Dragon-Waeve.png"
                  src={Blok1}
                  alt=""
                />
                <span className="allprojects_img">Coming Soon!</span>
                {/* </Link> */}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* <Link to="/allprojects" className="view_css">
        View More...
      </Link> */}
    </div>
  );
};

export default Projects;
