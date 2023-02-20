export default function Card() {
  return (
    <>
      <div className="appointment-item">
        <div className="appointment-status">Pending(1)</div>
        <div className="appointment-card"></div>
      </div>
      <div className="appointment-item">
        <div className="appointment-status">Confirmed(1)</div>
        <div className="appointment-card"></div>
      </div>
      <div className="appointment-item">
        <div className="appointment-status">Cancelled(1)</div>
        <div className="appointment-card"></div>
      </div>
      <div className="appointment-item">
        <div className="appointment-status">Completed(1)</div>
        <div className="appointment-card"></div>
      </div>
    </>
  );
}
