import React, { useState } from "react";
import imageDataScroll from "../../ApiData/ApiData-2";
import "./Products.css";
import TopBar from "../TopBar/TopBar";
import { useDispatch } from "react-redux";
import { forwordData } from "../../Redux/ProductSclie";

function Products() {
  const [uData, updateuData] = useState(imageDataScroll);

  const dispatch = useDispatch();

  const handleData = (uform) => {
    dispatch(forwordData(uform));
  };

  return (
    <div>
      <TopBar />
      <div className="mainDiv">
        {uData.map((uform) => {
          return (
            <div className="allData">
              <div className="dataaform">
                <div className="name">
                  <strong>{uform.name}</strong>
                </div>
                <div className="price">${uform.price}</div>
                <div className="discription">{uform.Discription}</div>
              </div>

              <div className="imgData">
                <img src={uform.img} alt="gsgsd" />

                <div className="ADDCARD">
                  <button onClick={() => handleData(uform)}>ADD CARD</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Products;
