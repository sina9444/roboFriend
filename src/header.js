import React from "react";
import './header.css';


const Header = (props) => {
  return (
  <div className="container-header">
        <div className="header">
          <h1>Robot Firend</h1>
            <input type="search" placeholder="Search Robo" onChange={props.searchChenge} />
        </div>
  </div>
  );

};

export default Header;
