import React from "react";
import TopBar from "../Compounds/TopBar/TopBar.jsx";
import IteamDisplay from "../Compounds/iteamDisplay/IteamDisplay.jsx";
import FirmCollection from "../Compounds/FirmCollection/FirmCollection.jsx";
import Chains from "../Compounds/chains/chains.jsx";
import Cities from "../Compounds/Cities/Cities.jsx";
import Fotter from "../Compounds/Fotter/Fotter.jsx";

function LandingPage() {
  return (
    <div>
      <TopBar />
      <div className="landingpages">
        <IteamDisplay />
        <Chains />
        <FirmCollection />
        <Cities />
      </div>
      <Fotter />
    </div>
  );
}

export default LandingPage;
