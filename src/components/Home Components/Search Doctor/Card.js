import Loading from "./Card--Loading";

export default function Card(props) {
  //Individualize Schedule
  function getAssignedSched(doctorID) {
    return props.schedule.map((sched, index) => {
      return (
        doctorID === sched.doctor_ID && (
          <div className="sched" key={index}>
            {sched.day} | {sched.start} - {sched.end}
          </div>
        )
      );
    });
  }

  //Map each card
  const elem = props.doctors.map((items, index) => (
    <div key={index}>
      <div className="doctor-flexbox-container">
        <div className="doctor-flexbox-Info">
          <div className="Lname">{items.doctor_last_name}, </div>
          <div className="Fname">{items.doctor_first_name}</div>
          <div className="HMO_Accreditation">
            <div className="specialization">
              <div className="HMO_Head">Specialization:</div>
              {items.specialization}
            </div>
          </div>
          <div className="HMO_Accreditation">
            <div className="HMO_Head">HMO Accreditation:</div>
            {items.HMO_Name}
          </div>
        </div>
        <div className="doctor-flexbox-Avail">
          <div className="header">Availability</div>
          {getAssignedSched(items.doctor_ID)}
        </div>
      </div>
    </div>
  ));

  //NotFound
  const notFound = <div className="notFound">No doctor Found!</div>;

  //Render
  if (props.loading) {
    return (
      <div className="card-container">
        <Loading />
      </div>
    );
  }

  return (
    <div className="card-container">
      <div className="grid-container">
        {props.doctors.length ? elem : notFound}
      </div>
    </div>
  );
}
