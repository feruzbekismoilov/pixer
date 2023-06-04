import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Servicescard.css";
const ServicesCard = ({ title, circleIcon, description, navigate }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  });
  return (
    <li
      className="services-item "
      data-aos="fade-up"
      data-aos-anchor-placement="bottom-bottom"
    >
      <div className="div">
        <h3 className="services-title">{title}</h3>
        <div className="services__circle">
          <img src={circleIcon} alt="service icon" />
        </div>
      </div>
      <p className="services-desc">{description}</p>
      <NavLink className="view-more" to={navigate}>
        View more
      </NavLink>
    </li>
  );
};
ServicesCard.propTypes = {
  title: PropTypes.string,
  circleIcon: PropTypes.string,
  description: PropTypes.string,
  navigate: PropTypes.string,
};
export default ServicesCard;
