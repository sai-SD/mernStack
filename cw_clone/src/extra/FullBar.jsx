import React from "react";
import './footer.css'//style
const FullBar = () => {
  return (
    <>
      <div className="full-bar">
        <div className="fullBarContainer">
          <span className="fullBarText">We will keep you posted on new products and great offers</span>
          <div className="fullBarInputBox">
            <input type="email" placeholder="  Email Address"/>
            <button className="gThan">&gt;</button>
          </div>
        </div>
      </div>
      <br />
    </>
  );
};

export default FullBar;
