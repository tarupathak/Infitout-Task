import React from "react";
import plus from "../Images/plus.svg";
import deleteIcon from "../Images/deleteIcon.svg";
import plusBlack from "../Images/plusBlack.svg";
import { BasketItems } from "./BasketItems";

const PopUpBasket = ({ closeModal }) => {
  return (
    <>
      <div className="modal-wrapper" onClick={closeModal}></div>
      <div className="modal-container">
        <div className="basket-nav">
          <div>
            <span>Max Profit</span>
            <span>24,000/-</span>
          </div>
          <div>
            <span>Max Loss</span>
            <span>Unlimited</span>
          </div>
          <div>
            <span>Risk Reward</span>
            <span>NA</span>
          </div>
          <div>
            <span>Probability</span>
            <span>32%</span>
          </div>
          <div>
            <span>Breakeven</span>
            <span> > 38124.2</span>
          </div>
        </div>
        <table>
          <tr id="tab-head">
            <th>Instrument</th>
            <th>B/S</th>
            <th>Type</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Trigger</th>
          </tr>
          {BasketItems.map((item) => {
            return (
              <tr className="grey-col">
                <td>{item.instrument}</td>
                <td className="b-col">{item.bs}</td>
                <td className="blue-col">{item.type}</td>
                <td>
                  <input />
                </td>
                <td>
                  <input />
                </td>
                <td>
                  <input />
                </td>
                <td className="blue">
                  <img src={plus} alt="plus" />
                  SL
                </td>
                <td className="blue">
                  <img src={plus} alt="plus" />
                  Tgt
                </td>
                <td>
                  <img src={deleteIcon} alt="delete" />
                </td>
              </tr>
            );
          })}
        </table>

        <div id="footer">
          <div>
            <div>Margin required: ₹ 2,43,630.3</div>
            <div>Available funds: ₹ 12,00,000,00</div>
          </div>
          <button className="model-btn3">
            <img src={plusBlack} alt="plus" />
            Auto Hedge
          </button>
          <button className="model-btn1" onClick={closeModal}>
            Close Basket
          </button>
          <button className="model-btn2">Place Order</button>
        </div>
      </div>
    </>
  );
};

export default PopUpBasket;
