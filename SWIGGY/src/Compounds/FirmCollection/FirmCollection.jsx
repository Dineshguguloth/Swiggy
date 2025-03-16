import React, { useState } from "react";
import imageDataScroll from "../../ApiData/ApiData-2";
import "./FirmCollection.css";
import { Link } from "react-router-dom";

function FirmCollection() {
  const [imageData, updateimageData] = useState(imageDataScroll);
  const [filterData, updatefilterData] = useState("All");

  const HandleFilter = (Region) => {
    updatefilterData(Region);
  };

  const AnyVariable =
    filterData === "All"
      ? imageData
      : imageData.filter((item) => item.Region === filterData);

  return (
    <>
      <div className="total-Section">
        <div className="headingSection">
          <h3>
            <strong>Restorent with Online Services in Warangal</strong>
          </h3>
        </div>
        <div className="filterButton">
          <button
            type="button"
            className="btn btn-outline-success"
            onClick={() => HandleFilter("All")}
          >
            All
          </button>
          <button
            type="button"
            className="btn btn-outline-success"
            onClick={() => HandleFilter("South India")}
          >
            South-Indian
          </button>
          <button
            type="button"
            className="btn btn-outline-success"
            onClick={() => HandleFilter("North India")}
          >
            North-Indian
          </button>
          <button
            type="button"
            className="btn btn-outline-success"
            onClick={() => HandleFilter("Chines")}
          >
            Chines
          </button>
        </div>
        <div className="mainSectionData">
          <div className="container text-center">
            <Link to={"./Products"} className="linkData">
              <div className="row">
                {AnyVariable.map((finalData) => {
                  return (
                    <div className="col-3">
                      <div className="names">
                        <div className="imgSection">
                          <img src={finalData.img} alt={"food images"} />
                          <div className="offer">{finalData.offer}</div>
                        </div>
                        <div className="listData">
                          <ul>
                            <li>
                              <strong>{finalData.name}</strong>
                            </li>
                            <div className="region">
                              <li>{finalData.Region}</li>
                            </div>
                            <div className="area">
                              <li>{finalData.Area}</li>
                            </div>
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default FirmCollection;
