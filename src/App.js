import "./App.css";
import React, { useState, useRef } from "react";
import CHC from "./CHRR.png";
import LG1 from "./LGG1.png";
import SIN from "./SIN";
import SUP from "./SUP";

const App = () => {
  const [showA, setShowA] = useState(true);

  const CB = () => {
    setShowA(false);
  };

  const CA = () => {
    setShowA(true);
  };

  return (
    <div className="rec1 row">
      <div className="col coll">
        {showA ? <SIN shB={CB} /> : <SUP shA={CA} />}
      </div>
    </div>
  );
};

export default App;
