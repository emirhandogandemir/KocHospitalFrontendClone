import "./doctor.module.scss";
import { useState, useEffect } from "react";
import DoctorService from "../../services/doctorsService";
import Card from "../../layouts/card/Card";
export default function DoctorList() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    let doctorService = new DoctorService();
    doctorService.getAll().then((doctor) => setDoctors(doctor.data.data));
  }, []);

  return (
    <div className="body">
      {doctors.map((doctor, index) => (
        <Card
          img={doctor.image.url}
          content={doctor.department.name}
          name={`${doctor.name} + ${doctor.surname}`}
        ></Card>
      ))}
    </div>
  );
}
