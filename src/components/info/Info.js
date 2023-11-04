import React from "react";
import profile from "../../assets/profile.jpg";
import mail from "../../assets/Mail.svg";
import linkedin from "../../assets/linkedin.svg";
import "./info.css";

const Info = () => {
  return (
    <section>
      <div className="top_section">
        <img src={profile} alt="profile" />
        <h1>Voo Keat Vun</h1>
        <h3>Frontend Developer</h3>
        <p>jevon.website</p>
      </div>
      <div className="bottom_section">
        <button type="button" className="email__button">
          <img src={mail} alt="mail" />
          Email
        </button>
        <button type="button" className="linkedin__button">
          <img src={linkedin} alt="linkedin" />
          LinkedIn
        </button>
      </div>
    </section>
  );
};

export default Info;
