export default function Card() {
  return (
    <>
      <div className="patient-card">
        <div className="patient-name">Mark Templanza</div>
        <div className="patient-gender">Patient (M)</div>
        <div className="card-button">
          <button className="btn View-btn">View Appointments</button>
          <button class="btn Edit-btn">Edit Personal Info</button>
        </div>
      </div>
    </>
  );
}
