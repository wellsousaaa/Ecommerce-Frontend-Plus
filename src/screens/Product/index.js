import { useParams, withRouter } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import "./product.scss";
import Box from "../../components/Product";
import { CarContext } from "../../helpers/carContext";
import { getProduct, getProducts } from "../../helpers/products";

function ProductContainer(props) {
  const [Product, setProduct] = useState(null);
  const [Quantity, setQuantity] = useState(1);
  const [Index, setIndex] = useState(0);
  const [Recommendations, setRecommendations] = useState([]);

  const [content, setContent] = useContext(CarContext);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const productSelected = await getProduct(id);
      const products = await getProducts(4, true);

      setProduct((p) => productSelected || false);
      setRecommendations(products.data);
    };

    fetchData();
  }, [id]);

  const handlePurchase = () => {
    if (!content.find((item) => item.id === Product.id)) {
      setContent((cnt) => [...cnt, { ...Product, qntd: Quantity }]);
      props.history.push("/purchase");
    }
  };

  if (Product === false)
    return (
      <main>
        <h1> Product Not Found </h1>
      </main>
    );

  if (Product === null) return <main></main>;

  return (
    <main>
      <div className="flex item-info wrap" style={{ marginTop: 25 }}>
        <div className="flex img-container">
          <div className="flex side-img-container">
            {Product.image.map((img, i) => {
              return (
                <img
                  onClick={() => {
                    setIndex(i);
                  }}
                  style={
                    Index === i
                      ? { border: "2px solid black" }
                      : { border: "2px solid transparent" }
                  }
                  className="side-img"
                  src={`http://localhost:5000/api/media/${img}`}
                />
              );
            })}
          </div>
          <img
            className="item-img"
            src={`http://localhost:5000/api/media/${Product.image[Index]}`}
            alt={Product.title}
            title={Product.title}
          />
        </div>
        <div className="flex item-text">
          <h3>- {Product.title}</h3>
          <span style={{ fontSize: 10 }}>
            <b>Cod: </b> {Product.id} - <b>Qntd: </b> {Product.quantity}
          </span>
          <p className="item-description">{Product.description}</p>

          <div className="flex align-center add-button-container">
            <button onClick={handlePurchase} className="add-button">
              FINALIZAR COMPRA
            </button>
            <input
              value={Quantity}
              onChange={({ target }) => {
                if (target.value < Product.quantity && target.value >= 0)
                  setQuantity(target.value);
              }}
              type="number"
              min="1"
              max={Product.quantity}
            />
          </div>
        </div>
      </div>
      {/* <h2 style={{ textAlign: "center" }}>Características</h2>
      <Table characteristics={[]} /> */}

      <h1> Recomendados </h1>
      <div className="product-box-container flex even align-center wrap">
        {Recommendations.length === 0 ? (
          <>
            <Box placeholder={true} />
            <Box placeholder={true} />
            <Box placeholder={true} />
            <Box placeholder={true} />
          </>
        ) : (
          <>
            {Recommendations.map((item) => (
              <Box {...item} />
            ))}
          </>
        )}
      </div>
    </main>
  );
}

export default withRouter(ProductContainer);
