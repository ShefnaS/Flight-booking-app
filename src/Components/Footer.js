import React from "react";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { AiOutlineCopyright } from "react-icons/ai";
import '../Style/Footer.css'
import {IoLogoGooglePlaystore} from 'react-icons/io5'
import {AiFillApple} from 'react-icons/ai'

function Footer() {
  return (
    <div>
      <footer>
        <div className="container-fluid p-0">
        <h2 className="mb-3 px-3" style={{textAlign:'left',color:'#605DEC'}}>Tripma</h2>
          <div className="row" id='footer-content'>
            <div className="col-lg-3 col-md-3 col-12">
              <ul>
                <h6>About</h6>
                <li className="list-unstyled">
                  <a href="#" className="text-decoration-none">
                    About Tripma
                  </a>
                </li>
                <li className="list-unstyled">
                  <a href="#" className="text-decoration-none">
                    How it works
                  </a>
                </li>
                <li className="list-unstyled">
                  <a href="#" className="text-decoration-none">
                    Career
                  </a>
                </li>
                <li className="list-unstyled">
                  <a href="#" className="text-decoration-none">
                    Press
                  </a>
                </li>
                <li className="list-unstyled">
                  <a href="#" className="text-decoration-none">
                    Blog
                  </a>
                </li>
                <li className="list-unstyled">
                  <a href="#" className="text-decoration-none">
                    Forum
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-3 col-12">
              <ul>
                <h6>Partner with us</h6>
                <li className="list-unstyled">
                  <a href="#" className="text-decoration-none">
                    Partnership programs
                  </a>
                </li>
                <li className="list-unstyled">
                  <a href="#" className="text-decoration-none">
                    Affiliate programs
                  </a>
                </li>
                <li className="list-unstyled">
                  <a href="#" className="text-decoration-none">
                    Connectivity partners
                  </a>
                </li>
                <li className="list-unstyled">
                  <a href="#" className="text-decoration-none">
                    Promotions and events
                  </a>
                </li>
                <li className="list-unstyled">
                  <a href="#" className="text-decoration-none">
                    Integrations
                  </a>
                </li>
                <li className="list-unstyled">
                  <a href="#" className="text-decoration-none">
                    Community
                  </a>
                </li>
                <li className="list-unstyled">
                  <a href="#" className="text-decoration-none">
                    Loyalty programs
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-3 col-12">
              <ul>
                <h6>Support</h6>
                <li className="list-unstyled">
                  <a href="#" className="text-decoration-none">
                    Help center
                  </a>
                </li>
                <li className="list-unstyled">
                  <a href="#" className="text-decoration-none">
                    Contact us
                  </a>
                </li>
                <li className="list-unstyled">
                  <a href="#" className="text-decoration-none">
                    Privacy policy
                  </a>
                </li>
                <li className="list-unstyled">
                  <a href="#" className="text-decoration-none">
                    Terms of service
                  </a>
                </li>
                <li className="list-unstyled">
                  <a href="#" className="text-decoration-none">
                    Trust and safety
                  </a>
                </li>
                <li className="list-unstyled">
                  <a href="#" className="text-decoration-none">
                    Accessibility
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-3 col-12">
              <ul>
                <h6>Get the app</h6>
                <li className="list-unstyled">
                  <a href="#" className="text-decoration-none">
                    Tripma for android{" "}
                  </a>
                </li>
                <li className="list-unstyled">
                  <a href="#" className="text-decoration-none">
                    Tripma for IOS
                  </a>
                </li>
                <li className="list-unstyled">
                  <a href="#" className="text-decoration-none">
                    Mobile site
                  </a>
                </li>
                <button className="btn">
                  <small>Download on the</small>
                  <br/>
                  <span><AiFillApple style={{color:'white'}}/>&nbsp;App Store</span>
                  
                </button>
                <br />
                <button className="btn">
                  <small>Get it on</small>
                  <br />
                  <span><IoLogoGooglePlaystore style={{color:'white'}}/>&nbsp;Google Play</span>
                </button>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className="container d-flex flex-row flex-wrap copy">
          <div className="text-secondary">
            <BsTwitter />
            &nbsp;
            <BsInstagram />
            &nbsp;
            <BsFacebook />
          </div>
          <div>
            <AiOutlineCopyright /> 2020 Tripma incorporated
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
