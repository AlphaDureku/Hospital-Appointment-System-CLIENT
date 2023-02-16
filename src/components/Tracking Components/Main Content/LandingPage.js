import Card from "./LandingPage--Card";

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
            <Card />
          </div>
          <p className="end-title">
            With your registered email address, we were able to locate
            <span> 5</span> record/s.
          </p>
          <p className="end-title">
            click an option to <span style={{ color: "red" }}>continue</span>
          </p>
        </div>
      </div>
    </>
  );
}
