import React from "react";
import { Link } from "react-router-dom";
import imperialdicechess from "../media/C2_Dragon_Sicilian.png";
import VIFDM from "../media/DS_Dragon_Lavarys.png";
import Rebirth from "../media/SDE_Dragon_Penelope.png";
import Blok1 from "../media/IDE_Dragon_Waeve.png";
import FEA from "../media/FEA_Dragon_Fluffy.png";
import Batmobile from "../media/TF_Dragon_Batter.png";
import Smaug from "../media/Smaug.png";
import PMAT from "../media/PMAT_Dragon_Drall-E.png";
import Home_visual from "../media/House_Sales_Visualization.png";
import Airline_visual from "../media/Airline_visual.png";
import white from "../media/white.webp";
const AllProjects = () => {
  return (
    <div className="container AllProjects" id="project">
      <h2
        style={{
          marginBottom: "4rem",
          fontSize: "3rem",
          color: "white",
          paddingTop: "3rem",
        }}
      >
        Projects
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
                  />
                  <span className="allprojects_img">
                    {" "}
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
                  href="https://public.tableau.com/app/profile/anshpal.sahni/viz/AirlineReviewDashboard_17125012265220/Dashboard1"
                  target="_blank"
                >
                  <img
                    className="project_img img-fluid"
                    // src="https://i.ibb.co/K75r6J3/DS-Dragon-Lavarys.png"
                    // src={VIFDM}
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
              <span className="img1">
                {/* <Link to="/allprojects/VIFDM"> */}

                {/* <img className="project_img img-fluid" src={VIFDM} alt="" /> */}
                <img
                  className="project_img img-fluid"
                  src={white}
                  alt=""
                  style={{ width: "-webkit-fill-available" }}
                />

                <span className="allprojects_img">Coming Soon!</span>
                {/* </Link> */}
              </span>
            </div>
            <div className="col projects_col">
              <span className="img1">
                {/* <Link to="/allprojects/VIFDM"> */}

                {/* <img className="project_img img-fluid" src={VIFDM} alt="" /> */}
                <img
                  className="project_img img-fluid"
                  src={white}
                  alt=""
                  style={{ width: "-webkit-fill-available" }}
                />

                <span className="allprojects_img">Coming Soon!</span>
                {/* </Link> */}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Link
          to="/"
          className="homepage_btn_other"
          style={{ paddingTop: "2rempx" }}
        >
          Home Page
        </Link>
      </div>
    </div>
  );
};

export default AllProjects;
