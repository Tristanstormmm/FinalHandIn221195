import React from "react";
import Facebook from '../Icons/Facebook.png';
import Twitter from '../Icons/Twitter.png';
import Instagram from '../Icons/Instagram.png';
import 'bootstrap/dist/css/bootstrap.css';

function Footer() {

    return (
        <footer>
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-5">
                    <div className="footer-left">
                        <a href="#"><img src={Facebook} alt="Facebook" /></a>
                        <a href="#"><img src={Twitter} alt="Twitter" /></a>
                        <a href="#"><img src={Instagram} alt="Instagram" /></a>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="footer-right">
                        <p>&copy; 2023 Crypto Compare</p>
                    </div>
                </div>
                <div className="col-md-1"></div>
            </div>
        </footer>
    )
}

export default Footer;