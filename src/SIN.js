import "./App.css";
import React, { useState, useRef } from "react";
import CHC from "./CHRR.png";
import LG1 from "./LGG1.png";

const SIN = ({ shB }) => {
  const USNAME1 = useRef("");
  const PSWD1 = useRef("");
  const UN1 = () => {
    const U1 = USNAME1.current.value;
    const PD = PSWD1.current.value;
  };

  return (
    <div className="col rec2">
      <img className="LG1" src={LG1} />
      <p className="SI CNT">SIGN IN</p>
      <p className="SIA CNT">Sign in to your account</p>
      <form method="POST" action="/users/signin">
        <label className="CNT" for="username">
          {" "}
          username or email{" "}
        </label>
        <input
          id="username"
          name="username"
          className="AA"
          ref={USNAME1}
          type="text email"
          placeholder=" username or email"
          required={true}
        />

        <label className="CNT" for="password">
          {" "}
          password{" "}
        </label>
        <input
          id="password"
          name="password"
          className="AA"
          ref={PSWD1}
          type="text"
          placeholder=" password"
          required={true}
        />
        <br />
        <button type="submit" className="LGN" onClick={UN1}>
          {" "}
          LOGIN{" "}
        </button>
      </form>
      <p className="FP CNT"> forgot password </p>

      <p className="CNT">You didn't have account ? </p>
      <p className="CR " onClick={shB}>
        {" "}
        Create account{" "}
      </p>
    </div>
  );
};

export default SIN;
