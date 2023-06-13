import React from "react";
import "./Components.css";
import { TableItems1 } from "./TableItems";
import { TableItems2 } from "./TableItems";
import { TableItems3 } from "./TableItems";

const TableContent = () => {
  return (
    <div id="table-flex">
      <table>
        <tr id="row-1">
          <th>OI Building</th>
          <th>IV</th>
          <th>OI</th>
          <th>Volume</th>
          <th>Chng%</th>
          <th>LTP</th>
          <th />
          <th />
        </tr>
        {TableItems3.map((item) => {
          return (
            <tr className="row-elements">
              <td>{item.oiBuild}</td>
              <td>{item.iv}</td>
              <td>{item.oi}</td>
              <td>{item.volume}</td>
              <td id="chng1">{item.chng}</td>
              <td>{item.ltp}</td>
              <td className="box">B</td>
              <td className="box">S</td>
            </tr>
          );
        })}
      </table>
      <table>
        <tr id="row-2">
          <th style={{ textAlign: "center",paddingLeft: "8vh"}}>Strike</th>
        </tr>
        {TableItems1.map((item) => {
          return (
            <tr style={{ backgroundColor: "#efe8fb", textAlign: "center",display:"flex",padding:"0.08vw 0",border: "1px solid #D5BCFE", paddingLeft: "8vh" }}>
              <td>{item.strike}</td>
            </tr>
          );
        })}
      </table>
      <table>
        <tr id="row-3">
          <th />
          <th />
          <th>LTP</th>
          <th >Chng%</th>
          <th>Volume</th>
          <th>OI</th>
          <th>IV</th>
          <th>OI Building</th>
        </tr>
        {TableItems2.map((item) => {
          return (
            <tr className="row-elements3">
              <td className="box">B</td>
              <td className="box">S</td>
              <td>{item.ltp}</td>
              <td id="chng2">{item.chng}</td>
              <td>{item.volume}</td>
              <td>{item.oi}</td>
              <td>{item.iv}</td>
              <td>{item.oiBuild}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default TableContent;
