export default function Card(props){

    const getAssignedSched  = (doctorID)=>{
        return props.schedule.map((sched, index)=>{
             return doctorID === sched.doctor_ID && 
             <div className="doctor-flexbox-Avail" key={index}>
                <div className="header">Availability</div>
                <div className="sched">{sched.day} | {sched.start} - {sched.end}</div>
             </div>
        })
    }

    const elem = props.doctors.map((items, index)=>(

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
                                    {getAssignedSched(items.doctor_ID)}
                            </div>
                        </div>

    )
        // return <h1 key={index}>{items.doctor_first_name} {items.doctor_last_name}<p>{getAssignedSched(items.doctor_ID)}</p></h1>
        
        
       
    )


    return(
        <div className="center">
            <div className="grid-container">
               {elem}
            </div>
        </div>

    )
}


