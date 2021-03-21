import { useContext } from "react";
import { IconContext } from "react-icons";
import { MdRemoveShoppingCart } from "react-icons/md";
import "../styles/car.scss";
import { CarContext } from "../helpers/carContext";
import { Link } from "react-router-dom";

function CarItem(props) {
  return (
    <>
      <div className="flex align-center">
        <img
          style={{ width: 100, height: 100 }}
          src={`http://localhost:5000/api/media/${props.image}`}
          alt={props.title}
        />
        <div className="flex col">
          <span>{props.title}</span>
          <p>{props.description.substring(0, 75)}...</p>
        </div>
        <button
          onClick={() => {
            props.removeItem(props.id);
          }}
        >
          X
        </button>
      </div>
      <hr />
    </>
  );
}

function ShoppingCar({ active }) {
  const [content, setContent] = useContext(CarContext);

  const removeItem = (id) => {
    setContent((c) => c.filter((i) => i.id !== id));
  };

  if (content.length === 0)
    return (
      <section
        style={{ overflow: "hidden" }}
        className={`shop-car ${active ? "visible" : "invisible"}`}
      >
        <div
          style={{ opacity: 0.5, marginTop: "15%" }}
          className="flex j-center align-center col"
        >
          <IconContext.Provider value={{ size: 35 }}>
            <MdRemoveShoppingCart />
          </IconContext.Provider>
          <p>Você ainda não adicionou nada ao carrinho...</p>
        </div>
      </section>
    );

  return (
    <section className={`shop-car ${active ? "visible" : "invisible"}`}>
      <ul>
        {content.map((item) => (
          <li>
            <CarItem {...item} removeItem={removeItem} />
          </li>
        ))}
      </ul>

      <Link to="/purchase">
        <div className="flex j-center">
          <button className="finish-button" disabled={content.length === 0}>
            Finalizar Orçamento
          </button>
        </div>
      </Link>
    </section>
  );
}

export default ShoppingCar;
