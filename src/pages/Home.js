import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Form from "../components/Home Components/Search Doctor/Form";
import Card from "../components/Home Components/Search Doctor/Card";
import TrackMe from "../components/Home Components/Track Patient/Form";

export default function Home() {
  const [query, setQuery] = useSearchParams({
    Fname: "",
    Lname: "",
    specialization: "",
    HMO: "",
  });
  const [doctors, setdoctors] = useState([]);
  const [schedule, setSchedule] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectValues, setSelectValues] = useState({
    specialization: [],
    hmo: [],
  });

  //Initialize Specialization and HMO list
  useEffect(() => {
    async function get() {
      const res = await axios.get("/initialize");
      const { data } = res.data;
      setSelectValues({ specialization: data.specialization, hmo: data.hmo });
    }
    get();
  }, []);
  //Update Seach Query
  useEffect(() => {
    async function get() {
      setLoading(true);
      const res = await axios.get(
        `/doctors/search/?Fname=${query.get("Fname")}&Lname=${query.get(
          "Lname"
        )}&specialization=${query.get("specialization")}&HMO=${query.get(
          "HMO"
        )}`
      );

      const { data } = res.data;
      setdoctors(data.result);
      setSchedule(data.schedule);
      setLoading(false);
    }
    get();
  }, [query]);

  //Sub-Components
  return (
    <>
      <Form query={query} setQuery={setQuery} selectValues={selectValues} />
      {<Card doctors={doctors} schedule={schedule} loading={loading} />}
      {<TrackMe />}
    </>
  );
}
