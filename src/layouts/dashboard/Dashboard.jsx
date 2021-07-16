import { Route } from "react-router";
import DoctorList from "../../pages/doctors/DoctorList";
import DepartmentList from "../../pages/departments/DepartmentList";
import HomePage from "../homepage/HomePage";

export default function Dashboard() {
  return (
    <div>
      <Route exact path="/" component={HomePage}></Route>

      <Route exact path="/doctors" component={DoctorList}></Route>
      <Route exact path="/departments" component={DepartmentList}></Route>
    </div>
  );
}
