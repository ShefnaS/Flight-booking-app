import React from "react";
import Footer from "./Footer";
import NavigationBar from "./Navbar";
import "../Style/Next.css";

function Next() {
  return (
    <div>
      <NavigationBar />
      <div className="container m-3">
        <div className="row">
          <div className="col-lg-7 col-md-12 col-sm-12 col-xs-12 px-3">
            <button className="btn" id="success">
              Your flight has been booked successfully! Your confirmation number
              is #5465745432
            </button>

            <div className="first-para mt-5">
              <h3>Bon Voyage, Sofia!</h3>
              <h6>Confirmation number : #5465745432</h6>
              <p className="mt-3">
                Thank you for booking your travel witd Tripma! Below is a
                summary of your trip to Narita airport in Tokyo, Japan. We’ve
                sent a copy of your booking confirmation to your email address.
                You can also find tdis page again in My trips.
              </p>
            </div>

            <div className="summary mt-5">
              <h5>Flight Summary</h5>
              <div className="mt-5">
                <h6>Departing february 25,2021</h6>
                <div className="row border rounded p-2 mt-4">
                  <div className="col-1">
                    {" "}
                    <img
                      src="images/logo.png"
                      alt="logo"
                      width="55px"
                      height="40px"
                    />
                  </div>
                  <div className="col">
                    16h 45min
                    <br />
                    <span style={{ color: "#7C8DB0" }}>Hawaiian Airlines</span>
                  </div>
                  <div className="col">
                    7:00AM - 4:15PM
                    <br />
                    <span style={{ color: "#7C8DB0" }}>Value</span>
                  </div>
                  <div className="col">
                    1 stop
                    <br />
                    <span style={{ color: "#7C8DB0" }}>2h 45m in HNL</span>
                  </div>
                  <div className="col">
                    $627
                    <br />
                    <span style={{ color: "#7C8DB0" }}>round trip</span>
                  </div>
                </div>
                <span style={{ color: "#7C8DB0" }}>
                  Seat 9F (economy, window), 1 checked bag
                </span>
              </div>
              <div className="mt-5">
                <h6>Arriving March 21st, 2021 </h6>
                <div className="row border rounded p-2 mt-4">
                  <div className="col-1">
                    {" "}
                    <img
                      src="images/logo.png"
                      alt="logo"
                      width="55px"
                      height="40px"
                    />
                  </div>
                  <div className="col">
                    16h 45min
                    <br />
                    <span style={{ color: "#7C8DB0" }}>Hawaiian Airlines</span>
                  </div>
                  <div className="col">
                    7:00AM - 4:15PM
                    <br />
                    <span style={{ color: "#7C8DB0" }}>Value</span>
                  </div>
                  <div className="col">
                    1 stop
                    <br />
                    <span style={{ color: "#7C8DB0" }}>2h 45m in HNL</span>
                  </div>
                  <div className="col">
                    $627
                    <br />
                    <span style={{ color: "#7C8DB0" }}>round trip</span>
                  </div>
                </div>
                <span>Seat 4F (business, window), 1 checked bag</span>
              </div>
            </div>

            <div className="price mt-5">
              <h5>Price breakdown</h5>
              <div className="table mt-4">
                <tr>
                  <td>Departing flight</td>
                  <td className="px-5">$251.50</td>
                </tr>
                <tr>
                  <td>Arriving Flight</td>
                  <td className="px-5">$251.50</td>
                </tr>
                <tr>
                  <td>Baggage fees</td>
                  <td className="px-5">$0</td>
                </tr>
                <tr>
                  <td>Seat upgrade (business)</td>
                  <td className="px-5">$199</td>
                </tr>
                <tr>
                  <td>Subtotal</td>
                  <td className="px-5">$702</td>
                </tr>
                <tr>
                  <td>Taxes (9.4%)</td>
                  <td className="px-5">$66</td>
                </tr>
                <hr />
                <tr>
                  <td style={{ fontWeight: "600" , color:'black' }}>Amount paid</td>
                  <td style={{ paddingLeft: "7.9rem",fontWeight: "600" , color:'black' }}>$768</td>
                </tr>
                <hr />
              </div>
            </div>

            <div className="payment-method mt-5">
              <h5>Payment method</h5>
              <div className="card visa mt-3">
                <div className="card-header border-0">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1200px-Visa_Inc._logo.svg.png"
                    alt="Visa Logo"
                  />
                </div>
                <div className="card-body mt-5">
                  <div className="card-details">
                    <div className="card-owner">
                      <span>Sophia Knowles</span>
                    </div>
                    <div className="card-cvv">
                      <span>10/23</span>
                    </div>
                  </div>
                  <div className="card-owner">
                    <span>**** **** **** </span>
                    <span>1234</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="travel mt-5">
              <h5>Share your travel itinerary</h5>
              <p>
                You can email your itinerary to anyone by entering their email
                address here.
              </p>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control mt-3"
                  placeholder="email address"
                  style={{ width: "30rem" }}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control mt-3"
                  placeholder="email address"
                  style={{ width: "30rem" }}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control mt-3"
                  placeholder="email address"
                  style={{ width: "30rem" }}
                />
              </div>
              <div className="row mt-5">
                <div className="col-4" m-5>
                  <button className="btn">Email itinerary</button>
                </div>
                <div className="col-4">
                  <button className="btn" style={{background:'none',color:'#605DEC'}}>Add another</button>
                </div>
              </div>
            </div>

            <div className="flight-route mt-5">
              <h5>Flight Route</h5>
              <img
                className="mt-5"
                src="images/way.png"
                alt="flight-route"
                width="500px"
                height="300px"
              />
            </div>
          </div>

          <div className="col-lg-5 col-md-12 col-sm-12 col-xs-12  mt-5">
            <div className="hotels">
              <h5>Shop Hotels</h5>
              <p>
                Tripma partners with thousands of hotels to get you the best
                deal. Save up to 30% when you add a hotel to your trip.
              </p>
              <div className="card mt-5">
                <img
                  src="images/hotel1.jpeg"
                  className="card-img-top"
                  alt="first-hotel"
                  width="400px"
                  height="200px"
                />
                <div className="card-body">
                  <h6 className="card-title">
                    <div className="row">
                      <div className="col">Ryokan Japan</div>
                      <div className="col-3">$439</div>
                    </div>
                  </h6>
                  <p className="card-text">
                    Enjoy views of the garden from your room
                  </p>
                </div>
              </div>
              <br />
              <div className="card">
                <img
                  src="images/hotel2.jpeg"
                  className="card-img-top"
                  alt="first-hotel"
                  width="400px"
                  height="200px"
                />
                <div className="card-body">
                  <h6 className="card-title">
                    <div className="row">
                      <div className="col">Bessho SASA</div>
                      <div className="col-3">$529</div>
                    </div>
                  </h6>
                  <p className="card-text">
                    Japanese ryokan with private onsen bath
                  </p>
                </div>
              </div>
              <br />
              <div className="card">
                <img
                  src="images/hotel3.jpeg"
                  className="card-img-top"
                  alt="first-hotel"
                  width="400px"
                  height="200px"
                />
                <div className="card-body">
                  <h6 className="card-title">
                    <div className="row">
                      <div className="col">HOTEL THE FLAG 大阪市</div>
                      <div className="col-3">$139</div>
                    </div>
                  </h6>
                  <p className="card-text">
                    Modern hotel in the heart of Osaka
                  </p>
                </div>
              </div>
              <br />
              <div className="card">
                <img
                  src="images/hotel4.jpeg"
                  className="card-img-top"
                  alt="first-hotel"
                  width="400px"
                  height="250px"
                />
                <div className="card-body">
                  <h6 className="card-title">
                    <div className="row">
                      <div className="col">9 Hours Shinjuku</div>
                      <div className="col-3">$59</div>
                    </div>
                  </h6>
                  <p className="card-text">
                    A convenient capsule hotel at Shinjuku station
                  </p>
                </div>
              </div>
              <br />
              <button className="btn">Shop all hotels</button>
            </div>

            <div className="experiences">
              <h5 className="mt-5">Find unique experiences</h5>
              <p>
                Find events and authentic cultrual experiences available
                exclusively to Tripma users.
              </p>
              <div className="card">
                <img
                  src="images/exp1.jpeg"
                  className="card-img-top"
                  alt="first-hotel"
                  width="400px"
                  height="250px"
                />
                <div className="card-body">
                  <h6 className="card-title">
                    <div className="row">
                      <div className="col">Nihon Kimono</div>
                      <div className="col-3">$89</div>
                    </div>
                  </h6>
                  <p className="card-text">
                    Wear the national dress of Japan around the city
                  </p>
                </div>
              </div>
              <br />
              <div className="card">
                <img
                  src="images/exp2.jpeg"
                  className="card-img-top"
                  alt="first-hotel"
                  width="400px"
                  height="250px"
                />
                <div className="card-body">
                  <h6 className="card-title">
                    <div className="row">
                      <div className="col">teamLab Borderless</div>
                      <div className="col-3">$39</div>
                    </div>
                  </h6>
                  <p className="card-text">
                    A modern sensory experience of light and sound
                  </p>
                </div>
              </div>
              <br />
              <button className="btn">View all experiences</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Next;
