import { Redirect } from "react-router-dom";
import { CarContext } from "../../helpers/carContext";
import Payment from "../../components/Payment";
import { useContext, useState, useEffect } from "react";
import "./purchase.scss";

function Purchase() {
  const [Price, setPrice] = useState(0);
  const [Items] = useContext(CarContext);
  const [readyToPay, setReadyToPay] = useState(false);

  useEffect(
    () => () => {
      setReadyToPay(false);
    },
    []
  );

  useEffect(() => {
    setPrice((price) => {
      let newPrice = 0;
      Items.map((item) => {
        newPrice += item.price * item.qntd;
      });

      return newPrice;
    });
  }, [Items]);

  if (!Items.length) return <Redirect to="/" />;

  if (readyToPay) return <Payment price={Price} />;

  return (
    <main>
      <h1 style={{ margin: "40px auto" }}>
        Total: R${Price.toString().replace(".", ",")}
      </h1>
      {Items.map((item) => (
        <div
          className="flex between"
          style={{ margin: "25px auto", width: "75vw" }}
        >
          <img
            src={`http://localhost:5000/api/media/${item.image[0]}`}
            style={{ width: 100, height: 100, objectFit: "cover" }}
          />
          <p>{item.title}</p>
          <p>R${item.price.toString().replace(".", ",")}</p>
        </div>
      ))}

      <div className="flex j-center" style={{ marginBottom: 50 }}>
        <button
          className="pay-button"
          onClick={() => {
            setReadyToPay(true);
          }}
        >
          Pagar
        </button>
      </div>
    </main>
  );
}

export default Purchase;
