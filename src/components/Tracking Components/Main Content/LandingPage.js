import Card from "./LandingPage--Card";
import axios from "axios";
import { useState, useEffect } from "react";
export default function LandingPage() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [patientList, setPatientList] = useState([]);

  useEffect(() => {
    const getPatients = async () => {
      const response = await axios.get("/user/get-patients");
      const { data } = response.data;
      setCount(data.count);
      setPatientList(data.patientList);
    };
    getPatients();
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  return (
    <>
      <div className="Track--main_container">
        <div className="Track--sub_container">
          <div className="Track--tagtitle ">Tracker</div>
          <div className="sub-title">
            <p>
              Manage and Track your appointment using your Registered Email
              Address
            </p>
          </div>
          <div className="patient-list_Container">
            <Card patientList={patientList} loading={loading} />
          </div>
          <p className="end-title">
            With your registered email address, we were able to locate {count}{" "}
            {count > 1 ? "records" : "record"}
          </p>
          <p className="end-title">
            click an option to <span style={{ color: "red" }}>continue</span>
          </p>
        </div>
      </div>
    </>
  );
}
