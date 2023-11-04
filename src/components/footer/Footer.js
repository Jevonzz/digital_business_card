import React from "react";
import facebook from "../../assets/Facebook Icon.svg";
import twitter from "../../assets/Twitter Icon.svg";
import instagram from "../../assets/Instagram Icon.png";
import github from "../../assets/GitHub Icon.svg";
import "./footer.css";

function Footer() {
  return (
    <section>
      <div className="footer">
        <img src={twitter} alt="twitter" />
        <img src={facebook} alt="facebook" />
        <img src={instagram} alt="instagram" />
        <img src={github} alt="github" />
      </div>
    </section>
  );
}

export default Footer;
