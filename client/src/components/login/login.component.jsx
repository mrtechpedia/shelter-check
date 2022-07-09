import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { loginUser } from "../../redux/actions";
import { Form, Button } from "react-bootstrap";
import { IconButton, InputAdornment } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import SignupLoginSide from "../signup_login_side/signup_login_side.component";
import "./login.styles.css";

// import google from "../../assets/search.png";

function LoginForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const authObject = useSelector((state) => state.auth);

  useEffect(() => {
    if (authObject.msg === "Invalid Credentials") alert(authObject.msg);
    else if (authObject.user) {
      history.push("/landing");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authObject]);

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  function handleChange(event) {
    const { name, value } = event.target;
    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const existingUser = {
      email: input.email,
      password: input.password,
    };
    dispatch(loginUser(existingUser));
  }

  return (
    <div className="login">
      <Form className="login_form" onSubmit={handleSubmit}>
        <div className="login_form_heading">
          <h2>
            <b>Login Account</b>
          </h2>
          {/* <p>or use your Google account instead</p> */}
        </div>
        <br />
        {/* <a href="/auth/google">
          <img
            src={google}
            className="signup_form_google"
            height="30"
            width="30"
            alt="Google Logo"
            content="default-src 'self' style-src 'self' 'unsafe-inline';"
          />
        </a> */}
        <Form.Group
          controlId="formBasicEmail"
          className="login_form_group hvr-underline-reveal"
        >
          <MailOutlineIcon className="login_form_icons" />
          <Form.Control
            type="email"
            placeholder="Enter email"
            className="login_form_control"
            name="email"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group
          controlId="formBasicPassword"
          className="login_form_group hvr-underline-reveal"
        >
          <LockOpenIcon className="login_form_icons" />
          <Form.Control
            type={values.showPassword ? "text" : "password"}
            placeholder="Enter password"
            className="signup_form_control"
            name="password"
            onChange={handleChange}
            required
            value={input.password}
          />
          <InputAdornment position="end">
            <IconButton onClick={handleClickShowPassword}>
              {values.showPassword ? (
                <Visibility className="signup_form_icons" />
              ) : (
                <VisibilityOff className="signup_form_icons" />
              )}
            </IconButton>
          </InputAdornment>
        </Form.Group>
        <p className="login_form_forgot_password">Forgot your password?</p>
        <Button
          variant="primary"
          type="submit"
          className="login_button btn-grad"
        >
          LogIn
        </Button>
      </Form>
      <SignupLoginSide
        heading={"Hello, Friend!"}
        subtext={"Enter your personal details and start journey with us"}
        buttontext={"SIGNUP"}
      />
    </div>
  );
}

export default LoginForm;
