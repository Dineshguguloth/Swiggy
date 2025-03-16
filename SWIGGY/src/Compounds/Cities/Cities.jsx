import { useState } from "react";
import "./Cities.css";
import CitiesData from "../../ApiData/ApiData-3";

function Cities() {
  const [city] = useState(CitiesData);
  console.log(city, "city");

  return (
    <>
      <div className="total">
        <div className="head">
          <h1>Cities online Delivery</h1>
        </div>
        <div className="container">
          <div className="row" id="gap">
            {city.map((r) => (
              <div className="col-sm-3" key={r.id}>
                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-body" id="cardData">
                    <p className="card-text">{r.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Cities;
