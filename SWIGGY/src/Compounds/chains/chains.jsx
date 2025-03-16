import React, { useState } from "react";
import imageDataScroll from "../../ApiData/ApiData-2";
import "./Chains.css";

function Chains() {
  const [chines, updatechines] = useState(imageDataScroll);

  const HandleScroll = (direction) => {
    const Data = document.getElementById("galaryData");
    const ScrollSpeed = 300;

    if (direction === "left") {
      Data.scrollTo({
        left: Data.scrollLeft - ScrollSpeed,
        behavior: "smooth",
      });
    } else if (direction === "right") {
      Data.scrollTo({
        left: Data.scrollLeft + ScrollSpeed,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="leftRigthButton">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          className="bi bi-caret-left"
          viewBox="0 0 16 16"
          onClick={() => HandleScroll("left")}
        >
          <path d="M10 12.796V3.204L4.519 8zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          className="bi bi-caret-right"
          viewBox="0 0 16 16"
          onClick={() => HandleScroll("Right")}
        >
          <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753" />
        </svg>
      </div>

      <div className="totalSection">
        <h3>
          <strong>Best Restaurant in Warangal</strong>
        </h3>
        <div className="chinesSection" id="galaryData">
          {chines.map((finalData) => {
            return (
              <div id="chinesSectionimage">
                <img src={finalData.img} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Chains;
