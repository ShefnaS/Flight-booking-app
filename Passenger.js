import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import "../Style/Passenger.css";
import NavigationBar from "./Navbar";
import Footer from "./Footer";

function Passenger() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const [count, setCount] = useState(1);
  const incrementCount = () => {
    setCount((count) => count + 1);
  };
  const decrementCount = () => {
    setCount((count) => count + 1);
  };
  return (
    <div>
      <div className="container">
        <NavigationBar />
        <main className="passenger" style={{ marginTop: "70px" }}>
          <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
            <div className="info">
              <h4>Passenger Information</h4>
              <p>
                Enter the required information for each traveler and be sure
                that it exactly matches the government-issued ID presented at
                the airport.
              </p>
              <h5 className="mt-5">Passenger 1 (Adult)</h5>
              <form className="mt-3" onsubmit={handleSubmit}>
                <div className="d-flex flex-row flex-wrap">
                  <input type="text" placeholder="First name*" required />
                  <input type="text" placeholder="Middle" />
                  <input type="text" placeholder="Last name*" required />
                </div>
                <div className="d-flex flex-row flex-wrap">
                  <input type="text" placeholder="Suffix" />
                  <input
                    type="text"
                    placeholder="Date of birth(mm/dd/yy)*"
                    required
                  />
                </div>
                <div className="d-flex flex-row flex-wrap">
                  <input type="email" placeholder="Email address*" required />
                  <input type="text" placeholder="Phone number*" required />
                </div>
                <div className="d-flex flex-row flex-wrap">
                  <input type="text" placeholder="Redress number" />
                  <input
                    type="text"
                    placeholder="Known traveller number*"
                    required
                  />
                </div>
              </form>
            </div>

            <div className="contact-info">
              <h5 className="mt-5">Emergency contact information</h5>
              <input type="checkbox" id="check" />
              <label htmlFor="check" style={{ color: "#6E7491" }}>
                Same as Passenger 1
              </label>
              <form className="mt-3" onsubmit={handleSubmit}>
                <div className="d-flex flex-row flex-wrap">
                  <input type="text" placeholder="First name*" required />
                  <input type="text" placeholder="Last name*" required />
                </div>
                <div className="d-flex flex-row flex-wrap">
                  <input type="email" placeholder="Email address*" required />
                  <input type="text" placeholder="Phone number*" required />
                </div>
              </form>
            </div>

            <div className="bag-info mt-5">
              <h5>Bag information</h5>
              <p>
                Each passenger is allowed one free carry-on bag and one personal
                item. First checked bag for each passenger is also free. Second
                bag check fees are waived for loyalty program members. See the{" "}
                <a style={{ textDecoration: "none" }} href="/#">
                  full bag policy.
                </a>
              </p>
              <table className="table mt-5">
                <tr style={{ color: "#7C8DB0" }}>
                  <td>Passenger 1</td>
                  <td>Checked bags</td>
                </tr>
                <br />
                <tr style={{ color: "#6E7491" }}>
                  <td>First Last</td>
                  <AiOutlineMinus
                    onClick={decrementCount}
                    style={{ color: "#605DEC" }}
                  />
                  &nbsp;&nbsp; {count} &nbsp;&nbsp;
                  <AiOutlinePlus
                    onClick={incrementCount}
                    style={{ color: "#605DEC" }}
                  />
                </tr>
              </table>
              <div className="d-flex flex-row flex-wrap">
                <button className="btn" id="save">
                  Save and close
                </button>
                &nbsp;&nbsp;
                <button className="btn" id="seat">
                  Select seats
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
            <div className="d-flex flex-column border rounded p-3 mt-5">
              <div className="d-flex flex-row mt-5">
                <img
                  src="images/logo.png"
                  alt="logo"
                  width="50px"
                  height="40px"
                />
                <p className="mx-4">
                  Hawaiian Airlines
                  <br />
                  <span style={{ color: "#7C8DB0" }}>FIG4312</span>
                </p>
                <p>
                  16h 45m (+1d)
                  <br />
                  7:00 AM - 4:15 PM
                  <br />
                  <span style={{ color: "#7C8DB0" }}>2h 45m in HNL</span>
                </p>
              </div>
              <hr style={{ color: "black" }} />
              <div className="d-flex flex-row">
                <img
                  src="images/logo.png"
                  alt="logo"
                  width="50px"
                  height="40px"
                />
                <p className="mx-4">
                  Hawaiian Airlines
                  <br />
                  <span style={{ color: "#7C8DB0" }}>FIG4312</span>
                </p>
                <p>
                  16h 45m (+1d)
                  <br />
                  7:00 AM - 4:15 PM
                  <br />
                  <span style={{ color: "#7C8DB0" }}>2h 45m in HNL</span>
                </p>
              </div>
            </div>
            <div className="d-flex flex-column  ">
              <div className="d-flex flex-row justify-content-end">
                <p style={{ fontWeight: "600" }}>Sub total</p>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <p style={{ fontWeight: "600" }}>$702</p>
              </div>
              <div className="d-flex flex-row justify-content-end">
                <p style={{ fontWeight: "600" }}>Taxes and fees</p>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <p style={{ fontWeight: "600" }}>$66</p>
              </div>
              <div className="d-flex flex-row justify-content-end">
                <p style={{ fontWeight: "600" }}>Total</p>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <p style={{ fontWeight: "600" }}>$768</p>
              </div>
              <button
                id="cpay"
                className="btn"
                style={{
                  backgroundColor: "#CBD4E64D",
                  color: "#7C8DB0",
                  border: "1px solid #CBD4E64D",
                  width: "40%",
                  textAlign: "center",
                  marginLeft: "250px",
                }}
              >
                Select seats
              </button>
            </div>
            <div className="luggage mt-5">
              < img
                src="images/luggage.png"
                alt="luggage"
                width="350px"
                height="400px"
              />
            </div>
          </div>
        </main>
      </div>
      <div className="container footer1 mt-5">
        <Footer />
      </div>
    </div>
  );
}

export default Passenger;
