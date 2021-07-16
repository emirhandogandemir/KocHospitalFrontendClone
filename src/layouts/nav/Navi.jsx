import "./navi.scss";
import { BsListUl, BsSearch } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";
import { NavLink } from "react-router-dom";
export default function Navi() {
  return (
    <div style={{ width: "100%" }}>
      <nav className="nav">
        <div className="nav_image">
          <NavLink to="/">
            <img
              src={"../../../assets/images/kocuni.png"}
              alt="kocuni.png"
              className="nav_image_koc"
            ></img>
          </NavLink>
        </div>

        <div className="nav">
          <div className="nav_content">
            <a href="#section1">Bölümlerimiz</a>
          </div>
          <div className="nav_content">
            <NavLink to="/doctors" activeClassName="navi-router">
              Doktorlarımız
            </NavLink>
          </div>
          <div className="nav_content">
            <a href="#"> Bize ulaşın </a>
          </div>
          <div className="nav_content">
            <a href="#">Kurumsal</a>
          </div>
        </div>
        <div className="nav_menu">
          <div className="nav_menu-right">
            <BsSearch size={30} style={{ marginRight: "10px" }} />
          </div>
          <div className="nav_menu-right">
            <BsListUl size={30} style={{ marginRight: "10px" }} />
          </div>
          <div className="nav_menu-right" onClick={() => onClickMenu()}>
            {" "}
            <BiWorld size={30} style={{ marginRight: "10px" }} />
          </div>
        </div>
      </nav>
    </div>
  );
  function onClickMenu() {
    console.log("Naber aslanım");
  }
}
