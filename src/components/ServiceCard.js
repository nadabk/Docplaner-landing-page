import React from "react";

const ServiceCard = ({
  card: { background, category, title, isVisible, image }
}) => {
  return (
    <div className="service-card" style={{ backgroundColor: background }}>
      <p className="card-category">{category}</p>
      <h2 className="service-title">{title}</h2>
      <div>
        {isVisible && (
          <input
            className="service-button"
            type="button"
            value="CHOOSE COUNTRY"
            style={{ position: "absolute" }}
          />
        )}
      </div>

      <img className="card-image" src={image} width="350px" />
    </div>
  );
};

export default ServiceCard;
