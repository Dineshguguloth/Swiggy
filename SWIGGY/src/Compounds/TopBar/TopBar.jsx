import * as React from "react";
import "./TopBar.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useState, useEffect } from "react";
import imageDataScroll from "../../ApiData/ApiData-2";
import LoginForm from "../LoginForm/LoginForm";
function TopBar() {
  const [apiData] = useState(imageDataScroll);
  const [searchData, updateSearchData] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [isLoginVisible, setIsLoginVisible] = useState(false);

  const handleData = (d) => {
    updateSearchData(d.target.value);
  };
  useEffect(() => {
    if (searchData !== "") {
      setFilteredData(
        apiData.filter((s) =>
          s.Region.toLowerCase().startsWith(searchData.toLowerCase())
        )
      );
    } else {
      setFilteredData([]);
    }
  }, [searchData, apiData]);

  const toggleLoginForm = () => {
    setIsLoginVisible(!isLoginVisible);
  };
  const handleSuggestionClick = (suggestion) => {
    updateSearchData(suggestion);
    setFilteredData([]);
  };

  return (
    <div className="navBarSection">
      <div className="logoSection">
        <Link to="/">
          <img
            src="https://www.logoground.com/uploads12/dv12y20231585672023-12-202891507Cool%20Mustache%20Chef.jpg"
            alt=""
          />
        </Link>
        <h2 className="logoName">
          <strong>RGV Food</strong>
        </h2>
      </div>

      <div className="searchBarSection">
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={handleData}
                value={searchData}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>
        {searchData && (
          <div className="searchSuggestions">
            {filteredData.length > 0 ? (
              filteredData.map((f, index) => (
                <div
                  key={index}
                  className="regionSuggestion"
                  onClick={() => handleSuggestionClick(f.Region)}
                >
                  {f.Region}
                </div>
              ))
            ) : (
              <div className="noResults">No results found</div>
            )}
          </div>
        )}
      </div>

      <div className="addcardsection">
        <Link to="/AddCard">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-cart"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
          </svg>
        </Link>
      </div>

      <div className="login">
        <Stack direction="row" spacing={2}>
          <Button variant="outlined" onClick={toggleLoginForm}>
            Login
          </Button>
        </Stack>
      </div>

      {isLoginVisible && (
        <div className="loginPopup">
          <div className="loginPopupContent">
            <LoginForm />
            <button className="closeButton" onClick={toggleLoginForm}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-x-square-fill"
                viewBox="0 0 16 16"
              >
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TopBar;
