import { useState } from "react";
import axios from "axios";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";

const CARD_OPTIONS = {
  style: {
    base: {
      color: "#32325D",
      fontWeight: 500,
      fontFamily: "Source Code Pro, Consolas, Menlo, monospace",
      fontSize: "16px",
      fontSmoothing: "antialiased",

      "::placeholder": {
        color: "#CFD7DF",
      },
      ":-webkit-autofill": {
        color: "#e39f48",
      },
    },
    invalid: {
      color: "#E25950",

      "::placeholder": {
        color: "#FFCCA5",
      },
    },
  },
};

function PaymentForm(props) {
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const card = elements.getElement(CardNumberElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post(
          "http://localhost:5000/api/purchase",
          {
            amount: 0,
            id,
            itemsId: [1],
            receipt_email: "wendell-sousaferreira@hotmail.com",
          }
        );

        if (response.data.success) {
          setSuccess(true);
        }
      } catch (err) {
        window.alert("Ocorreu um erro no pagamento!");
      }
    } else {
      window.alert("Ocorreu um erro no pagamento!");
    }
  };

  return (
    <main>
      <h1> Pagamento </h1>
      <p style={{ textAlign: "center" }}>
        Para demonstração qualquer número de cartão irá funcionar!
      </p>
      {!success ? (
        <form
          onSubmit={handleSubmit}
          className="payment-form flex col align-center"
        >
          <fieldset className="FormGroup">
            <div className="FormRow">
              <CardNumberElement
                className="card"
                id="card_number"
                options={{ showIcon: true, ...CARD_OPTIONS }}
              />
            </div>
            <div className="FormRow">
              <CardExpiryElement
                className="card"
                id="card_expiry"
                options={CARD_OPTIONS}
              />

              <CardCvcElement
                className="card"
                id="card_cvc"
                options={CARD_OPTIONS}
              />
            </div>
          </fieldset>
          <button className="pay-button" style={{ width: "100%" }}>
            Pagar
          </button>

          <h4> Total: R${props.price.toString().replace(".", ",")}</h4>
        </form>
      ) : (
        <h2> Você acabou de comprar um item na Store+ </h2>
      )}
    </main>
  );
}

export default PaymentForm;
