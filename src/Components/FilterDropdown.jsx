import React from "react";
import cross from "../Images/cross.svg"

const FilterDropdown = ({ closePop }) => {
  return (
    <>
      <div className="modal-wrapper" onClick={closePop}></div>
      <div style={{ display: "flex", justifyContent: "space-between",flexDirection:"column" }} className="filter-container">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span><b>Filters</b></span>
          <img onClick={closePop} src={cross} alt="close"/>
        </div>
        <div>
          <p>LTP range</p>
          <input style={{"marginRight":"0.5vw"}} value="Minimum LTP" className="filter-input" /> - <input style={{"float":"right"}} value="Maximum LTP" className="filter-input" />
        </div>
        <div>
        <span>LTP change % by</span><input value="Today Open" style={{"float":"right"}} className="filter-input" />
        </div>
        <div>
        <span>Specific strike</span><input style={{"float":"right"}} className="filter-input" />
        </div>
        <div>
          <span>Display</span><div style={{"float":"right","marginRight":"1vw"}}><input style={{"marginRight":"0.25vw"}} type="checkbox" checked /><span>Puts</span></div><div style={{"float":"right"}}><input style={{"marginRight":"0.25vw"}} type="checkbox" checked /><span style={{"float":"right","marginRight":"1vw"}}>Calls</span></div>
        </div>
        <hr></hr>
        <div>
          <div id="applyFilter" style={{"float":"right"}} onClick={closePop}>Apply</div>
          <div id="resetFilter" style={{"float":"right"}} onClick={closePop}>Reset</div>
        </div>
        {/* <button className="model-btn" onClick={closePop}>
          Close
        </button> */}
      </div>
    </>
  );
};

export default FilterDropdown;