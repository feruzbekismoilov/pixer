import { NavLink } from "react-router-dom";
import { VscChromeClose } from "react-icons/vsc";
import "./Menus.css";
import { PropTypes } from "prop-types";
const Menus = ({ handleMenu, closeMenu }) => {
  return (
    <div
      className={`menus ${closeMenu ? "" : "toggle-menus"}`}
      onClick={() => handleMenu()}
    >
      <VscChromeClose className="menus-close" />
      <ul className="menus-list">
        <li className="menus-item">
          <NavLink className="menus-link">Services</NavLink>
        </li>
        <li className="menus-item">
          <NavLink className="menus-link">Portfolio</NavLink>
        </li>
        <li className="menus-item">
          <NavLink className="menus-link">Team</NavLink>
        </li>
        <li className="menus-item">
          <NavLink className="menus-link">Blog</NavLink>
        </li>
        <li className="menus-item">
          <NavLink className="menus-link">Contacts</NavLink>
        </li>
      </ul>
    </div>
  );
};
Menus.propTypes = {
  handleMenu: PropTypes.func,
  closeMenu: PropTypes.bool,
};
export default Menus;
