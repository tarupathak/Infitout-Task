import React from "react";
import arrow from '../Images/arrows.svg'
import filter from '../Images/filter.svg'

const NavigationTwo = () => {
  return (
    <div id="main-div">
      <div className="nav-items2">
        <div>
          <span className="col-head1">Spot</span>
          <span>
            <span>18,245.3 </span>
            <span className="per-col">0.35% </span>
          </span>
        </div>
        <div>
          <span className="col-head1">Fut</span>
          <span>
            <span>18,245.3 </span>
            <span className="per-col">0.35% </span>
          </span>
        </div>
      </div>
      <div className="nav-items3">
        <div>
          <span className="col-head1">Max Pain</span>
          <span>18,200</span>
        </div>
        <div>
          <span className="col-head1">PCR</span>
          <span>0.92</span>
        </div>
        <div>
          <span className="col-head1">Support 1 <img src={arrow} alt="arrow"/></span>
          <span>18,100</span>
        </div>
        <div>
          <span className="col-head1">Resistance 1 <img src={arrow} alt="arrow" /></span>
          <span>18,500</span>
        </div>
      </div>
      <div><img src={filter} alt="filter" />  Filters</div>
      <button className="btn">Basket</button>
    </div>
  );
};

export default NavigationTwo;
