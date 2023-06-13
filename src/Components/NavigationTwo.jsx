import React, { useState } from "react";
import arrow from "../Images/arrows.svg";
import filter from "../Images/filter.svg";
import PopUpBasket from "./PopUpBasket";
import FilterDropdown from "./FilterDropdown";

const NavigationTwo = () => {
  const [show, setShow] = useState(false);
  const closeModal = () => setShow(false);
  const [pop, setPop] = useState(false);
  const closePop = () => setPop(false);

  return (
    <div className="main-div">
      <div className="nav-items2">
        <input id="nav-input" value="NIFTY"></input>
        <div className="nav-input-label">scrip</div>
        <input id="nav-input" value="18 MAY 2023"></input>
        <div className="nav-input-label">EXP</div>
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
          <span className="col-head1">
            Support 1 <img src={arrow} alt="arrow" />
          </span>
          <span>18,100</span>
        </div>
        <div>
          <span className="col-head1">
            Resistance 1 <img src={arrow} alt="arrow" />
          </span>
          <span>18,500</span>
        </div>
      </div>
      <div style={{cursor:"pointer"}}>
        <div onClick={() => setPop(true)}>
          <img src={filter} alt="filter" /> Filters
        </div>
        {pop && <FilterDropdown closePop={closePop} />}
      </div>

      <div>
        <button className="btn" onClick={() => setShow(true)}>
          Basket
        </button>
        {show && <PopUpBasket closeModal={closeModal} />}
      </div>
    </div>
  );
};

export default NavigationTwo;
