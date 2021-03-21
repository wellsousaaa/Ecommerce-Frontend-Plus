import { SiMinutemailer } from "react-icons/si";
import { IconContext } from "react-icons";

function Email() {
  return (
    <div className="email-container align-center flex even wrap">
      <div className="flex col" style={{ color: "var(--highlight-color)" }}>
        <span>Placeholder</span>
        <p style={{ textAlign: "justify" }}>
          it is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum.
        </p>
      </div>
      <div className="flex align-center">
        <input type="email" placeholder="Insira seu email..." />
        <IconContext.Provider
          value={{
            size: 30,
            color: "var(--highlight-color)",
            style: { marginLeft: 25, cursor: "pointer" },
          }}
        >
          <SiMinutemailer />
        </IconContext.Provider>
      </div>
    </div>
  );
}

export default Email;
