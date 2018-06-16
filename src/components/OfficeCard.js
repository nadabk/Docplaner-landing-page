import React from "react";

const OfficeCard = ({ office: { image: img, officeName, link } }) => {
  return (
    <a href={link} style={{ textDecoration: "none" }}>
      <div className="office-card">
        <img src={img} />
        <div className="office-description">
          <h4 className="office-name">{officeName}</h4>
          <input className="office-btn" type="button" value="SEE OPENINGS" />
        </div>
      </div>
    </a>
  );
};

export default OfficeCard;
