import { useState } from "react";

export default function Form(props){
    const [formData, setFormData] = useState({Fname: "", Lname: "", specialization: "", HMO:""});

    function OnchangeHandler(event){
        const {name, value} = event.target
        setFormData(prev=>({
            ...prev, [name]: value
        }))
       
    }
    function OnSubmitHander(event){
        event.preventDefault();
        props.setQuery(formData)
    }
    function CleanUp(event){
        setFormData({Fname: "", Lname: ""})
        props.setQuery({})
    }

    return(
        <>
            <form onSubmit={OnSubmitHander}>
            <input type="text" name="Fname" onChange={OnchangeHandler} value={formData.Fname}></input>
            <input type="text" name="Lname" onChange={OnchangeHandler} value={formData.Lname}></input>
            <button type="submit">Seach</button>
            <button onClick={CleanUp}>Clear</button>
            </form>
        </>
    )
}