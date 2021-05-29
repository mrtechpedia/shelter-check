import React from "react";

import "./footer.styles.css";

const Footer = () => (
  <footer className="footer">
    {/* I M FOOTER hehee */}
    <div className="flex-row">
      <div className="flex-col1" style={{ textAlign: "center" }}>
        SHELTER CHECK
      </div>
      <div className="flex-col2">KNOW MORE</div>
      <div className="flex-col3">GET IN TOUCH WITH US</div>
    </div>
    <div className="flex-row hhr">
      <div className="flex-col1">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
        eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem.
      </div>
      <div className="flex-col2">
        <table className="table_1">
          <tr className="tr1">
            <td>About Us</td>
          </tr>
          <tr className="tr1">
            <td>Contact Us</td>
          </tr>
          <tr className="tr1">
            <td>Privacy Policy</td>
          </tr>
          <tr className="tr1">
            <td>Terms and Conditions</td>
          </tr>
        </table>
      </div>
      <div className="flex-col3">
        <table className="table2">
          <tr>
            <td style={{ textAlign: "center" }}>
              <i class="fab fa-twitter iicon"></i>
            </td>
            <td>Twitter</td>
          </tr>

          <tr>
            <td style={{ textAlign: "center" }}>
              <i class="fab fa-facebook-f iicon"></i>
            </td>
            <td>Facebook</td>
          </tr>

          <tr>
            <td style={{ textAlign: "center" }}>
              <i class="fab fa-instagram iicon"></i>
            </td>
            <td>Instagram</td>
          </tr>

          <tr>
            <td style={{ textAlign: "center" }}>
              <i class="fab fa-github iicon"></i>
            </td>
            <td>Github</td>
          </tr>
        </table>
      </div>
    </div>

    <div className="flex-row">
      <div className="flex-col">
        © Copyright 2021 [BRAND NAME], Inc. All rights reserved | Terms of Use |
        Privacy Policy.
      </div>
    </div>
  </footer>
);

export default Footer;
