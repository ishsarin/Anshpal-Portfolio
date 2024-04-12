import React from "react";
import { Link } from "react-router-dom";
import TF from "../../media/TF_Dragon_Batter.png";
import TF1 from "../../media/TF1_bg/TF1.png";
import TF2 from "../../media/TF1_bg/TF2.png";
import TF3 from "../../media/TF1_bg/TF3.png";
import TF4 from "../../media/TF1_bg/TF4.png";
import TF5 from "../../media/TF1_bg/TF5.png";
const Batmobile = () => {
  return (
    <div className="project1">
      <div className="starting_img_text">
        <h1>Vehicle Aerodynamics - The Batmobile</h1>

        <div class="row mob_css " style={{ padding: "50px" }}>
          <div class="col-6 ">
            <img className="img-fluid" src={TF} alt="" />
          </div>
          <div class="col-6 starting_text ">
            /imagine Green Eyed Dragon with batman like elements firing neon
            smoke , dark night sky, hyper-detailed, clarity, clean, controlled
            chaos, intricate, cinematic lighting, octane render, 8k, unreal
            engine 5, --ar 16:9
          </div>
        </div>
      </div>

      <div className="bm_img1" />

      <div className="brief_text">
        The Batmobile v2.0 is designed to have a low drag coefficient (0.20 -
        0.30), especially at high speeds whilst breaking down its complex
        geometry into simplified segments. A balance must also be generated with
        lift and drag to warrant aerodynamic stability even at high speeds.The
        project aims to give a detailed analysis of the aerodynamic capabilities
        of the designed vehicle, along with justifications for the same, to make
        the batmobile a modern reality.
      </div>
      <div className="bm_img2" src="" alt="" />
      {/* <div>
        <img
          src="https://i.ibb.co/CsrV1G9/TF1.png"
          alt="TF1"
          border="0"
          style={{ width: "100%" }}
        />
      </div>
      <div>
        <img
          src="https://i.ibb.co/mvPMv2R/TF2.png"
          alt="TF1"
          border="0"
          style={{ width: "100%" }}
        />
      </div>
      <div className="bm_img3" src="" alt="" />
      <div>
        <img
          src="https://i.ibb.co/VW2M8db/TF3.png"
          border="0"
          style={{ width: "100%" }}
        />
      </div>
      <div>
        <img
          src="https://i.ibb.co/pZqwxLB/TF4.png"
          border="0"
          style={{ width: "100%" }}
        />
      </div>
      <div className="bm_img4" src="" alt="" />
      <div>
        <img
          src="https://i.ibb.co/0fjqrpS/TF5.png"
          border="0"
          style={{ width: "100%" }}
        />
      </div> */}

      <div>
        <img src={TF1} alt="" className="img-fluid" />
      </div>

      <div>
        <img src={TF2} alt="" className="img-fluid" />
      </div>
      <div className="bm_img3" src="" alt="" />

      <div>
        <img src={TF3} alt="" className="img-fluid" />
      </div>

      <div>
        <img src={TF4} alt="" className="img-fluid" />
      </div>
      <div className="bm_img4" src="" alt="" />

      <div>
        <img src={TF5} alt="" className="img-fluid" />
      </div>
      <div style={{ backgroundColor: "black", color: "white" }}>
        <Link to="/" className="homepage_btn_other">
          Home Page
        </Link>
      </div>
    </div>
  );
};

export default Batmobile;
