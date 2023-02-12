import { useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from 'axios'
import Form from "../components/Home Components/Form"
import Card from "../components/Home Components/Card"
export default function Home(){

    const [query, setQuery] = useSearchParams({})
    const [doctors, setdoctors] = useState([])
    const [schedule, setSchedule] = useState([])


    useEffect(()=>{
        async function get(){

            const res = await axios.get(`/doctors/search/?Fname=${query.get("Fname")}&Lname=${query.get("Lname")}&specialization${query.get("specialization")}&HMO${query.get("HMO")}`)
            const {data} = res.data
            setdoctors(data.result)
            setSchedule(data.schedule)
        }   
        get()
    }, [query])



    return(
        <>
            <Form query={query} setQuery={setQuery}/>
            <Card doctors={doctors} schedule={schedule}/>
        </>
    )
}