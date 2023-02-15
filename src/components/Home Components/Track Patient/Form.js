import axios from "axios";
import { useState, useEffect } from "react";
import VerificationModal from "./Verification Modal";
export default function TrackMe() {
  const [email, setEmail] = useState({ email: "" });
  const [show, setShow] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [verify, setVerify] = useState({ exist: false, verified: false });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    async function get() {
      console.log(email);
      const res = await axios.post("/trackMe", { email: email.email });
      if (res.data.data) {
        setVerify((prev) => ({ ...prev, exist: true }));
      }
      console.log(verify);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
    get();
  }, [submit]);

  function OnChangeHandler(event) {
    const { name, value } = event.target;
    setEmail({ [name]: value });
  }

  function OnSubmitHandler(event) {
    event.preventDefault();
    setShow(true);
    setSubmit(!submit);
  }

  return (
    <div className="searchForm-container">
      <div className="tagtitle ">Tracker</div>
      <p className="tagtitle--p">
        Manage and Track your appointment using your Registered Email Address
      </p>
      <p className="tagtitle--p">
        <b>Email Address</b>
      </p>
      <form className="form-track" onSubmit={OnSubmitHandler}>
        <input
          className="form-control"
          placeholder="Enter your registered email address"
          name="email"
          value={email.email}
          onChange={OnChangeHandler}
          required
        ></input>
        <div>
          <VerificationModal
            show={show}
            setShow={setShow}
            OnSubmitHandler={OnSubmitHandler}
            exist={verify.exist}
            setVerify={setVerify}
            loading={loading}
          />
        </div>
      </form>
    </div>
  );
}
