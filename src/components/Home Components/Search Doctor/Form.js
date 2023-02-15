import { useState } from "react";

export default function Form(props) {
  // ** Process Inputs
  const [formData, setFormData] = useState({
    Fname: "",
    Lname: "",
    specialization: "",
    HMO: "",
  });
  const { specialization, hmo } = props.selectValues;
  function OnChangeHandler(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  function OnSubmitHander(event) {
    event.preventDefault();
    props.setQuery(formData);
  }
  function CleanUp() {
    setFormData({ Fname: "", Lname: "", specialization: "", HMO: "" });
    props.setQuery({ Fname: "", Lname: "", specialization: "", HMO: "" });
  }
  // *Process Inputs*

  //*Initialize select options
  function setSelectSpecialization() {
    return specialization.map((item, index) => {
      return (
        <option value={item.specialization_ID} key={index}>
          {item.specialization_Name}
        </option>
      );
    });
  }
  function setSelectHMO() {
    return hmo.map((item, index) => {
      return (
        <option key={index} value={item.HMO_ID}>
          {item.HMO_Name}
        </option>
      );
    });
  }
  //*Initialize select options

  //Render
  return (
    <div className="searchForm-container">
      <div className="tagtitle ">Search a Doctor </div>
      <form className="form-search" onSubmit={OnSubmitHander}>
        <input
          type="text"
          className="form-control searchInput "
          placeholder="Doctor's Last Name"
          name="Lname"
          onChange={OnChangeHandler}
          value={formData.Lname}
        />
        <input
          type="text"
          className="form-control searchInput "
          placeholder="Doctor's First Name"
          name="Fname"
          onChange={OnChangeHandler}
          value={formData.Fname}
        />
        <select
          className="form-select search-responsive"
          name="specialization"
          onChange={OnChangeHandler}
          value={formData.specialization}
        >
          <option value="" defaultValue hidden>
            Select Specialization
          </option>
          {setSelectSpecialization()}
        </select>
        <select
          className="form-select search-responsive"
          name="HMO"
          onChange={OnChangeHandler}
          value={formData.HMO}
        >
          <option value="" defaultValue hidden>
            Select HMO Accreditation
          </option>
          {setSelectHMO()}
        </select>
        <button type="submit" className=" btn-success btn Search">
          Search
        </button>
        <button className=" btn-success btn Clear" onClick={CleanUp}>
          Clear
        </button>
      </form>
    </div>
  );
}
