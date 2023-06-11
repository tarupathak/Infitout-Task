import React from "react";
import "./Components.css";
import logo from "../Images/logo.svg";
import dropdown from "../Images/dropdown.svg";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="nav-items">
          <div>Dashboard</div>
          <div id="col">Option Chain</div>
          <div>Strategy builder</div>
          <div>Positions</div>
          <div>Order Book</div>
        </div>
        <div className="nav-items">
          <div>
            <span className="col-head">NIFTY</span>
            <span>
              <span className="per-col">0.35%  </span>
              <span>18,245.32</span>
            </span>
          </div>
          <div>
            <span className="col-head">BANKNIFTY</span>
            <span>
              <span className="per-col">0.7%  </span>
              <span>39,156.1</span>
            </span>
          </div>
          <div>
            <span className="col-head">INDIA VIX</span>
            <span>
              <span className="per-col2">-10.9%  </span>
              <span>12.12</span>
            </span>
          </div>
        </div>
        <div>
          <div className="nav-item">
            Profile <img src={dropdown} alt="dropdown-arrow" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
