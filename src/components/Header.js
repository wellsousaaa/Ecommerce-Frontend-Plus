import { useState, useEffect, useRef } from "react";
import "../styles/header.scss";
import ShoppingCar from "./ShoppingCar";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";

function Header() {
  const [PageDown, setPageDown] = useState(false);
  const [MobileMenuActive, setMobileMenuActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 150 ||
        document.documentElement.scrollTop > 150
      )
        setPageDown(true);
      else {
        setPageDown(false);
      }
    });
  });

  const changeMobileActive = () => {
    setMobileMenuActive((state) => !state);
  };

  return (
    <>
      <header
        className={`header flex ${PageDown ? "header-float" : ""} ${
          MobileMenuActive ? "header-mobile" : ""
        }`}
      >
        <div className="header-div">
          <div className=" flex align-center header-content">
            <h1> Store+ </h1>
            <div className="header-search align-center flex">
              <input
                className="header-input"
                placeholder="O que você está procurando?"
                type="search"
              />
              <AiOutlineSearch />
            </div>
            <div className="flex even icon-container">
              <div>
                <Link to="/purchase">
                  <IconContext.Provider
                    value={{
                      className: "car-icon",
                      style: { cursor: "pointer" },
                    }}
                  >
                    <RiShoppingCart2Fill />
                  </IconContext.Provider>
                </Link>
              </div>
              <div>
                <div>
                  <IconContext.Provider
                    value={{
                      className: "car-icon",
                      style: { cursor: "pointer" },
                    }}
                  >
                    <FaUser />
                  </IconContext.Provider>
                </div>
              </div>
              <div
                className="mobile-menu-container"
                onClick={changeMobileActive}
              >
                <IconContext.Provider value={{ className: "mobile-menu" }}>
                  <GiHamburgerMenu />
                </IconContext.Provider>
              </div>
            </div>
          </div>

          <nav className="header-nav">
            <ul style={{ padding: 0, margin: "auto" }} className="flex">
              <Link to="/">
                <li>x Início</li>
              </Link>
              <Link to="/descobrir">
                <li>x Descobrir</li>
              </Link>
              <Link to="/">
                <li>x Novidades</li>
              </Link>
              <Link to="/">
                <li>x Promoções</li>
              </Link>
              <Link to="/contato">
                <li>x Contato</li>
              </Link>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
