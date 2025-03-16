import React from "react";
import TopBar from "../Compounds/TopBar/TopBar";
import IteamDisplay from "../Compounds/iteamDisplay/IteamDisplay";
import FirmCollection from "../Compounds/FirmCollection/FirmCollection";
import Chains from "../Compounds/chains/chains";
import Cities from "../Compounds/Cities/Cities";
import Fotter from "../Compounds/Fotter/Fotter";

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
