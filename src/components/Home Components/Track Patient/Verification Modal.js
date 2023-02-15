import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function VerificationModal(props) {
  const handleClose = () => props.setShow(false);

  function check(exist) {
    if (exist) {
      return (
        <>
          <Modal.Header closeButton onClick={handleClose}>
            <Modal.Title>Email Verification</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="modal-body text-center">
              <label className="modal-form">
                (OTP) One Time Password has been sent to
              </label>
              <br></br>
              <p>Please Enter (6) digit code to complete your verification.</p>
              <div className=" otp-form  container-fluid text-center">
                <input type="text" className="form-control otp-input" />
              </div>
              <label className="label pt-3">OTP is valid for 3 minutes</label>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button className="Search" onClick={handleClose}>
              Verify
            </Button>
            <Button className="Clear" type="submit" onClick={handleClose}>
              Cancel
            </Button>
          </Modal.Footer>
        </>
      );
    }

    return (
      <>
        <Modal.Header closeButton>
          <Modal.Title>No Record</Modal.Title>
        </Modal.Header>
        <Modal.Body>No Record Associated with this Email</Modal.Body>
        <Modal.Footer>
          <Button className="Search" onClick={handleClose}>
            Close
          </Button>
          <Button className="Clear" type="submit" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </>
    );
  }

  if (props.loading) {
    return (
      <>
        <button type="submit" className=" btn-success btn Search-track">
          Search
        </button>
        <Modal
          show={props.show}
          onHide={props.handleClose}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <img
            src="https://media.tenor.com/KVFqRA1S1NoAAAAM/bocchi-the-rock-bocchi.gif"
            alt=""
          ></img>
        </Modal>
      </>
    );
  } else {
    return (
      <>
        <button type="submit" className=" btn-success btn Search-track">
          Search
        </button>
        <Modal
          show={props.show}
          onHide={props.handleClose}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          {check(props.exist)}
        </Modal>
      </>
    );
  }
}
