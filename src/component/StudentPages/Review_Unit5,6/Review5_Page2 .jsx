import React, { useState } from "react";
import page_2 from "../../../assets/unit6/imgs/Right 1 Unit 06 Can We Go to the Park8.jpg";
import { FaHeadphones } from "react-icons/fa";
import { PiCursorClickBold } from "react-icons/pi";
import Popup from "../../Popup/Popup";
import "./Review5_Page2.css";
import song from "../../../assets/unit4/sounds/Pg33_Song_Adult Lady.mp3";
import arrowBtn from "../../../assets/unit1/imgs/Right Arrow Button ....-01.svg";
import audioBtn from "../../../assets/unit1/imgs/Right Audio Button 2.svg";
import AudioWithCaption from "../../AudioWithCaption";
import Review5_Page2_Q1 from "./Review5_Page2_Q1";
import Review5_Page2_Q2 from "./Review5_Page2_Q2";
import Review5_Page2_Q3 from "./Review5_Page2_Q3";

const Review5_Page2 = ({ openPopup }) => {
  return (
    <div
      className="page1-img-wrapper"
      style={{ backgroundImage: `url(${page_2})` }}
    >
      {/* <img src={page_2} /> */}

      <div
        className="click-icon-review5-page2-2 hover:scale-110 transition"
        style={{ overflow: "visible" }}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 60 60"
          onClick={() => openPopup("exercise", { startIndex: 64 })}
          style={{ overflow: "visible" }}
        >
          <image
            className="svg-img"
            href={arrowBtn}
            x="0"
            y="0"
            width="60"
            height="60"
          />
        </svg>
      </div>

      <div
        className="click-icon-review5-page2-3  hover:scale-110 transition"
        style={{ overflow: "visible" }}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 60 60"
          onClick={() => openPopup("exercise", { startIndex: 65 })}
          style={{ overflow: "visible" }}
        >
          <image
            className="svg-img"
            href={arrowBtn}
            x="0"
            y="0"
            width="60"
            height="60"
          />
        </svg>
      </div>
     
      <div
        className="click-icon-review5-page2-1 hover:scale-110 transition"
        style={{ overflow: "visible" }}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 60 60"
          onClick={() => openPopup("exercise", { startIndex: 66 })}
          style={{ overflow: "visible" }}
        >
          <image
            className="svg-img"
            href={arrowBtn}
            x="0"
            y="0"
            width="60"
            height="60"
          />
        </svg>
      </div>
    </div>
  );
};

export default Review5_Page2;
