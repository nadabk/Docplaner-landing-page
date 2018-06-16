import React from "react";

const NavItem = props => {
  return (
    <div className="nav-item">
      <a
        href={props.item.link}
        style={{
          color: props.item.isActive ? "#00b39b" : "gray",
          textDecoration: "none"
        }}
      >
        {props.item.title}
      </a>
    </div>
  );
};

const NavBar = props => {
  return (
    <div className="nav-bar">
      {props.list.map((el, index) => <NavItem key={index} item={el} />)}
    </div>
  );
};

export default NavBar;
