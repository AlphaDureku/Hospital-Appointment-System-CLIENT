export default function LandingPage() {
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
            <div className="patient-card">
              <div className="patient-name">Mark Templanza</div>
              <div className="patient-gender">Patient (M)</div>
              <div className="card-button">
                <button className="btn View-btn">View Appointments</button>
                <button class="btn Edit-btn">Edit Personal Info</button>
              </div>
            </div>
          </div>
          <p className="end-title">
            With your registered email address, we were able to locate
            <span>5</span> record/s.
          </p>
          <p className="end-title">
            click an option to <span style={{ color: "red" }}>continue</span>
          </p>
        </div>
      </div>
    </>
  );
}
