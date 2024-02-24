import "./App.css";
import React, { useState } from "react";
import CHC from "./CHRR.png";
let X;
export function App(X) {
  X = true;
  console.log(X);
  return (
    <div className="rec1 row">
      <div className="col ">
        <img className="img1" src={CHC} />
      </div>
      <div className="col">{{ X } && <SIN />}</div>
    </div>
  );
}

export function SIN(X) {
  const A1 = (X) => {
    X = false;
    console.log(X);
  };
  return (
    <div className="col rec2">
      <p>logo here</p>
      <p className="SI CNT">SIGN IN</p>
      <p className="SIA CNT">sign in to your account</p>
      <p> username </p>
      <input className="AA" type="text" placeholder=" username" />

      <p> password </p>
      <input className="AA" type="text" placeholder=" password" />

      <p className="FP"> forgot password </p>

      <button className="LGN"> LOGIN </button>
      <p>
        you didn't have account ?{" "}
        <p className="CR CNT" onClick={A1}>
          {" "}
          create account{" "}
        </p>
      </p>
    </div>
  );
}

export function SUP() {
  return (
    <div className="col rec2">
      <p>logo here</p>
      <p className="SI CNT">SIGN UP</p>
      <p className="SIA CNT">create a new account</p>
      <p> username </p>
      <input className="AA" type="text" placeholder=" username" />

      <p> password </p>
      <input className="AA" type="text" placeholder=" password" />

      <button className="LGN"> continue </button>
      <p>
        already have account ? <p className="CR CNT"> sign in </p>
      </p>
    </div>
  );
}

export default App;
