import React, { useEffect, useState } from "react";
import "./AddCard.css";
import { useDispatch, useSelector } from "react-redux";
import { Deceases, forwordData, RemoveCard } from "../../Redux/ProductSclie";

function AddCard() {
  const [useData, updateuseData] = useState([]);

  const cardData = useSelector((state) => state.FirstSclie.cardData);

  useEffect(() => {
    updateuseData(cardData);
  }, [cardData]);

  const dispatch = useDispatch();
  const increaeseQuantity = (re) => {
    dispatch(forwordData(re));
  };

  const DecreasesQuantity = (ro) => {
    dispatch(Deceases(ro));
  };

  const deleteData = (r) => {
    console.log(r, "r");
    dispatch(RemoveCard(r));
  };

  const calculateTotal = () => {
    return useData.reduce((acc, item) => acc + item.totalPrice, 0).toFixed(2);
  };
  return (
    <>
      <div className="AddmainSection">
        <section className="h-100 gradient-custom">
          <div className="container py-5">
            <div className="row d-flex justify-content-center my-4">
              <div className="col-md-8">
                <div className="card mb-4">
                  <div className="card-header py-3">
                    <h5 className="mb-0">
                      The Total Number of Cart - {useData.length}
                    </h5>
                  </div>
                  {useData.map((saiData) => {
                    return (
                      <>
                        <div className="card-body" key={saiData.id}>
                          {/* Single item */}
                          <div className="row">
                            <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                              {/* Image */}
                              <div
                                className="bg-image hover-overlay hover-zoom ripple rounded"
                                data-mdb-ripple-color="light"
                              >
                                <img
                                  src={saiData.img}
                                  className="w-100"
                                  alt="Blue Jeans Jacket"
                                />
                                <a href="#!">
                                  <div
                                    className="mask"
                                    style={{
                                      backgroundColor:
                                        "rgba(251, 251, 251, 0.2)",
                                    }}
                                  />
                                </a>
                              </div>
                              {/* Image */}
                            </div>

                            <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                              {/* Data */}
                              <p>
                                <strong>{saiData.name}</strong>
                              </p>
                              <p>{saiData.Region}</p>

                              <button
                                type="button"
                                data-mdb-button-init
                                data-mdb-ripple-init
                                className="btn btn-danger btn-sm mb-2"
                                data-mdb-tooltip-init
                                title="Move to the wish list"
                                onClick={() => deleteData(saiData)}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-trash3"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                                </svg>
                              </button>
                              {/* Data */}
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                              {/* Quantity */}
                              <div
                                className="d-flex mb-4"
                                style={{ maxWidth: 300 }}
                              >
                                <button
                                  data-mdb-button-init
                                  data-mdb-ripple-init
                                  className="btn btn-secondary px-3 me-2"
                                  style={{ height: 48 }}
                                  onclick="button clicked"
                                  onClick={() => increaeseQuantity(saiData)}
                                >
                                  <h6>+</h6>
                                  <i className="fas fa-minus" />
                                </button>
                                <div
                                  data-mdb-input-init
                                  className="form-outline"
                                >
                                  <input
                                    id="form1"
                                    min={0}
                                    name="quantity"
                                    value={saiData.Quantity}
                                    type="number"
                                    className="form-control"
                                  />
                                  <label
                                    className="form-label"
                                    htmlFor="form1"
                                  ></label>
                                </div>
                                <button
                                  data-mdb-button-init
                                  data-mdb-ripple-init
                                  className="btn btn-secondary px-3 ms-2"
                                  onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                                  style={{ height: 48 }}
                                  onClick={() => DecreasesQuantity(saiData)}
                                >
                                  <h5>-</h5>
                                  <i className="fas fa-plus" />
                                </button>
                              </div>
                              {/* Quantity */}

                              {/* Price */}
                              <p className="text-start text-md-center">
                                <strong>${saiData.totalPrice}</strong>
                              </p>
                              {/* Price */}
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>

                <div className="card mb-4">
                  <div className="card-body">
                    <p>
                      <strong>Expected shipping delivery</strong>
                    </p>
                    <p className="mb-0">12.10.2020 - 14.10.2020</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4">
                  <div className="card-header py-3">
                    <h5 className="mb-0">Summary</h5>
                  </div>
                  <div className="card-body">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                        The Total Number of Products
                        <strong> {cardData.length}</strong>
                      </li>
                      <hr />
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                        <div>
                          <strong>Total amount</strong>
                          <strong>
                            <p className="mb-0">(including TAX)</p>
                          </strong>
                        </div>
                        <span>
                          <strong>{calculateTotal()}</strong>
                        </span>
                      </li>
                    </ul>
                    <button
                      type="button"
                      data-mdb-button-init
                      data-mdb-ripple-init
                      className="btn btn-primary btn-lg btn-block"
                    >
                      Go to Payment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default AddCard;

{
}
