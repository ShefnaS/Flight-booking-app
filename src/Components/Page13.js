import React from "react";
import { MdFlightTakeoff } from "react-icons/md";
import { RiFlightLandFill } from "react-icons/ri";
import { BsCalendarEvent, BsFillPersonFill } from "react-icons/bs";
import "../Style/Page13.css";
import NavigationBar from "./Navbar";
import Footer from "./Footer";

function Page13() {
  return (
    <div className="container">
      <NavigationBar />
      <main className="page13" style={{paddingTop : '70px'}}>
        <section className="section1">
          <div className="row">
            <div className="col-lg-8 col-md-12 col-sm-12">
              <div className="d-flex flex-row flex-wrap justify-content-center">
                <button
                  className="btn1"
                  style={{
                    borderTopLeftRadius: "5px",
                    borderBottomLeftRadius: "5px",
                  }}
                >
                  <MdFlightTakeoff /> SFO
                </button>
                <button className="btn1">
                  <RiFlightLandFill /> NRT
                </button>
                <button className="btn1">
                  <BsCalendarEvent /> Depart-Return
                </button>
                <button className="btn1">
                  <BsFillPersonFill /> 1 adult
                </button>
                <button id="search">Search</button>
              </div>

              <div className="mb-5 d-flex flex-row flex-wrap justify-content-center mt-5">
                <div className="dropdown">
                  <button
                    className="btn dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Max price
                  </button>
                  <button
                    className="btn dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Shops
                  </button>
                  <button
                    className="btn dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Times
                  </button>
                  <button
                    className="btn dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Airlines
                  </button>
                  <button
                    className="btn dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Seat class
                  </button>
                  <button
                    className="btn dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    more
                  </button>
                </div>
              </div>

              <div className="mt-5 div1">
                <h5 className="mt-5">
                  Choose a <span style={{ color: "#605DEC" }}>departing</span>{" "}
                  flight
                </h5>
                <div class="table-wrapper-scroll-y my-custom-scrollbar mt-5 ">
                  <table className="table border rounded">
                    <tbody>
                      <tr>
                        <td>
                          <img
                            src="images/logo.png"
                            alt="logo"
                            height="40px"
                            width="60px"
                          />
                        </td>
                        <td>
                          16h 45m
                          <br />
                          <span>Hawaiian Airlines</span>
                        </td>
                        <td>7:00AM - 4:15PM</td>
                        <td>
                          1 stop
                          <br />
                          <span>2h 45m in HNL</span>
                        </td>
                        <td>
                          $624
                          <br />
                          <span>round trip</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src="images/flight/JAL.png"
                            alt="logo"
                            height="40px"
                            width="40px"
                            style={{ marginLeft: "10px" }}
                          />
                        </td>
                        <td>
                          18h 22m
                          <br />
                          <span>Japan Airlines</span>
                        </td>
                        <td>7:35 AM - 12:15 PM</td>
                        <td>
                          1 stop
                          <br />
                          <span>50m in HKG</span>
                        </td>
                        <td>
                          $663
                          <br />
                          <span>round trip</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src="images/logo.png"
                            alt="logo"
                            height="40px"
                            width="60px"
                          />
                        </td>
                        <td>
                          18h 04m
                          <br />
                          <span>Hawaiian Airlines</span>
                        </td>
                        <td>8:20 AM - 2:15 PM</td>
                        <td>
                          1 stop
                          <br />
                          <span>1h 50m in PVG</span>
                        </td>
                        <td>
                          $690
                          <br />
                          <span>round trip</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src="images/flight/delta.png"
                            alt="logo"
                            height="40px"
                            width="40px"
                            style={{ marginLeft: "10px" }}
                          />
                        </td>
                        <td>
                          18h 52m
                          <br />
                          <span>Delta</span>
                        </td>
                        <td>9:47 AM - 4:15 PM</td>
                        <td>
                          1 stop
                          <br />
                          <span>4h 05m in ICN </span>
                        </td>
                        <td>
                          $756
                          <br />
                          <span>round trip</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src="images/flight/flight1.png"
                            alt="logo"
                            height="40px"
                            width="40px"
                            style={{ marginLeft: "10px" }}
                          />
                        </td>
                        <td>
                          16h 45m
                          <br />
                          <span>Hawaiian Airlines</span>
                        </td>
                        <td>7:00AM - 4:15PM</td>
                        <td>
                          Non stop
                          <br />
                          <span>2h 45m in HNL</span>
                        </td>
                        <td>
                          $724
                          <br />
                          <span>round trip</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src="images/flight/flight2.png"
                            alt="logo"
                            height="40px"
                            width="40px"
                            style={{ marginLeft: "10px" }}
                          />
                        </td>
                        <td>
                          18h 45m
                          <br />
                          <span>Eva Airlines</span>
                        </td>
                        <td>12:00AM - 4:15PM</td>
                        <td>
                          1 stop
                          <br />
                          <span>2h 15m in HNL</span>
                        </td>
                        <td>
                          $814
                          <br />
                          <span>round trip</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src="images/flight/flight4.png"
                            alt="logo"
                            height="40px"
                            width="40px"
                            style={{ marginLeft: "10px" }}
                          />
                        </td>
                        <td>
                          13h 55m
                          <br />
                          <span>Korean Airlines</span>
                        </td>
                        <td>7:00AM - 4:15PM</td>
                        <td>
                          1 stop
                          <br />
                          <span>1h 60m in HNL</span>
                        </td>
                        <td>
                          $924
                          <br />
                          <span>round trip</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src="images/flight/flight3.png"
                            alt="logo"
                            height="40px"
                            width="40px"
                            style={{ marginLeft: "10px" }}
                          />
                        </td>
                        <td>
                          16h 45m
                          <br />
                          <span>Hawaiian Airlines</span>
                        </td>
                        <td>7:00AM - 4:15PM</td>
                        <td>
                          1 stop
                          <br />
                          <span>2h 45m in HNL</span>
                        </td>
                        <td>
                          $624
                          <br />
                          <span>round trip</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src="images/flight/delta.png"
                            alt="logo"
                            height="40px"
                            width="40px"
                            style={{ marginLeft: "10px" }}
                          />
                        </td>
                        <td>
                          18h 52m
                          <br />
                          <span>Delta</span>
                        </td>
                        <td>9:47 AM - 4:15 PM</td>
                        <td>
                          1 stop
                          <br />
                          <span>4h 05m in ICN </span>
                        </td>
                        <td>
                          $756
                          <br />
                          <span>round trip</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src="images/flight/flight2.png"
                            alt="logo"
                            height="40px"
                            width="40px"
                            style={{ marginLeft: "10px" }}
                          />
                        </td>
                        <td>
                          18h 45m
                          <br />
                          <span>Eva Airlines</span>
                        </td>
                        <td>12:00AM - 4:15PM</td>
                        <td>
                          1 stop
                          <br />
                          <span>2h 15m in HNL</span>
                        </td>
                        <td>
                          $814
                          <br />
                          <span>round trip</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src="images/flight/flight3.png"
                            alt="logo"
                            height="40px"
                            width="40px"
                            style={{ marginLeft: "10px" }}
                          />
                        </td>
                        <td>
                          16h 45m
                          <br />
                          <span>Hawaiian Airlines</span>
                        </td>
                        <td>7:00AM - 4:15PM</td>
                        <td>
                          1 stop
                          <br />
                          <span>2h 45m in HNL</span>
                        </td>
                        <td>
                          $624
                          <br />
                          <span>round trip</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src="images/flight/flight4.png"
                            alt="logo"
                            height="40px"
                            width="40px"
                            style={{ marginLeft: "10px" }}
                          />
                        </td>
                        <td>
                          13h 55m
                          <br />
                          <span>Korean Airlines</span>
                        </td>
                        <td>7:00AM - 4:15PM</td>
                        <td>
                          1 stop
                          <br />
                          <span>1h 60m in HNL</span>
                        </td>
                        <td>
                          $924
                          <br />
                          <span>round trip</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src="images/flight/flight5.png"
                            alt="logo"
                            height="40px"
                            width="40px"
                            style={{ marginLeft: "10px" }}
                          />
                        </td>
                        <td>
                          16h 45m
                          <br />
                          <span>Hawaiian Airlines</span>
                        </td>
                        <td>7:00AM - 4:15PM</td>
                        <td>
                          1 stop
                          <br />
                          <span>2h 45m in HNL</span>
                        </td>
                        <td>
                          $624
                          <br />
                          <span>round trip</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src="images/flight/flight6.png"
                            alt="logo"
                            height="40px"
                            width="40px"
                            style={{ marginLeft: "10px" }}
                          />
                        </td>
                        <td>
                          16h 45m
                          <br />
                          <span>Hawaiian Airlines</span>
                        </td>
                        <td>7:00AM - 4:15PM</td>
                        <td>
                          1 stop
                          <br />
                          <span>2h 45m in HNL</span>
                        </td>
                        <td>
                          $624
                          <br />
                          <span>round trip</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <button
                className="btn mt-3"
                style={{
                  position: "absolute",
                  right: "10px",
                  color: "#605DEC",
                  border: "1px solid #605DEC",
                }}
              >
                Show all flights
              </button>
              <img
                className="img-fluid way mt-5"
                src="images/way2.png"
                alt=""
                width="100%"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6 mt-5 pay">
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
                 <hr style={{color:'black'}} />
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
                <div className="d-flex flex-row justify-content-end mt-2 mb-3">
                  <p>Seat upgrade</p>&nbsp;&nbsp;&nbsp;&nbsp;
                  <p>$199</p>
                </div>
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
                  }}
                >
                  Confirm and pay
                </button>
              </div>
            </div>
          </div>
          <div className="stay mt-5">
            <h5 className="center">
              Find <span style={{ color: "#605DEC" }}>places to stay</span> in
              japan
            </h5>
            <div className="row mt-5">
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="card">
                  <img
                    src="images/stay1.jpeg"
                    className="card-img-top"
                    alt="adventure1"
                  />
                  <div className="card-body">
                    <div className="card-text">
                      <h5>Hotel Kaneyamaen and Bessho SASA</h5>
                      <p>
                        Located at the base of Mount Fuji, Hotel Kaneyamaen is a
                        traitional japanese ryokan with a modern twist. Enjoy a
                        private onsen bath and a private multi-course kaiseki
                        dinner.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="card">
                  <img
                    src="images/stay2.jpeg"
                    className="card-img-top"
                    alt="adventure1"
                  />
                  <div className="card-body">
                    <div className="card-text">
                      <h5>HOTEL THE FLAG 大阪市</h5>
                      <p>
                        Make a stop in Osaka and stay at HOTEL THE FLAG, just a
                        few minutes walk to experience the food culture
                        surrounding Dontonbori. Just one minute away is the
                        Shinsaibashi shopping street.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="card">
                  <img
                    src="images/stay3.jpeg"
                    className="card-img-top"
                    alt="adventure1"
                  />
                  <div className="card-body">
                    <div className="card-text">
                      <h5>9 Hours Shinjuku</h5>
                      <p>
                        Experience a truly unique stay in an authentic Japanese
                        capsule hotel. 9 Hours Shinjuku is minutes from one of
                        Japan’s busiest train stations. Just take the NEX train
                        from Narita airport!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h5 className="mt-5 center">
            People in <span style={{ color: "#605DEC" }}>San Francisco</span>{" "}
            also searched for
          </h5>
          <div className="row mt-5">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="card">
                <img
                  src="images/card/image.png"
                  className="card-img-top"
                  alt="adventure1"
                />
                <div className="card-body">
                  <div className="card-text">
                    <div className="row">
                      <div className="col-9">
                        <h5>
                          The Bund,{" "}
                          <span style={{ color: "#605DEC" }}>Shanghai</span>
                        </h5>
                      </div>
                      <div className="col">
                        <span>$598</span>
                      </div>
                    </div>
                    <p>China’s most international city</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="card">
                <img
                  src="images/background1.png"
                  className="card-img-top"
                  alt="adventure1"
                />
                <div className="card-body">
                  <div className="card-text">
                    <div className="row">
                      <div className="col-9">
                        <h5>
                          Sydney Opera House,
                          <span style={{ color: "#605DEC" }}> Sydney</span>
                        </h5>
                      </div>
                      <div className="col">
                        <span>$981</span>
                      </div>
                      <p>Take a stroll along the famous harbor</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="card">
                <img
                  src="images/new1.jpeg"
                  className="card-img-top"
                  alt="adventure1"
                />
                <div className="card-body">
                  <div className="card-text">
                    <div className="row">
                      <div className="col-9">
                        <h5>
                          Kōdaiji Temple,{" "}
                          <span style={{ color: "#605DEC" }}>Kyoto</span>
                        </h5>
                      </div>
                      <div className="col-3">
                        <span>$633</span>
                      </div>
                      <p>Step back in time in the Gion district</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Page13;
