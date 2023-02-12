import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";


export default function App(){

    // const [doctors, setdoctors] = useState([])
    // const [schedule, setSchedule] = useState([])

    // useEffect(()=>{
    //     async function get(){
    //         const res = await axios.get("/doctors")
    //         const {data} = res.data
    //         setdoctors(data.result)
    //         setSchedule(data.schedule)
          
    //     }   
    //     get()
    // }, [])

    // const getAssignedSched  = (doctorID)=>{
    //     return schedule.map((sched)=>{
    //         return doctorID === sched.doctor_ID && sched.date
    //     })
    // }

    // let elem = doctors.map((items, index)=>{
    //     return <h1 key={index}>{items.doctor_first_name} <p>{getAssignedSched(items.doctor_ID)}</p></h1>
    // })


    return (
       <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/services" element={<Services/>}/>
       </Routes>
    )
}

