import { BsCreditCardFill } from "react-icons/bs";
import { AiFillApple } from "react-icons/ai";
import { BsPaypal } from "react-icons/bs";
import { AiOutlineGoogle } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import "../Style/Pay.css";
import NavigationBar from "./Navbar";
import Footer from "./Footer";

function Pay() {
  return (
    <>
      <NavigationBar />
      <main>
        <section className="section-1">
          <div className="container mt-5">
            <div className="row">
              <div className="col-lg-7 col-md-12 col-sm-12 col-xs-12">
                <h4>Payment method</h4>
                <p>
                  Select a payment method below. Tripma processes your payment
                  securely with end-to-end encryption
                </p>
                <div className="d-flex flex-row flex-wrap butns">
                  <button className="border-0 px-3 py-2">
                    <BsCreditCardFill /> Credit card
                  </button>
                  <button className="border-0 px-3 py-2">
                    <AiOutlineGoogle />
                    Google pay
                  </button>
                  <button className="border-0 px-3 py-2">
                    <AiFillApple /> Apple pay
                  </button>
                  <button className="border-0 px-3 py-2">
                    <BsPaypal /> Paypal
                  </button>
                  <button className="border-0 px-3 py-2">Crypto</button>
                </div>
                <h6 className="text-secondary mt-5">Credit card details</h6>
                <form className="form">
                  <div className="form-group">
                    <input type="checkbox" className="checkbox-inline" />
                    &nbsp;
                    <label>Billing address is same as Passenger 1</label>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control my-3"
                      placeholder="Name on card"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control my-3"
                      placeholder="Card number"
                    />
                  </div>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control input-sm"
                      placeholder="Expiration date(MM/YY) "
                    />
                    <input
                      type="text"
                      className="form-control input-sm"
                      placeholder="CCV"
                    />
                  </div>
                </form>
                <h6 className="text-secondary mt-5">Create an account</h6>
                <p>
                  Tripma is free to use as a guest, but if you create an account
                  today, you can save and view flights, manage your trips, earn
                  rewards, and more.
                </p>
                <div className="form-group">
                  <input type="checkbox" className="checkbox-inline" />
                  &nbsp;
                  <label>Save card and create account for later</label>
                </div>
                <form className="form">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control my-3"
                      placeholder="Email address or phone number"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control my-3"
                      placeholder="Password"
                    />
                  </div>
                </form>
                <br />
                <hr />
                <p
                  className="text-center"
                  style={{ position: "relative", top: "-30px" }}
                >
                  OR
                </p>
                <div className="form-group text-center">
                  <button className="form-control my-3">
                    <FcGoogle style={{ textAlign: "left" }} />
                    Signup with Google
                  </button>
                </div>
                <div className="form-group text-center">
                  <button className="form-control my-3">
                    <AiFillApple style={{ color: "black" }} />
                    Signup with Apple
                  </button>
                </div>
                <div className="form-group text-center">
                  <button className="form-control my-3">
                    <FaFacebookF style={{ color: "#407AEA" }} /> Continue with
                    Facebook
                  </button>
                </div>
                <h6 className="text-secondary mt-5">Cancellation policy</h6>
                <p className="mt-3">
                  This flight has a flexible cancellation policy. If you cancel
                  or change your flight up to 30 days before the departure date,
                  you are eligible for a free refund. All flights booked on
                  Tripma are backed by our satisfaction guarantee, however
                  cancellation policies vary by airline. See the full
                  cancellation policy for this flight.
                </p>
                <div className="input-group">
                  <button
                    className="form-control my-5"
                    style={{ color: "#605DEC", border: "1px solid #605DEC" }}
                  >
                    Back to seat
                  </button>
                  <button
                    className="form-control m-5"
                    style={{
                      backgroundColor: "#CBD4E64D",
                      color: "#7C8DB0",
                      border: "1px solid #7C8DB0",
                    }}
                  >
                    Confirm and pay
                  </button>
                </div>
              </div>
              <div className="col-lg-5 col-md-12 col-sm-6 col-xs-6">
                <div className="d-flex flex-column border rounded p-3">
                  <div className="d-flex flex-row">
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
                  <hr />
                  <div className="d-flex flex-row">
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
                  id='cpay'
                    className="btn"
                    style={{
                      backgroundColor: "#CBD4E64D",
                      color: "#7C8DB0",
                      border: "1px solid #CBD4E64D",
                      width:'40%',
                      textAlign:'center',
                      
                      
                    }}
                  >
                    Confirm and pay
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Pay;
