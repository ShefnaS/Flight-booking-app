import React from "react";
import "../Style/Page16.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { GoPrimitiveDot } from "react-icons/go";
import { MdEventSeat} from "react-icons/md";

function Page16() {
  return (
    <div
      className="container p16"
      style={{ backgroundColor: "#ffffff", fontFamily: "Verdana, sans-serif" }}
    >
      <div className="row">
        <div className="col-lg-5 col-md-12 col-sm-12">
        <header className="header">
        <div className="row">
          <div className="col-5 c1">
            <div
              className="row r2"
              style={{
                border: "none",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div className="col-4 c1a">
                <h4 className="r-head">SFO</h4>

                <span className="r-span">California,US</span>
              </div>
              <div className="col-1 c1a">
                <h4 className="r-head">
                  <AiOutlineArrowRight />
                </h4>
              </div>
              <div className="col-4 c1a">
                <h4 className="r-head">NRT</h4>
                <span className="r-span">Tokyo,Japan</span>
              </div>
            </div>
          </div>
          <div className="col c1">
            <h4 className="r-head" style={{ fontWeight: "normal" }}>
              Feb 25,7:00 AM
            </h4>
            <span className="r-span">Departure</span>
          </div>
          <div className="col c1">
            <h4 className="r-head" style={{ fontWeight: "normal" }}>
              Mar 21,12:15 PM
            </h4>
            <span className="r-span">Arriving</span>
          </div>
        </div>
      </header>
      <section className="container section" style={{ color: "grey" }}>
        <div className="row section-row">
          <div className="col">
            <h2>
              Economy <button id="selected">Selected</button>
            </h2>
            <br />
            <MdEventSeat className='seat'
              style={{
                textAlign: "center",
                fontSize: "9rem",
                color: "#707FF2",
              }}
            />
            <MdEventSeat className='seat'
              style={{
                textAlign: "center",
                fontSize: "9rem",
                color: "#707FF2",
              }}
            />
            <MdEventSeat className='seat'
              style={{
                textAlign: "center",
                fontSize: "9rem",
                color: "#707FF2",
              }}
            />
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
          <div className="col-1"></div>
          <div className="col section-col1">
            <h2>Business class</h2>
            <br />
            <MdEventSeat className='seat'
              style={{
                textAlign: "center",
                fontSize: "9rem",
                color: "#5CD6C0",
              }}
            />
            <MdEventSeat className='seat'
              style={{
                textAlign: "center",
                fontSize: "9rem",
                color: "#5CD6C0",
              }}
            />
            <MdEventSeat className='seat'
              style={{
                textAlign: "center",
                fontSize: "9rem",
                color: "#5CD6C0",
              }}
            />
            <p className="content">
              Rest and recharge during your flight with extended leg room,
              personalized service, and a multi-course meal service
            </p>
            <p>
              <span>
                <MdDone />
              </span>
              Extended leg room
            </p>
            <p>
              <span>
                <MdDone />
              </span>
              First wo checked bags free
            </p>
            <p>
              <span>
                <MdDone />
              </span>
              Priority Boarding
            </p>
            <p>
              <span>
                <MdDone />
              </span>
              Personalized service
            </p>
            <p>
              <span>
                <MdDone />
              </span>
              Enhanced food and drink service
            </p>
            <p>
              <span>
                <MdDone />
              </span>
              Seats that recline 40% more than economy
            </p>
          </div>
        </div>
      </section>
      <section>
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

      <section>
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
                backgroundColor: "#CBD4E64D",
                border: "1px solid #7C8DB0",
                borderRadius: "5px",
                color: "#7C8DB0",
                padding: "10px",
                fontSize: "0.8rem",
              }}
            >
              Next flight
            </button>
          </div>
        </div>
      </section>
        </div>
      </div>

    </div>
  );
}

export default Page16;
