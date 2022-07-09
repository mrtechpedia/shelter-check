import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions";
import "./landing_page.styles.css";

import sclogo from "../../assets/sc.png";

function LandingPage() {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logout());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="LandingPage">
      <div className="landing_box">
        <img src={sclogo} width="300px" alt="" className="logoimg"></img>
        <p className="para1">BEST SERVICE.RIGHT TIME.RIGHT PEOPLE</p>
        <p className="para2">
          Satisfied customers are our best ads.<br></br> So come join us.
        </p>

        {/* <Button
          onClick={() => {
            history.push("/signup");
          }}
          className="button1 btn-grad-landing"
        >
          Signup
        </Button> */}
        <Button
          onClick={() => {
            history.push("/login");
          }}
          className="button2 btn-grad-landing"
        >
          Signup/Login
        </Button>
        <br></br>
        <Button
          onClick={() => {
            history.push("/professional");
          }}
          className="button2 btn-grad-landing"
        >
          Signup as a professional
        </Button>
      </div>
    </div>
  );
}

export default LandingPage;
