import "../styles/footer.scss";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineMail, AiOutlineInstagram } from "react-icons/ai";
import { IconContext } from "react-icons";
import Logo from "../media/logopreto.png";

function Footer() {
  return (
    <footer>
      <div className="footer-content flex">
        <div className="flex col footer-info"></div>

        <div className="flex even align-center wrap" style={{ width: "100%" }}>
          <h1> STORE+ </h1>
          <div>
            <p>
              Rua Conde de São Joaquim, 56 <br /> Liberdade - CEP: 01320-010
              <br />
              São Paulo | SP
            </p>
            <p>(99) 9999-9999</p>
          </div>
          <p>email@email.com</p>
          <div className="flex col">
            <span className="footer-title">Redes Sociais</span>
            <div className="flex j-center">
              <IconContext.Provider
                value={{ size: 20, className: "footer-icon" }}
              >
                <AiOutlineMail />
                <FiFacebook />
                <AiOutlineInstagram />
              </IconContext.Provider>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
