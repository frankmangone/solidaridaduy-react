import React, { Fragment, useEffect, useState } from "react";
import {
  FaBars,
  FaSearch,
  FaAngleLeft,
  FaAngleRight,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import donateJumbo from "../assets/svgs/donate_jumbo_home.svg";
import participateSvg from "../assets/svgs/participate_home.svg";
import donateSvg from "../assets/svgs/donate_home.svg";
import promoteSvg from "../assets/svgs/promote_home.svg";
import CategorySvg from "../components/CategorySvg";

/* Components */
import AppSvg from "../components/AppSvg";
import PageFooter from "../components/PageFooter";
import LoadingAnimation from "../components/LoadingAnimation";
import Modal from "../components/Modal";

/* Helpers */
import { filterByName } from "../helpers/filterByName";

/* Data hooks */
import { useData } from "../context/data";

import "../styles/home.scss";

const HomeView = () => {
  //const [scrollTop, setScrollTop] = useState(0);
  const [normalHeader, setNormalHeader] = useState(false);
  const windowHeight = window.innerHeight;

  useEffect(() => {
    const handleScroll = (e) => {
      if (window.scrollY > windowHeight - 80 && !normalHeader) {
        setNormalHeader(true);
      } else if (window.scrollY < windowHeight - 80 && normalHeader) {
        setNormalHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [normalHeader, windowHeight]);

  return (
    <div
      className="view-container"
      onScroll={() => {
        console.log("hola");
      }}
    >
      <HomeHeader scrolled={normalHeader} />
      <Landing />
      <Search />
      <Emergency />
      <About />
      <Collaborate />
      {/*<Photos />*/}
      {/*<Statistics />*/}
      <Contact />
      <PageFooter />
    </div>
  );
};

/* --------------------------------- */

const HomeHeader = ({ scrolled }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  return (
    <React.Fragment>
      <header className={`home-header${scrolled ? " scrolled" : ""}`}>
        <Link to="/" className="home-link">
          Solidaridad.uy
        </Link>
        <nav>
          <div className="menu-widescreen">
            <Link to="/about" className="header-link">
              <p>¿QUIÉNES SOMOS?</p>
            </Link>
            <Link to="/collaborate" className="header-link">
              <p>¿CÓMO COLABORAR?</p>
            </Link>
            <Link to="/contact" className="header-link">
              <p>CONTACTO</p>
            </Link>
          </div>

          <button
            className="menu-button"
            onClick={() => {
              setDropdownVisible(true);
            }}
          >
            <p>
              <FaBars />
            </p>
          </button>
        </nav>
      </header>
      {dropdownVisible ? (
        <div className="menu-dropdown">
          <Link to="/about" className="dropdown-link">
            <p>¿QUIÉNES SOMOS?</p>
          </Link>
          <Link to="/collaborate" className="dropdown-link">
            <p>¿CÓMO COLABORAR?</p>
          </Link>
          <Link to="/contact" className="dropdown-link">
            <p>CONTACTO</p>
          </Link>
          <button
            className="dropdown-link"
            onClick={() => {
              setDropdownVisible(false);
            }}
          >
            <p>
              <FaTimes />
            </p>
          </button>
          <button
            className="dropdown-dim"
            onClick={() => {
              setDropdownVisible(false);
            }}
          ></button>
        </div>
      ) : null}
    </React.Fragment>
  );
};

//

const Landing = () => {
  const [search, setSearch] = useState("");
  const { data, isDataFetching } = useData();
  const [filteredData, setFilteredData] = useState([]);

  const handleEnterPress = (event) => {
    if (event.keyCode === 13) {
      let link = document.getElementById("search-available");
      if (link) {
        link.click();
      }
    }
  };

  // TODO: Prevent from firing multiple times...
  useEffect(() => {
    document.addEventListener("keypress", handleEnterPress, false);
  }, []);

  // Fetch initiative data
  useEffect(() => {
    setFilteredData(filterByName(data, search));
  }, [setFilteredData, data, search]);

  return (
    <div className="full-screen landing-jumbo">
      <div className="landing-background">
        <div
          className={`landing-inner${
            search.length === 0 ? " search-empty" : ""
          }`}
        >
          <h1>SolidaridadUY</h1>
          <h3>Iniciativas solidarias en Uruguay</h3>
          <div className="searchbar-wrapper">
            <input
              placeholder="Nombre, Barrio, Ciudad..."
              value={search}
              autoComplete="new-password"
              onChange={(e) => setSearch(e.target.value)}
            />
            {search.length !== 0 ? (
              <Link to={`/search-results?search=${search}`}>
                <button id="search-available">
                  <FaSearch />
                </button>
              </Link>
            ) : (
              <Link
                to={`/search-results?search=${search}`}
                className="disabled-link"
              >
                <button>
                  <FaSearch />
                </button>
              </Link>
            )}
          </div>

          <div className="search-suggestions-wrapper">
            <div className="search-suggestions">
              {isDataFetching ? (
                <LoadingAnimation />
              ) : (
                <React.Fragment>
                  {filteredData.slice(0, 3).map((init) => (
                    <Link
                      to={`/initiative/${init._id}`}
                      className="option"
                      key={init._id}
                    >
                      {init.name}
                    </Link>
                  ))}
                </React.Fragment>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

//

const Search = () => {
  return (
    <div className="search-jumbo">
      <div className="content-left">
        <h2>Proyectos solidarios en el país</h2>
        <h4>Busca iniciativas solidarias en distintos puntos de Uruguay</h4>
      </div>
      <div className="content-right">
        <select>
          <option>Ciudad</option>
        </select>
        <select>
          <option>Barrio</option>
        </select>
        <button className="button-green">Buscar</button>
      </div>
    </div>
  );
};

//

const Emergency = () => {
  const { data, isDataFetching } = useData();

  let content;
  if (isDataFetching) {
    content = <LoadingAnimation />;
  } else {
    content = data
      .filter((elem) => elem.emergency)
      .slice(0, 3)
      .map((elem, index) => (
        <Link
          to={`/initiative/${elem._id}`}
          key={index}
          className="initiative-card"
        >
          <div className="hover-effect"></div>
          <h4 className="name">{elem.name}</h4>
          <p className="location">
            {`${elem.hood}`}
            <br />
            {elem.province}
          </p>
          <CategorySvg category={elem.category} emergency={true} />
        </Link>
      ));
  }

  return (
    <Fragment>
      <div className="red-stripes"></div>
      <div className="emergency-jumbo">
        <h3>Iniciativas en situación de</h3>
        <h2>Urgencia</h2>
        <div className="emergency-initiatives">{content}</div>
      </div>
      <div className="red-stripes"></div>
    </Fragment>
  );
};

//

const About = () => {
  return (
    <div className="about-jumbo">
      <img src={donateJumbo} alt="About" />
      <div className="text">
        <h2>Quiénes somos</h2>
        <h4>
          <span className="highlight">Solidaridad.uy</span> surge con el
          objetivo de centralizar la información de diferentes iniciativas
          solidarias en Uruguay, para ponerlas a disposición del público
          general.
        </h4>
        <Link to="/about" style={{ textDecoration: "underline" }}>
          <button className="button-green">Ver más...</button>
        </Link>
      </div>
    </div>
  );
};

//

const Collaborate = () => {
  const [donationModalVisible, setDonationModalVisible] = useState(false);

  return (
    <React.Fragment>
      <div className="collaborate-jumbo">
        <h2>Colaborá hoy</h2>
        <div className="collaboration-options">
          <div className="option">
            <img src={participateSvg} alt="Join" />
            <h4>Participá como voluntario en nuestro proyecto</h4>
            <button className="button-green">Participar</button>
          </div>
          <div className="option">
            <img src={donateSvg} alt="Donate" />
            <h4>Colaborá hoy a través de una donación</h4>
            <button
              className="button-orange"
              onClick={() => setDonationModalVisible(true)}
            >
              Donar
            </button>
          </div>
          <div className="option">
            <img src={promoteSvg} alt="Promote" />
            <h4>Difundí nuestro proyecto en las redes</h4>
            <button className="button-red">Compartir</button>
          </div>
        </div>
      </div>
      <Modal
        title="Cómo donar:"
        visible={donationModalVisible}
        _close={() => setDonationModalVisible(false)}
      />
    </React.Fragment>
  );
};

//

const Photos = () => {
  return (
    <div className="photos-jumbo">
      <div className="content-left">
        <div className="title">
          <AppSvg icon="PHOTOS" />
          <h2>Fotos</h2>
        </div>
        <h4>Insta - link</h4>
        <h4>Facebook - link</h4>
      </div>
      <div className="content-right">
        <div className="photo-wrapper"></div>
      </div>
    </div>
  );
};

//

const Statistics = () => {
  return (
    <div className="statistics-jumbo">
      <h3>Estadísticas</h3>
      <div className="statistics-wrapper">
        <div className="statistic">
          <h1>205</h1>
          <h4>Iniciativas solidarias en Uruguay</h4>
        </div>
        <div className="statistic">
          <h1>+10000</h1>
          <h4>Personas en situación precaria</h4>
        </div>
        <div className="statistic">
          <h1>+20000</h1>
          <h4>Horas semanales de trabajo solidario</h4>
        </div>
      </div>
    </div>
  );
};

//

const Contact = () => {
  return (
    <div className="contact-jumbo">
      <div className="content-left">
        <h2>Contacto</h2>
        <h4>
          Tus comentarios, ideas, y sugerencias nos importan. Cuéntanos tus
          inquietudes para poder seguir mejorando esta plataforma.
        </h4>
      </div>
      <div className="content-right">
        <input placeholder="Tu mail" />
        <textarea placeholder="Coméntanos algo..." />
      </div>
    </div>
  );
};

export default HomeView;
