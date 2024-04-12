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
                <Link to="/allprojects/imperialdicechess">
                  <img
                    className="project_img img-fluid"
                    // src="https://i.ibb.co/KsV2WPs/C2-Dragon-Sicilian.png"
                    src={imperialdicechess}
                    alt=""
                  />
                  <span className="allprojects_img">Imperial Dice Chess</span>
                </Link>
              </span>
            </div>
            <div className="col projects_col">
              <span className="img1">
                <Link to="/allprojects/VIFDM">
                  <img
                    className="project_img img-fluid"
                    // src="https://i.ibb.co/K75r6J3/DS-Dragon-Lavarys.png"
                    src={VIFDM}
                    alt=""
                  />

                  <span className="allprojects_img">
                    Vehicle Insurance Fraud Detection Model
                  </span>
                </Link>
              </span>
            </div>
            <div className="col projects_col">
              <span className="img2">
                <Link to="/allprojects/Rebirth">
                  <img
                    className="project_img img-fluid"
                    // src="https://i.ibb.co/zHD06dn/SDE-Dragon-Penelope.png"
                    src={Rebirth}
                    alt=""
                  />
                  <span className="allprojects_img ">Rebirth</span>
                </Link>
              </span>
            </div>
            <div className="col projects_col">
              <span className="img2">
                <Link to="/allprojects/Blok1">
                  <img
                    className="project_img img-fluid"
                    // src="https://i.ibb.co/yVrBk38/IDE-Dragon-Waeve.png"
                    src={Blok1}
                    alt=""
                  />
                  <span className="allprojects_img">Blok-1, Music in 3D</span>
                </Link>
              </span>
            </div>
            <div className="col projects_col">
              <span className="img2">
                <Link to="/allprojects/TandemBicycle">
                  <img
                    className="project_img img-fluid"
                    // src="https://i.ibb.co/kyTsp7Y/FEA-Dragon-Fluffy.png"
                    src={FEA}
                    alt=""
                  />
                  <span className="allprojects_img">
                    FEA of a Tandem Bicycle Frame
                  </span>
                </Link>
              </span>
            </div>
            <div className="col projects_col">
              <span className="img3">
                <Link to="/allprojects/Batmobile">
                  <img
                    className="project_img img-fluid"
                    // src="https://i.ibb.co/wMY1Yk6/TF-Dragon-Batter.png"
                    src={Batmobile}
                    alt=""
                  />
                  <span className="allprojects_img">
                    Vehicle Aerodynamics - The Batmobile
                  </span>
                </Link>
              </span>
            </div>

            <div className="col projects_col">
              <span className="img3">
                <img
                  className="project_img img-fluid"
                  // src="https://i.ibb.co/BLnJ72h/Smaug.png"
                  src={Smaug}
                  alt=""
                />
                <span className="allprojects_img">Coming Soon...</span>
              </span>
            </div>

            <div className="col projects_col">
              <span className="img2">
                <img
                  className="project_img img-fluid"
                  // src="https://i.ibb.co/PDy92vT/PMAT-Dragon-Drall-E.png"
                  src={PMAT}
                  alt=""
                />
                <span className="allprojects_img">Coming Soon...</span>
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
