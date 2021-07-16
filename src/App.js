import "./App.css";
import Dashboard from "./layouts/dashboard/Dashboard";
import Footer from "./layouts/footer/Footer";

import Navi from "./layouts/nav/Navi";

function App() {
  return (
    <div className="App">
      <Navi></Navi>
      <Dashboard></Dashboard>
      <Footer></Footer>
    </div>
  );
}
export default App;
