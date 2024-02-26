import "./App.css";
import React, { useState, useRef } from "react";
import CHC from "./CHRR.png";
import LG1 from "./LGG1.png";

const SUP = ({ shA }) => {
  const USNAME2 = useRef("");
  const PSWD2 = useRef("");
  const EMAIL2 = useRef("");

  const UN2 = () => {
    const U2 = USNAME2.current.value;
    const PD2 = PSWD2.current.value;

    console.log(U2);
    console.log(PD2);
  };
  return (
    <div className="col rec2">
      <img className="LG1" src={LG1} />
      <p className="SI CNT">SIGN UP</p>
      <p className="SIA CNT">Create a new account</p>
      <form method="POST" action="/users/register">
        <label className="CNT" for="username">
          {" "}
          Username{" "}
        </label>
        <input
          id="username"
          name="username"
          className="AA"
          ref={USNAME2}
          type="text"
          placeholder=" username"
          required
        />
        <label className="CNT" for="email">
          {" "}
          Email{" "}
        </label>
        <input
          id="email"
          name="email"
          className="AA"
          ref={EMAIL2}
          type="email"
          placeholder=" email"
          required
        />

        <label className="CNT" for="password">
          {" "}
          Password{" "}
        </label>
        <input
          id="password"
          name="password"
          className="AA"
          ref={PSWD2}
          type="password"
          placeholder=" password"
          required
        />
        <br />
        <button type="submit" className="LGN" onClick={UN2}>
          {" "}
          REGISTER{" "}
        </button>
      </form>

      <p className="CNT">Already have account ? </p>
      <p className="CR " onClick={shA}>
        {" "}
        Sign in{" "}
      </p>
    </div>
  );
};
export default SUP;
