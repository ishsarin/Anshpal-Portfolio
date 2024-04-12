import React from "react";
import { Link } from "react-router-dom";
import VI from "../../media/DS_Dragon_Lavarys.png";
import d1 from "../../media/DS_bg/d1.png";
const VIFDM = () => {
  return (
    <div className="project1">
      <div className="starting_img_text">
        <h1>Vehicle Insurance Fraud Detection Model</h1>

        <div class="row mob_css " style={{ padding: "50px" }}>
          <div class="col-6 ">
            <img className="img-fluid" src={VI} alt="" />
          </div>
          <div class="col-6 starting_text ">
            imagine/ A dragon in the middle of a road, with cars on his sides,
            some broken some fine. Highly detailed, Stunning, Intricate Unreal
            engine, Octane render, wide angle, 8k, warm cinematic light, --ar
            16:9
          </div>
        </div>
      </div>

      <div className="project2_img2" />

      <div className="brief_text">
        A Data Science-driven project enabling the analysis and detection of
        fraud using data and information technology.{" "}
        <a
          href="https://github.com/Mohit-Mohan/Car-Insurance-Fraud-Detection-Model-Lasso"
          target="blank"
        >
          GitHub
        </a>
      </div>
      <div className="project2_img1" src="" alt=""></div>
      {/* <div
        className="project2_img1_text brief_text"
        style={{
          backgroundColor: "black",
          color: "white",
          padding: "5%",
          marginBottom: "-1px",
        }}
      >
        An effort to tune the hyperparameter ‘C’ was made on the validation data
        set using all 25 features available. When the value of C was very large
        (10000) the penalty for overfitting was minimal and all features
        contributed to overall data putting the model at a risk of overfitting.
        Alternatively, a check was conducted using a very small value of C
        (0.001), which did not allow any features to contribute, reducing model
        accuracy significantly and leading to underfitting. These two cases,
        however, proved to be good sanity checks for the regression analysis. To
        correctly tune C, the values were iteratively decreased from 10 till 5
        (step down = 1), where the first feature “Medium Vehicle” was dropped.
        The next feature to be dropped was “Vehicle Color Other” (C=2.0). The
        step down was reduced to 0.5 and further to 0.1 to check for parameter
        sensitivity. A complete drop guide of features and their accuracies is
        shown below.
      </div> */}
      <div style={{ backgroundColor: "black", color: "white" }}>
        {/* <div>
          <img
            src="https://i.ibb.co/pP19MRD/Screenshot-2022-10-23-021252.png"
            alt="Screenshot-2022-10-23-021252"
            border="0"
            style={{ maxWidth: "95%", marginBlock: "5%" }}
          ></img>
        </div> */}
        {/* <div
          className="text_center text brief_text"
          style={{ marginBottom: "5%" }}
        >
          The further tuned final value of C=1.52 was chosen as the right fit
          for the model and the features that were analysed to be not
          statistically significant (4) were “Compact Vehicles, Medium Vehicles,
          Gray Vehicles and Other Coloured Vehicles”. Additionally detailed
          analysis of all features showed that “Age of Driver, Safety Rating,
          High Education, Zip Code, Past no. of Claims, Age of Vehicle, Vehicle
          Price, Large Vehicles, Black Vehicles and Marital Status” were amongst
          the most statistically significant to the model and had higher
          predictive power.
        </div> */}

        {/* <div className="project2_img3"></div> */}

        {/* <div className="text_center  brief_text">
          A lasso regression was done using the remaining 21 features analysed.
          After conducting this analysis on the training and validation sets, an
          analysis was conducted on the test set to check if the right fit was
          achieved. The results of the validation vs test set are shown below.
        </div> */}

        {/* <div>
          <img
            className="img-fluid"
            src="https://i.ibb.co/6RrkP94/Screenshot-2022-10-23-022359.png"
            alt="Screenshot-2022-10-23-022359"
            border="0"
            style={{ marginTop: "5%", maxWidth: "95%" }}
          />
        </div> */}

        {/* <div
          className="text_center  brief_text"
          style={{ paddingBottom: "5%" }}
        >
          The model performed sufficiently on the test set with an accuracy
          discrepancy of only 0.31%. The recall was slightly lower than the
          validation set (5.8%) but marginally higher than the training set
          (2.0%). However, the precision was the highest for the test set by
          3.9% and 1.4%, and since for an insurance company we would like to
          maximize True Positives (TP) and minimize False Positives (FP), this
          augurs well for the model fitment.
        </div> */}
        <div>
          <img src={d1} alt="" className="img-fluid" />
        </div>

        <Link to="/" className="homepage_btn_other">
          Home Page
        </Link>
      </div>
    </div>
  );
};

export default VIFDM;
