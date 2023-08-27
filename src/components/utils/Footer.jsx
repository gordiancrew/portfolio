import { Link } from "react-router-dom";
import "./Header.css";
import github from "../../assets/github.png";

function Footer() {
  const menuArr = [
    { name: "main", url: "", link: "/" },
    { name: "projects", url: "projects", link: "/projects" },
  ];
  return (
    <>
      <div className="footer">
        {menuArr.map((item) => (
          <li key={item.name} className="header__item">
            <Link to={item.link}>
              <img className="icons" src={github} alt="Logo" />
            </Link>
          </li>
        ))}
      </div>
    </>
  );
}

export default Footer;
