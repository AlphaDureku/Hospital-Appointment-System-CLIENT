import { Route, Routes } from "react-router-dom";
import Footer from "../components/Tracking Components/Footer/Footer";
import EditInfo from "../components/Tracking Components/Main Content/Main Content--Sub Components/EditInfo";
import LandingPage from "../components/Tracking Components/Main Content/Main Content--Sub Components/LandingPage";
import ViewAppointments from "../components/Tracking Components/Main Content/Main Content--Sub Components/ViewAppointments";
import NavBar from "../components/Tracking Components/NavBar/NavBar";

export default function Track() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="Edit-Info" element={<EditInfo />} />
        <Route path="View-Appointments" element={<ViewAppointments />} />
      </Routes>
      <Footer />
    </>
  );
}
