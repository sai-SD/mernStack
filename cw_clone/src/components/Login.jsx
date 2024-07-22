import React from "react";
import "./Login.css";
import orderHistory from "../images/order_history.svg";
import addressBook from "../images/address_book.svg";
import personalDetails from "../images/personal_details.svg";

const Login = () => {
    return (
        <div className="main-content">
            <div className="main-header">My account</div>
            <div class="login-container">
                <div class="login-box l-box">
                    <span>Email address</span>
                    <input className="m-size ip" type="text" />
                    <span>Password</span>
                    <input className="m-size ip" type="text" />
                    <h6>Forgotten your password</h6>
                    <button className="basicButton mediumButton">log in</button>
                </div>

                <div class="login-box r-box">
                    <h3>New customers</h3>
                    <span>Set up an account with us and you will be able to:</span>
                    <div className="flex-combo">
                        <span className="svg"><img src={orderHistory} alt="" /></span>
                        <span>Check order status</span>
                    </div>
                    <div className="flex-combo">
                        <span className="svg">
                            <img src={addressBook} alt="" />
                        </span>
                        <span>Save multiple addresses to your address book</span>
                    </div>
                    <div className="flex-combo">
                        <span className="svg">
                            <img src={personalDetails} alt="" />
                        </span>
                        <span>Set your size and monogramming preferences</span>
                    </div>
                    <button className="basicButton smallButton">
                        create an account now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
