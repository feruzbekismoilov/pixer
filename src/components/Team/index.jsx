import { Container } from "../Header/Header.js";
import { useEffect } from "react";
import Image1 from "../../assets/images/team1.jpg";
import Image2 from "../../assets/images/team2.jpg";
import Image3 from "../../assets/images/team3.jpg";
import "./Team.css";
import AOS from "aos";
import "aos/dist/aos.css";
const Team = () => {
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
    <section className="team">
      <Container>
        <div className="text-center">
          <h2 className="team-title">How do we work?</h2>
          <p className="team-description">
            Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam
            facilisis lacinia ex, eget sollicitudin massa pellentesque in.
            Vivamus mattis eros at sem pulvinar
          </p>
        </div>
        <ul className="team-list">
          <li className="team-item">
            <div className="team__start" data-aos="zoom-in-down">
              <img className="team-image w-100" src={Image1} alt="team image" />
            </div>
            <div className="team__end" data-aos="zoom-in">
              <h3 className="team__end-subtitle">
                Let's clarify the requirements
              </h3>
              <p className="team__end-desc">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </li>
          <li className="team-item d-flex justify-content-end">
            <div className="team__end" data-aos="zoom-in">
              <h3 className="team__end-subtitle">
                Let's clarify <br /> the requirements
              </h3>
              <p className="team__end-desc">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
            <div className="team__start" data-aos="zoom-in-down">
              <img className="team-image w-100" src={Image2} alt="team image" />
            </div>
          </li>
          <li className="team-item">
            <div className="team__start" data-aos="zoom-in-down">
              <img className="team-image w-100" src={Image3} alt="team image" />
            </div>
            <div className="team__end" data-aos="zoom-in">
              <h3 className="team__end-subtitle">
                Let's clarify the requirements
              </h3>
              <p className="team__end-desc">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </li>
        </ul>
      </Container>
    </section>
  );
};

export default Team;
