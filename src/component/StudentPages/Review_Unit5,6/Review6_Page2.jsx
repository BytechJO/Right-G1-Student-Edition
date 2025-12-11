import React, { useState } from "react";
import page_2 from "../../../assets/unit6/imgs/Right 1 Unit 06 Can We Go to the Park10.jpg";
import { FaHeadphones } from "react-icons/fa";
import { PiCursorClickBold } from "react-icons/pi";
import Popup from "../../Popup/Popup";
import "./Review6_Page2.css";
import song from "../../../assets/unit4/sounds/Pg33_Song_Adult Lady.mp3";
import arrowBtn from "../../../assets/unit1/imgs/Right Arrow Button ....-01.svg";
import audioBtn from "../../../assets/unit1/imgs/Right Audio Button 2.svg";
import AudioWithCaption from "../../AudioWithCaption";
import Review6_Page2_Q2 from "./Review6_Page2_Q2";
import Review6_Page2_Q3 from "./Review6_Page2_Q3";
import Review6_Page2_Q1 from "./Review6_Page2_Q1";
const Review6_Page2 = ({ openPopup }) => {
  return (
    <div className="review6-page2-background" style={{ position: "relative" }}>
      <img src={page_2} />

      <div
        className="click-icon-review6-page2-2 hover:scale-110 transition"
        style={{ overflow: "visible" }}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 60 60"
          onClick={() => openPopup("exercise", { startIndex: 70 })}
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
        className="click-icon-review6-page2-3  hover:scale-110 transition"
        style={{ overflow: "visible" }}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 60 60"
          onClick={() => openPopup("exercise", { startIndex: 71 })}
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
        className="click-icon-review6-page2-1 hover:scale-110 transition"
        style={{ overflow: "visible" }}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 60 60"
          onClick={() => openPopup("exercise", { startIndex: 72 })}
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

export default Review6_Page2;
