import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const data = useSelector((state) => state.resumeData.data);
  const name = (data.main && data.main.name) || "";
  const occupation = (data.main && data.main.occupation) || "";
  const description = (data.main && data.main.description) || "";
  const address = (data.main && data.main.address) || { city: "" };

  const renderNetworks = () => {
    if (data.main && data.main.social) {
      return data.main.social.map((network) => {
        return (
          <li key={network.name}>
            <a href={network.url}>
              <i className={network.className}></i>
            </a>
          </li>
        );
      });
    }
  };

  return (
    <header id="home">
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>
        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#resume">
              Resume
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">I'm {name}.</h1>
          <h3>
            I'm a {address.city} based <span>{occupation}</span>. {description}.
          </h3>
          <hr />
          <ul className="social">{renderNetworks()}</ul>
        </div>
      </div>
      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
};

export default Header;
