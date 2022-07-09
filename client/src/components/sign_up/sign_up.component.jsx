import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import validator from "validator";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../../redux/actions";
import { Form, Button } from "react-bootstrap";
import { IconButton, InputAdornment } from "@material-ui/core";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PersonIcon from "@material-ui/icons/Person";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import PhoneIcon from "@material-ui/icons/Phone";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import SignupLoginSide from "../signup_login_side/signup_login_side.component";

// import google from "../../assets/search.png";
import "./sign_up.styles.css";

function SignupForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const authObject = useSelector((state) => state.auth);

  useEffect(() => {
    if (authObject.msg === "You are already registered please login")
      alert(authObject.msg);
    else if (authObject.user) {
      history.push("/landing");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authObject]);

  // const signedupUser = useSelector(selectUser);
  const [errorMessage, setErrorMessage] = useState("");

  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
    mobile: "",
    city: "",
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
    const newUser = {
      email: input.email,
      username: input.name,
      password: input.password,
      mobile: input.mobile,
      city: input.city,
    };
    dispatch(signupUser(newUser));
  }

  function validate(event) {
    // console.log(document.querySelector(".signup_form_password"));
    const password = event.target.value;
    if (
      validator.isStrongPassword(password, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setErrorMessage(
        "Password must have a minimum length of 8 characters, a lower case, a number, a symbol and an Upper case letter as well"
      );
    }
  }

  // ""
  return (
    <div className="signup">
      <SignupLoginSide
        heading={"Welcome Back!"}
        subtext={
          "To keep connected with us please login with your personal info"
        }
        buttontext={"LOGIN"}
      />
      <Form className="signup_form" onSubmit={handleSubmit}>
        <div className="signup_form_heading">
          <h2>
            <b>Create Account</b>
          </h2>
          {/* <p>or use your Google account instead</p> */}
        </div>
        <br />
        {/* <a href="/auth/google" className="signup_form_google">
          <img
            src={google}
            height="30"
            width="30"
            alt="Google Logo"
            content="default-src 'self' style-src 'self' 'unsafe-inline';"
          />
        </a> */}
        <Form.Group
          controlId="formBasicName"
          className="signup_form_group hvr-underline-reveal"
        >
          <PersonIcon className="signup_form_icons" />
          <Form.Control
            type="name"
            name="name"
            placeholder="Enter name"
            className="signup_form_control"
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group
          controlId="formBasicEmail"
          className="signup_form_group hvr-underline-reveal"
        >
          <MailOutlineIcon className="signup_form_icons" />
          <Form.Control
            type="email"
            placeholder="Enter email"
            className="signup_form_control"
            onChange={handleChange}
            name="email"
            required
          />
        </Form.Group>

        <Form.Group
          controlId="formBasicPassword"
          className="signup_form_group hvr-underline-reveal"
        >
          {/* <Form.Label className="signup_form_label">Password</Form.Label> */}
          <LockOpenIcon className="signup_form_icons" />
          <Form.Control
            type={values.showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter password"
            className="signup_form_control signup_form_password"
            onChange={handleChange}
            required
            value={input.password}
            onBlur={validate}
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
        <Form.Group
          controlId="formGridMobile"
          className="signup_form_group hvr-underline-reveal"
        >
          {/* <Form.Label className="signup_form_label">Mobile</Form.Label> */}
          <PhoneIcon className="signup_form_icons" />
          <Form.Control
            type="tel"
            name="mobile"
            placeholder="Enter mobile"
            className="signup_form_control"
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group
          controlId="formGridCity"
          className="signup_form_group hvr-underline-reveal"
        >
          {/* <Form.Label className="signup_form_label">City</Form.Label> */}
          <LocationCityIcon className="signup_form_icons" />
          <Form.Control
            type="text"
            name="city"
            placeholder="Enter city"
            className="signup_form_control"
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          className="signup_button btn-grad"
        >
          SignUp
        </Button>
        <span style={{ color: "red" }}>{errorMessage}</span>
      </Form>
    </div>
  );
}

export default SignupForm;
