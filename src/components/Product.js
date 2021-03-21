import { useState, useContext, useEffect } from "react";
import { CarContext } from "../helpers/carContext";
import { Link } from "react-router-dom";
import "../styles/product.scss";
import { IconContext } from "react-icons";
import { TiShoppingCart } from "react-icons/ti";

function Product({
  id,
  title,
  image,
  description,
  placeholder,
  active,
  price = 0,
}) {
  const [isActive, setIsActive] = useState(active);
  const [content, setContent] = useContext(CarContext);

  useEffect(() => {
    const existentProduct = content.find((i) => i.id === id);

    setIsActive(!!existentProduct);
  }, [content]);

  const changeActive = () => {
    const existentProduct = content.find((i) => i.id === id);
    if (existentProduct) {
      const newContent = content.filter((i) => i.id !== id);

      setContent(newContent);
      setIsActive(false);
    } else {
      setContent((cnt) => [
        ...cnt,
        { id, title, price, quantity: 1, description, image: image[0] },
      ]);
      setIsActive(true);
    }
  };

  return (
    <div className={`product-box ${placeholder ? "product-placeholder" : ""}`}>
      {/* {placeholder ? null : (
        <div style={{ position: "absolute", zIndex: 99, padding: 10 }}>
          <IconContext.Provider
            value={{
              size: 30,
              className: isActive ? "product-car-active" : "product-car",
            }}
          >
            <TiShoppingCart onClick={changeActive} />
          </IconContext.Provider>
        </div>
      )} */}
      <Link
        to={`/produto/${
          title ? title.replaceAll(" ", "_").toLowerCase() : title
        }/${id}`}
        style={placeholder ? { pointerEvents: "none" } : { zIndex: 98 }}
      >
        <div className="flex j-center" style={{ overflow: "hidden" }}>
          {!placeholder ? (
            <div
              className="product-img"
              style={{
                "--img1": `url(http://localhost:5000/api/media/${image[0]})`,
                "--img2": `url(http://localhost:5000/api/media/${image[1]})`,
              }}
              alt={title}
            />
          ) : (
            <div
              className="place-img"
              style={{ marginTop: 15, width: "90%", height: 310 }}
            />
          )}
        </div>
        <div className="product-box-info">
          <p style={{ minHeight: 38, maxHeight: 38 }}>
            {title || "placeholder placeholder place"}
          </p>
          <div
            className="flex"
            style={{ width: "90%", justifyContent: "flex-end" }}
          >
            {Math.random() > 0.7 ? (
              <i className="price">
                {Math.round((Math.random() * 100) / 2)}% off
              </i>
            ) : null}
            <i>
              <b style={{ color: "#3e2264" }}>
                R${price.toString().replace(".", ",")}
              </b>
            </i>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Product;
