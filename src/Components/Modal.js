import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Modal1() {
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title style={{color:'#3a3838'}}>Upgrade seat</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p style={{color :'#7C8DB0'}}>
            Upgrade your seat for only $199, and enjoy 45 percent more leg room,
            and seats that recline 40 percent more than economy.
          </p>
        </Modal.Body>

        <Modal.Footer>
          <Button
            style={{
              border: "1px solid #605DEC",
              color: "#605DEC",
              backgroundColor: "#ffffff",
              padding: "10px",
              borderRadius: "5px",
              fontSize: "0.8rem",
            }}
          >
            Cancel
          </Button>
          <Button
            style={{
              backgroundColor: "#605DEC",
              border: "none",
              borderRadius: "5px",
              color: "white",
              padding: "10px",
              fontSize: "0.8rem",
            }}
          >
            Upgrade for $199
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default Modal1;
