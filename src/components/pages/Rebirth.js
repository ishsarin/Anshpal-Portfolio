import React from "react";
import { Link } from "react-router-dom";
import birth from "../../media/SDE_Dragon_Penelope.png";
import s1 from "../../media/SDE_bg/drive-download-20221119T200423Z-001/s1.png";
import s2 from "../../media/SDE_bg/drive-download-20221119T200423Z-001/s2.png";
import s3 from "../../media/SDE_bg/drive-download-20221119T200423Z-001/s3.png";
import s4 from "../../media/SDE_bg/drive-download-20221119T200423Z-001/s4.png";
import House_visual from "../../media/House_Sales_Visualization.png";

const Rebirth = () => {
  return (
    <div className="project1">
      <div className="starting_img_text_white_bg">
        <h1>Rebirth</h1>

        <div class="row mob_css" style={{ padding: "50px" }}>
          <div class="col-6 ">
            <img
              className="img-fluid"
              // src="https://i.ibb.co/zHD06dn/SDE-Dragon-Penelope.png"
              // src={birth}
              src={House_visual}
              alt=""
            />
          </div>
          <div class="col-6 starting_text ">
            imagine/ Tiny and cute baby crystal dragon in blue and pink colours,
            warm summer moss forest, dynamic pose, Extreme detailed, intricate
            details, correct anatomy, magical light in the background, Unreal
            engine, Pixar. Octane render, wide angle, 8k, warm cinematic light,
            --ar 16:9
          </div>
        </div>
      </div>

      <div className="project3_img1" />
      <div className="video_project1" style={{ backgroundColor: "white" }}>
        <iframe
          width="500"
          height="400"
          src="https://www.youtube.com/embed/CwBdQV4lpf8"
        />
      </div>
      {/* <div className="img_css">
        <div>
      <img src="https://i.ibb.co/vZyFWZ2/User-Research.png"  alt="User-Research" border="0"/>

        </div>
      </div> */}
      <div className="brief_text_white_bg">
        An advanced pregnancy and ovulation testing kit employing the principles
        of Sustainable Design.
      </div>
      <div className="project3_img2" src="" alt="" />

      <div className="img_css ">
        <div>
          <img className="img-fluid" src={s1} alt="" />
        </div>

        {/* <div>
          <img
            className="img-fluid"
            src="https://i.ibb.co/QFmvMg2/Ideation-Futures-Group-2-B-Poster.jpg"
            alt="Ideation-Futures-Group-2-B-Poster"
            border="0"
          />
        </div> */}
        {/* <div>

      <img src="https://i.ibb.co/nRdqQK4/Group-2-B-System-Solution-Poster.jpg" alt="Group-2-B-System-Solution-Poster" border="0"/>      </div>
       */}
        {/* <div>
          <img
            className="img_center"
            src="https://i.ibb.co/NZ4Dq38/exploded.png"
            alt="exploded"
            border="0"
            style={{ width: "70%" }}
          />
        </div> */}
        {/* 
        <div className="brief_text_white_bg">
          Acknowledging the unique journeys of each user, a complete journey map
          with diverse entry points was created.
        </div> */}

        {/* <div>
          <img
            className="img_centerimg-fluid img-fluid"
            src="https://i.ibb.co/tZ8yZ6x/user-journey.png"
            alt="user-journey"
            border="0"
            style={{ display: "block", marginLeft: "3%" }}
          />
        </div> */}

        <p className="project3_img3" style={{ marginBottom: "0px" }} />
        <div>
          <img className="img-fluid" src={s2} alt="" />
        </div>
        <div>
          <img className="img-fluid" src={s3} alt="" />
        </div>

        <p className="project3_img4" style={{ marginBottom: "0px" }} />

        <div>
          <img className="img-fluid" src={s4} alt="" />
        </div>

        {/* <div class="row">
          <div class="col-7 multi_phone" style={{ paddingRight: "0px" }}>
            <img
              className="img-fluid"
              src="https://i.ibb.co/Vg0j7vy/image.png"
              alt="image"
              border="0"
              style={{ marginBlock: "0rem" }}
            />
          </div>
          <div class="col-5 app_interface_text brief_text_white_bg">
            <div>
              With the service, the customers have access to online help through
              a website or app. It can aid the user journey towards a successful
              pregnancy, easing the experience through better understanding of
              each step of the purchase, collection / delivery, use and return.
            </div>
          </div>
        </div> */}

        {/* <div>
          <img
            className="img-fluid"
            src="https://i.ibb.co/tPGS2RC/Production-and-sourcing.png"
            alt="Production-and-sourcing"
            border="0"
            style={{ marginBottom: "0rem" }}
          />
        </div> */}
        {/* 
        <div className="app_interface_text brief_text_white_bg">
          To source the materials & components from suppliers to manufacture the
          product, we researched several locations & found these spots in the
          UK. Using analytical material selection, the kit delays obsolescence
          and creates a detailed circular system.
        </div> */}
        {/* <div>
          <img
            className="img-fluid"
            src="https://i.ibb.co/7K99yHW/system-journey-map.png"
            alt="system-journey-map"
            border="0"
            style={{ display: "block", marginLeft: "4%" }}
          />{" "}
        </div> */}
        {/* 
        <div className=" brief_text_white_bg">
          Two cases for the calculation of Embodied Energy and Carbon Footprint
          were taken. Taking best case scenario with recycling (& no discrete
          delivery), and with discrete delivery and minimum recyclability
          possible.
        </div> */}

        {/* <div class="row justify-content-evenly  b1_b2 ">
          <div class="col-6">
            <img
              className="img-fluid_css"
              src="https://i.ibb.co/4sH8PFZ/b1.png"
              alt="b1"
              border="0"
              style={{ width: "auto" }}
            />
          </div>
          <div class="col-6">
            <img
              className="img-fluid_css"
              src="https://i.ibb.co/XjV3s2Y/b2.png"
              alt="b2"
              border="0"
              style={{ width: "auto", height: "654px" }}
            />
          </div>
        </div> */}
      </div>
      <Link to="/" className="homepage_btn ">
        Home Page
      </Link>
    </div>
  );
};

export default Rebirth;
