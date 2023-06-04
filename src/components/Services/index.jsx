import { Container } from "../Header/Header";
import ServicesCard from "../ServicesCard";
import penTool from "../../assets/icons/pen-tool.svg";
import smmIcon from "../../assets/icons/smm-icon.svg";
import brandingIcon from "../../assets/icons/branding-icon.svg";
import simcardIcon from "../../assets/icons/simcard.svg";
import designToolIcon from "../../assets/icons/designtools.svg";

import "./Services.css";
const Services = () => {
  return (
    <section className="services">
      <Container>
        <h2 className="services__about">How can we help you?</h2>
        <ul className="services-list">
          <ServicesCard
            title="Web Designer"
            circleIcon={penTool}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Ut enim ad minim veniam, quis  "
            navigate="/home"
          />
          <ServicesCard
            title="SMM"
            circleIcon={smmIcon}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation   "
            navigate="/home"
          />
          <ServicesCard
            title="Branding"
            circleIcon={brandingIcon}
            description="No the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee"
            navigate="/home"
          />
          <ServicesCard
            title="Developer"
            circleIcon={simcardIcon}
            description="Which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our "
            navigate="/home"
          />
          <ServicesCard
            title="Graphic design"
            circleIcon={designToolIcon}
            description="But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted"
            navigate="/home"
          />
        </ul>
      </Container>
    </section>
  );
};

export default Services;
