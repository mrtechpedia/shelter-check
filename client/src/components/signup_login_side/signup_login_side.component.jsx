import React from "react";
import "./signup_login_side.styles.css";
import { useHistory } from "react-router-dom";

function SignupLoginSide({ heading, subtext, buttontext }) {
  const history = useHistory();

  return (
    <div className="signup_login_side">
      <h3>
        <b>{heading}</b>
      </h3>
      <p>{subtext}</p>
      <button
        className="signup_login_side_button"
        onClick={() =>
          buttontext === "SIGNUP"
            ? history.push("/signup")
            : history.push("/login")
        }
      >
        {buttontext}
      </button>
    </div>
  );
}

export default SignupLoginSide;
