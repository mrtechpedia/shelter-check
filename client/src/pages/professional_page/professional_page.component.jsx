import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { signupProfessional } from "../../redux/actions";
import { Form, Button } from "react-bootstrap";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import "./professional_page.styles.css";

import pro from "../../assets/pro.jpg";

const ProfessionalPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const authObject = useSelector((state) => state.auth);

  useEffect(() => {
    if (
      authObject.msg ===
      "You have already submitted an application. Please wait our team will contact you soon!!"
    )
      alert(authObject.msg);
    else if (authObject.user) {
      alert(
        "Congratulations!! You are registered as a professional. Our team will contact you soon....."
      );
      history.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authObject]);

  const [input, setInput] = useState({
    professionalName: "",
    email: "",
    mobile: "",
    occupation: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  function handleMobile(value) {
    setInput((prevInput) => {
      return {
        ...prevInput,
        mobile: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newProfessional = {
      professionalName: input.professionalName,
      email: input.email,
      mobile: input.mobile.substring(2, 12),
      occupation: input.occupation,
    };
    newProfessional.mobile.length === 10
      ? dispatch(signupProfessional(newProfessional))
      : console.log("Enter correct phone number");
  }

  return (
    <div className="professional_page">
      <div>
        <Form
          onSubmit={handleSubmit}
          className="professional_form"
          autoComplete="off"
        >
          <div className="professional_form_left">
            <img src={pro} alt="" className="proImg"></img>
          </div>
          <div className="professional_form_right">
            <h5 className="headingpro">Register as a Professional.</h5>

            <Form.Control
              type="text"
              required={true}
              placeholder="Enter name"
              className="professional_form_control"
              onChange={handleChange}
              name="professionalName"
            />

            <PhoneInput
              controlId="formGridMobile"
              inputProps={{
                name: "mobile",
              }}
              class="professional_form_control professional_mobile"
              country={"in"}
              countryCodeEditable={false}
              onChange={handleMobile}
              placeholder="Enter your mobile number"
              disableDropdown={true}
            />

            <Form.Control
              type="email"
              required={true}
              placeholder="Enter email"
              className="professional_form_control"
              onChange={handleChange}
              name="email"
            />

            <Form.Control
              type="text"
              name="occupation"
              required={true}
              placeholder="What do you do?"
              className="professional_form_control"
              onChange={handleChange}
            />

            <Button type="submit" className="professional_form_button">
              Register
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ProfessionalPage;
