import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { GoPrimitiveDot } from "react-icons/go";
import "../Style/Flight.css";

function Flight() {
  return (
    <div className="container-fluid flight">
      <img src="images/tripma1.png" width="150px" alt="" />

      <div className="row">
        <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
          <div className="row r1">
            <div className="col-lg-5 col-md-5 col-sm-12 c1">
              <div className="row r2">
                <div className="col-5">
                  <h4>SFO</h4>
                  <span>California,US</span>
                </div>
                <div className="col-2">
                  <h4>
                    <AiOutlineArrowRight />
                  </h4>
                </div>
                <div className="col-5">
                  <h4>NRT</h4>
                  <span>Tokyo,Japan</span>
                </div>
              </div>
            </div>
            <div className="col c2">
              <h6>Feb 25 | 7 AM</h6>
              <span>Departing</span>
            </div>
            <div className="col c3">
              <h6>Mar 21 | 12:15 PM</h6>
              <span>Arriving</span>
            </div>
          </div>
          <section className="section1">
            <div className="row mt-3">
              <div className="col-lg-6 c1">
                <img
                  src="images/seat1.png"
                  width="300px"
                  height="180px"
                  alt="seat"
                />
                <h4 className="mt-3">
                  Economy <button id="selected">Selected</button>
                </h4>

                <p className="content">
                  Rest and recharge during your flight with extended leg room,
                  personalized service, and a multi-course meal service
                </p>
                <p>
                  <span>
                    <GoPrimitiveDot style={{ color: "#605DEC" }} />
                  </span>
                  Builtin entertainment system
                </p>
                <p>
                  <span>
                    <GoPrimitiveDot style={{ color: "#605DEC" }} />
                  </span>
                  Complimentary snacks and drinks
                </p>
                <p>
                  <span>
                    <GoPrimitiveDot style={{ color: "#605DEC" }} />
                  </span>
                  One free carry-on and personal item
                </p>
              </div>
              <div className="col-lg-6 col1 section-col1">
                <img
                  src="images/seat2.png"
                  width="300px"
                  height="180px"
                  alt="seat"
                />
                <h4 className="mt-3">Business class</h4>
                <p className="content">
                  Rest and recharge during your flight with extended leg room,
                  personalized service, and a multi-course meal service
                </p>
                <p>
                  <span>
                    <MdDone style={{ color: "#5CD6C0" }} />
                  </span>
                  Extended leg room
                </p>
                <p>
                  <span>
                    <MdDone style={{ color: "#5CD6C0" }} />
                  </span>
                  First wo checked bags free
                </p>
                <p>
                  <span>
                    <MdDone style={{ color: "#5CD6C0" }} />
                  </span>
                  Priority Boarding
                </p>
                <p>
                  <span>
                    <MdDone style={{ color: "#5CD6C0" }} />
                  </span>
                  Personalized service
                </p>
                <p>
                  <span>
                    <MdDone style={{ color: "#5CD6C0" }} />
                  </span>
                  Enhanced food and drink service
                </p>
                <p>
                  <span>
                    <MdDone style={{ color: "#5CD6C0" }} />
                  </span>
                  Seats that recline 40% more than economy
                </p>
              </div>
            </div>
          </section>

          <section className="section2">
            <div
              className="row"
              style={{
                border: "1px solid #7C8DB0",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "10px",
              }}
            >
              <div className="col">
                <span style={{ color: "#7C8DB0", fontSize: "0.8rem" }}>
                  Passenger 1
                </span>
                <br />
                <h4 style={{ fontWeight: "200" }}>user</h4>
              </div>
              <div className="col">
                <span style={{ color: "#7C8DB0", fontSize: "0.8rem" }}>
                  Seat number
                </span>
                <h4 style={{ fontWeight: "200" }}>4A</h4>
              </div>
              <div className="col">
                <button
                  style={{
                    border: "1px solid #605DEC",
                    color: "#605DEC",
                    backgroundColor: "#ffffff",
                    padding: "10px",
                    borderRadius: "5px",
                    fontSize: "0.8rem",
                  }}
                >
                  Save and close
                </button>
              </div>
              <div className="col">
                <button
                  style={{
                    backgroundColor: "#605DEC",
                    border: "none",
                    borderRadius: "5px",
                    color: "white",
                    padding: "10px",
                    fontSize: "0.8rem",
                  }}
                >
                  Payment method
                </button>
              </div>
            </div>
          </section>
        </div>
        <div className="col-lg-5 col-md-5 col-sm-12 second">
            <img
              src="images/flight.png"
              alt="flight"
              className="rectangle"
            />
          <img src="images/inner.png" alt="flight_inner" className="rect1" />
          <div className="high">
            <div className="d-flex flex-row flex-wrap justify-content-center">
              <button>
                <input type="checkbox" />
              </button>
              <button>
                <input type="checkbox" />
              </button>

              <p>1</p>
              <button className="disable" disabled>
                <input type="checkbox" disabled />
              </button>

              <button>
                <input type="checkbox" />
              </button>
            </div>
            <div className="d-flex flex-row flex-wrap justify-content-center">
              <button>
                <input type="checkbox" />
              </button>

              <button>
                <input type="checkbox" />
              </button>

              <p>2</p>
              <button className="disable" disabled>
                <input type="checkbox" disable />
              </button>

              <button>
                <input type="checkbox" />
              </button>
            </div>
            <div className="d-flex flex-row flex-wrap justify-content-center">
              <button className="disable" disabled>
                <input type="checkbox" disabled />
              </button>

              <button className="disable" disabled>
                <input type="checkbox" disabled />
              </button>

              <p>3</p>
              <button>
                <input type="checkbox" />
              </button>

              <button>
                <input type="checkbox" />
              </button>
            </div>
            <div className="d-flex flex-row flex-wrap justify-content-center">
              <button>
                <input type="checkbox" />
              </button>

              <button>
                <input type="checkbox" />
              </button>

              <p>4</p>
              <button>
                <input type="checkbox" />
              </button>

              <button>
                <input type="checkbox" />
              </button>
            </div>
            <div className="d-flex flex-row flex-wrap justify-content-center">
              <button className="disable" disabled>
                <input type="checkbox" disabled />
              </button>

              <button>
                <input type="checkbox" />
              </button>

              <p>5</p>
              <button>
                <input type="checkbox" />
              </button>

              <button className="disable" disabled>
                <input type="checkbox" disabled />
              </button>
            </div>
          </div>

          <div className="mid">
            <p className="mt-3">
              <AiOutlineInfoCircle />
              Exit row
            </p>
            <div className="d-flex flex-row flex-wrap justify-content-center">
              <button>
                <input type="checkbox" />
              </button>

              <button className="disable" disabled>
                <input type="checkbox" disabled />
              </button>

              <button>
                <input type="checkbox" />
              </button>

              <p>6</p>
              <button>
                <input type="checkbox" />
              </button>

              <button className="disable" disabled>
                <input type="checkbox" disabled />
              </button>

              <button>
                <input type="checkbox" />
              </button>
            </div>
            <div className="d-flex flex-row flex-wrap justify-content-center">
              <button>
                <input type="checkbox" />
              </button>

              <button>
                <input type="checkbox" />
              </button>

              <button className="disable" disabled>
                <input type="checkbox" disabled />
              </button>

              <p>7</p>
              <button>
                <input type="checkbox" />
              </button>

              <button className="disable" disabled>
                <input type="checkbox" disabled />
              </button>

              <button>
                <input type="checkbox" />
              </button>
            </div>
            <div className="d-flex flex-row flex-wrap justify-content-center">
              <button>
                <input type="checkbox" />
              </button>

              <button>
                <input type="checkbox" />
              </button>

              <button>
                <input type="checkbox" />
              </button>

              <p>8</p>
              <button>
                <input type="checkbox" />
              </button>

              <button>
                <input type="checkbox" />
              </button>

              <button>
                <input type="checkbox" />
              </button>
            </div>
            <div className="d-flex flex-row flex-wrap justify-content-center">
              <button className="disable" disabled>
                <input type="checkbox" disabled />
              </button>

              <button>
                <input type="checkbox" />
              </button>

              <button>
                <input type="checkbox" />
              </button>

              <p>9</p>
              <button className="disable" disabled>
                <input type="checkbox" disabled />
              </button>

              <button>
                <input type="checkbox" />
              </button>

              <button>
                <input type="checkbox" />
              </button>
            </div>
            <div className="d-flex flex-row flex-wrap justify-content-center">
              <button>
                <input type="checkbox" />
              </button>

              <button className="disable" disabled>
                <input type="checkbox" disabled />
              </button>

              <button>
                <input type="checkbox" />
              </button>

              <p>10</p>
              <button>
                <input type="checkbox" />
              </button>

              <button>
                <input type="checkbox" />
              </button>

              <button className="disable" disabled>
                <input type="checkbox" disabled />
              </button>
            </div>
            <div className="d-flex flex-row flex-wrap justify-content-center">
              <button>
                <input type="checkbox" />
              </button>

              <button className="disable" disabled>
                <input type="checkbox" disabled />
              </button>

              <button>
                <input type="checkbox" />
              </button>

              <p>11</p>
              <button>
                <input type="checkbox" />
              </button>

              <button className="disable" disabled>
                <input type="checkbox" disabled />
              </button>

              <button className="disable" disabled>
                <input type="checkbox" disabled />
              </button>
            </div>
            <div className="d-flex flex-row flex-wrap justify-content-center">
              <button>
                <input type="checkbox" />
              </button>

              <button>
                <input type="checkbox" />
              </button>

              <button>
                <input type="checkbox" />
              </button>

              <p>12</p>
              <button>
                <input type="checkbox" />
              </button>

              <button className="disable" disabled>
                <input type="checkbox" disabled />
              </button>

              <button>
                <input type="checkbox" />
              </button>
            </div>
            <div className="d-flex flex-row flex-wrap justify-content-center">
              <button>
                <input type="checkbox" />
              </button>

              <button className="disable" disabled>
                <input type="checkbox" disabled />
              </button>

              <button>
                <input type="checkbox" />
              </button>

              <p>13</p>
              <button className="disable" disabled>
                <input type="checkbox" disabled />
              </button>

              <button>
                <input type="checkbox" />
              </button>

              <button>
                <input type="checkbox" />
              </button>
            </div>
            <p>
              <AiOutlineInfoCircle />
              Exit row
            </p>
            <div className="d-flex flex-row flex-wrap justify-content-center">
              <button>
                <input type="checkbox" />
              </button>

              <button className="disable" disabled>
                <input type="checkbox" disabled />
              </button>

              <button>
                <input type="checkbox" />
              </button>

              <p>14</p>
              <button>
                <input type="checkbox" />
              </button>

              <button>
                <input type="checkbox" />
              </button>

              <button>
                <input type="checkbox" />
              </button>
            </div>
            <div className="d-flex flex-row flex-wrap justify-content-center">
              <button className="disable" disabled>
                <input type="checkbox" disabled />
              </button>

              <button className="disable" disabled>
                <input type="checkbox" disabled />
              </button>

              <button>
                <input type="checkbox" />
              </button>

              <p>15</p>
              <button className="disable" disabled>
                <input type="checkbox" disabled />
              </button>

              <button>
                <input type="checkbox" />
              </button>

              <button>
                <input type="checkbox" />
              </button>
            </div>
            <div className="d-flex flex-row flex-wrap justify-content-center">
              <button>
                <input type="checkbox" />
              </button>

              <button>
                <input type="checkbox" />
              </button>

              <button className="disable" disabled>
                <input type="checkbox" disabled />
              </button>

              <p>16</p>
              <button>
                <input type="checkbox" />
              </button>

              <button className="disable" disabled>
                <input type="checkbox" disabled />
              </button>

              <button>
                <input type="checkbox" />
              </button>
            </div>
            <div className="d-flex flex-row flex-wrap justify-content-center">
              <button className="disable" disabled>
                <input type="checkbox" disabled />
              </button>

              <button>
                <input type="checkbox" />
              </button>

              <button>
                <input type="checkbox" />
              </button>

              <p>17</p>
              <button>
                <input type="checkbox" />
              </button>

              <button className="disable" disabled>
                <input type="checkbox" disabled />
              </button>

              <button>
                <input type="checkbox" />
              </button>
            </div>
            <div className="d-flex flex-row flex-wrap justify-content-center">
              <button>
                <input type="checkbox" />
              </button>

              <button>
                <input type="checkbox" />
              </button>

              <button>
                <input type="checkbox" />
              </button>

              <p>18</p>
              <button>
                <input type="checkbox" />
              </button>

              <button>
                <input type="checkbox" />
              </button>

              <button className="disable" disabled>
                <input type="checkbox" disabled />
              </button>
            </div>
            <p>
              <AiOutlineInfoCircle />
              Exit row
            </p>
            <div className="d-flex flex-row flex-wrap justify-content-center">
              <button>
                <input type="checkbox" />
              </button>

              <button>
                <input type="checkbox" />
              </button>

              <button className="disable" disabled>
                <input type="checkbox" disabled />
              </button>

              <p>19</p>
              <button>
                <input type="checkbox" />
              </button>

              <button>
                <input type="checkbox" />
              </button>

              <button>
                <input type="checkbox" />
              </button>
            </div>
            <div className="d-flex flex-row flex-wrap justify-content-center">
              <button>
                <input type="checkbox" />
              </button>

              <button>
                <input type="checkbox" />
              </button>

              <button>
                <input type="checkbox" />
              </button>

              <p>20</p>
              <button className="disable" disabled>
                <input type="checkbox" disabled />
              </button>

              <button className="disable" disabled>
                <input type="checkbox" disabled />
              </button>

              <button>
                <input type="checkbox" />
              </button>
            </div>
            <div className="d-flex flex-row flex-wrap justify-content-center">
              <button>
                <input type="checkbox" />
              </button>

              <button>
                <input type="checkbox" />
              </button>

              <button>
                <input type="checkbox" />
              </button>

              <p>21</p>
              <button className="disable" disabled>
                <input type="checkbox" disabled />
              </button>

              <button>
                <input type="checkbox" />
              </button>

              <button>
                <input type="checkbox" />
              </button>
            </div>
            <div className="d-flex flex-row flex-wrap justify-content-center">
              <button>
                <input type="checkbox" />
              </button>

              <button>
                <input type="checkbox" />
              </button>

              <button className="disable" disabled>
                <input type="checkbox" disabled />
              </button>

              <p>22</p>
              <button>
                <input type="checkbox" />
              </button>

              <button>
                <input type="checkbox" />
              </button>

              <button>
                <input type="checkbox" />
              </button>
            </div>
            <div className="d-flex flex-row flex-wrap justify-content-center">
              <button>
                <input type="checkbox" />
              </button>

              <button>
                <input type="checkbox" />
              </button>

              <button>
                <input type="checkbox" />
              </button>

              <p>23</p>
              <button className="disable" disabled>
                <input type="checkbox" disabled />
              </button>

              <button>
                <input type="checkbox" />
              </button>

              <button>
                <input type="checkbox" />
              </button>
            </div>
            <div className="d-flex flex-row flex-wrap justify-content-center">
              <button className="disable" disabled>
                <input type="checkbox" disabled />
              </button>

              <button>
                <input type="checkbox" />
              </button>

              <button>
                <input type="checkbox" />
              </button>

              <p>24</p>
              <button className="disable" disabled>
                <input type="checkbox" disabled />
              </button>

              <button>
                <input type="checkbox" />
              </button>

              <button className="disable" disabled>
                <input type="checkbox" disabled />
              </button>
            </div>
            <div className="d-flex flex-row flex-wrap justify-content-center">
              <button>
                <input type="checkbox" />
              </button>

              <button className="disable" disabled>
                <input type="checkbox" disabled />
              </button>

              <button>
                <input type="checkbox" />
              </button>

              <p>25</p>
              <button>
                <input type="checkbox" />
              </button>

              <button>
                <input type="checkbox" />
              </button>

              <button>
                <input type="checkbox" />
              </button>
            </div>
            <div className="d-flex flex-row flex-wrap justify-content-center">
              <button className="disable" disabled>
                <input type="checkbox" disabled />
              </button>

              <button>
                <input type="checkbox" />
              </button>

              <button>
                <input type="checkbox" />
              </button>

              <p>26</p>
              <button>
                <input type="checkbox" />
              </button>

              <button>
                <input type="checkbox" />
              </button>

              <button className="disable" disabled>
                <input type="checkbox" disabled />
              </button>
            </div>
            <div className="d-flex flex-row flex-wrap justify-content-center">
              <button className="disable" disabled>
                <input type="checkbox" disabled />
              </button>

              <button>
                <input type="checkbox" />
              </button>

              <button>
                <input type="checkbox" />
              </button>

              <p>27</p>
              <button className="disable" disabled>
                <input type="checkbox" disabled />
              </button>

              <button>
                <input type="checkbox" />
              </button>

              <button className="disable" disabled>
                <input type="checkbox" disabled />
              </button>
            </div>
            <div className="d-flex flex-row flex-wrap justify-content-center">
              <button>
                <input type="checkbox" />
              </button>

              <button>
                <input type="checkbox" />
              </button>

              <button className="disable" disabled>
                <input type="checkbox" disabled />
              </button>

              <p>28</p>
              <button>
                <input type="checkbox" />
              </button>

              <button className="disable" disabled>
                <input type="checkbox" disabled />
              </button>

              <button>
                <input type="checkbox" />
              </button>
            </div>
            <p>
              <AiOutlineInfoCircle />
              Exit row
            </p>
            <div className="d-flex flex-row flex-wrap justify-content-center">
              <button>
                <input type="checkbox" />
              </button>

              <button>
                <input type="checkbox" />
              </button>

              <button className="disable" disabled>
                <input type="checkbox" disabled />
              </button>

              <p>29</p>
              <button>
                <input type="checkbox" />
              </button>

              <button className="disable" disabled>
                <input type="checkbox" disabled />
              </button>

              <button>
                <input type="checkbox" />
              </button>
            </div>
            <div className="d-flex flex-row flex-wrap justify-content-center">
              <button>
                <input type="checkbox" />
              </button>

              <button>
                <input type="checkbox" />
              </button>

              <button className="disable" disabled>
                <input type="checkbox" disabled />
              </button>

              <p>30</p>
              <button>
                <input type="checkbox" />
              </button>

              <button>
                <input type="checkbox" />
              </button>

              <button className="disable" disabled>
                <input type="checkbox" disabled />
              </button>
            </div>
            <div className="d-flex flex-row flex-wrap justify-content-center">
              <button>
                <input type="checkbox" />
              </button>

              <button>
                <input type="checkbox" />
              </button>

              <button>
                <input type="checkbox" />
              </button>

              <p>31</p>
              <button>
                <input type="checkbox" />
              </button>

              <button className="disable" disabled>
                <input type="checkbox" disabled />
              </button>

              <button>
                <input type="checkbox" />
              </button>
            </div>
            <div className="d-flex flex-row flex-wrap justify-content-center">
              <button>
                <input type="checkbox" />
              </button>

              <button className="disable" disabled>
                <input type="checkbox" disabled />
              </button>

              <button>
                <input type="checkbox" />
              </button>

              <p>32</p>
              <button>
                <input type="checkbox" />
              </button>

              <button className="disable" disabled>
                <input type="checkbox" disabled />
              </button>

              <button className="disable" disabled>
                <input type="checkbox" disabled />
              </button>
            </div>
            <div className="d-flex flex-row flex-wrap justify-content-center">
              <button>
                <input type="checkbox" />
              </button>

              <button>
                <input type="checkbox" />
              </button>

              <button>
                <input type="checkbox" />
              </button>

              <p>34</p>
              <button className="disable" disabled>
                <input type="checkbox" disabled />
              </button>

              <button>
                <input type="checkbox" />
              </button>

              <button>
                <input type="checkbox" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Flight;
