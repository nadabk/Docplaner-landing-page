import React from "react";

const FeatureCard = ({ feature }) => {
  return (
    <div className="feature-card">
      <img src={feature.icone} width="30px" />
      <h3 className="feature-name"> {feature.title} </h3>
      <p className="feature-description"> {feature.description} </p>
    </div>
  );
};

export default FeatureCard;
