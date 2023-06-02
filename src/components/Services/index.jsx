import { Container } from "../Header/Header";
import "./Services.css";

const Services = () => {
  return (
    <section className="services">
      <h1 className="visually-hidden">Pixer</h1>
      <Container>
        <div className="services__wrapper">
          <div className="services__start">
            <h2 className="services-title">
              Take your <br /> business to the next level take out
            </h2>
            <p className="services-desc">
              Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu.
              Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in.
              Vivamus mattis eros at sem pulvinar
            </p>
          </div>
          <div className="services__end">
            <iframe
              width="592"
              height="334"
              src="https://www.youtube.com/embed/FSCSdAlLsYM?list=PLC3y8-rFHvwgu-G08-7ovbN9EyhF_cltM"
              title="React Styled Components - 1 - Introduction"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <svg
              className="play"
              width="100"
              height="100"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="50" cy="50" r="50" fill="#1AAB7B" />
              <path
                d="M61 45.3038C65 47.6132 67 48.7679 67 50.5C67 52.2321 65 53.3868 61 55.6962L48.25 63.0574C44.25 65.3668 42.25 66.5215 40.75 65.6554C39.25 64.7894 39.25 62.48 39.25 57.8612V43.1388C39.25 38.52 39.25 36.2106 40.75 35.3446C42.25 34.4785 44.25 35.6332 48.25 37.9426L61 45.3038Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <button className="learn-btn " type="button">
          Learn more
        </button>
      </Container>
    </section>
  );
};

export default Services;
