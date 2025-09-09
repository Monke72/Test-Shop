import { navArray } from "@shared/arrays/nav";
import "./Nav.scss";

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        {navArray.map((el, idx) => (
          <li className="nav__item" key={idx}>
            <img className="nav__iamge" src={el.image} alt={el.alt} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
