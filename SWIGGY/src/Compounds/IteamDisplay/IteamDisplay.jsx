import React, { useState } from "react";
import imageNavBar from "../../ApiData/ApiData-1";
import "./IteamDisplay.css";

function IteamDisplay() {
  const [iteam, updateiteam] = useState(imageNavBar);
  return (
    <div>
      <div className="mainSection">
        {iteam.map((iteamsData) => {
          return (
            <>
              <div className="imageSection">
                <img src={iteamsData.img} alt="data" />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default IteamDisplay;
