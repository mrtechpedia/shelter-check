import React, { useState } from "react";

import { Button } from "react-bootstrap";
import { useHistory } from "react-router";
import brandlogo from "../../assets/sc.png";

import "./salon_box.styles.css";

const CleaningBox = ({ CommonSalonProps }) => {
  let history = useHistory();

  const [type, setType] = useState("Male");
  const [quality, setQuality] = useState("Normal");
  const [quantity, setQuantity] = useState(1);
  const [outOfFour, setOutOfFour] = useState(
    CommonSalonProps.outOfFourr[0].des
  );
  const [price, setPrice] = useState(
    CommonSalonProps.outOfFourr[0].desPrice
  );

  function getPrice(event) {
    CommonSalonProps.outOfFourr.forEach((object) => {
      if (object.des === event.target.value) {
        setPrice(object.desPrice);
      }
    });
  }

  function priceFromQuality() {
    const a = document.querySelector(".qualitySelector").selectedIndex;
    const quantityPrice = price * quantity;
    if (a === 0) {
      setPrice(quantityPrice + 0);
      return quantityPrice + 0;
    } else if (a === 1) {
      setPrice(quantityPrice + 300);
      return quantityPrice + 300;
    } else if (a === 2) {
      setPrice(quantityPrice + 500);
      return quantityPrice + 500;
    } else {
      setPrice(quantityPrice + 0);
      return quantityPrice + 0;
    }
  }

  function DoIt() {
    const finalPrice = priceFromQuality();

    history.push({
      pathname: "/checkout",
      state: {
        type: type,
        quality: quality,
        quantity: quantity,
        outOfFour: outOfFour,
        total: finalPrice,
      },
    });
  }

  return (
    <div className="CleaningBox">
      <form>
        <br></br>
        <img src={brandlogo} className="imgggg" alt="" height="150" width="220"></img>
        <h1 className="headinggg">{CommonSalonProps.name}</h1>
        <div className="content">
          <label for="gender">Choose a gender:</label>
          <br></br>
          <select
            name="type"
            id="type"
            className="input"
            onChange={(event) => setType(event.target.value)}
          >
            <option value="Male">
              Male{" "}
            </option>
            <option value="Female">
              Female
            </option>
            <option value="Other">Other</option>
          </select>

          <br></br>
          <br></br>

          <label for="quality">Choose quality you want:</label>
          <br></br>
          <select
            name="quality"
            id="quality"
            className="input qualitySelector"
            onChange={(event) => setQuality(event.target.value)}
          >
            <option value="Normal">Normal</option>
            <option value="Delux">Delux + ₹300</option>
            <option value="Ultra Delux">Ultra Delux + ₹500</option>
          </select>

          <br></br>
          <br></br>

          <label for="quantity">{`${CommonSalonProps.name}s Quantity`}</label>
          <br></br>
          <input
            type="text"
            className="input"
            onChange={(event) => {
              setQuantity(event.target.value);
              console.log(event.target.value);
            }}
            placeholder="1"
          ></input>

          <br></br>
          <br></br>

          <label for="quality">Choose type:</label>
          <br></br>
          <select
            name="type"
            id="type"
            className="input"
            onChange={(event) => setOutOfFour(event.target.value)}
            onClick={getPrice}
          >
            <option>{CommonSalonProps.outOfFourr[0].des}</option>
            <option>{CommonSalonProps.outOfFourr[1].des}</option>
            <option>{CommonSalonProps.outOfFourr[2].des}</option>
            <option>{CommonSalonProps.outOfFourr[3].des}</option>
          </select>

          <br></br>
          <br></br>
        </div>
        <Button variant="primary" className="button" onClick={DoIt}>
          Book Now
        </Button>{" "}
      </form>
    </div>
  );
};

export default CleaningBox;
