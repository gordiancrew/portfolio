import { Link } from "react-router-dom";
import './Header.css';

function Header() {
    const textArr = window.location.href.toString().split('/');
    const text = textArr[textArr.length - 1];
  const menuArr = [
    { name: "summary", url: "", link: "/" },
    { name: "skills", url: "skills", link: "/skills" },
    { name: "projects", url: "projects", link: "/projects" },
   
  ];
  return (
    <>
      <div className="header">
        {menuArr.map((item) => (
          <li
            key={item.name}
            style={{ backgroundColor: text === item.url ? "grey" : "" }}
            className="header__item"
          >
            <Link to={item.link}>{item.name}</Link>
          </li>
        ))}
      </div>
    </>
  );
}

export default Header;
