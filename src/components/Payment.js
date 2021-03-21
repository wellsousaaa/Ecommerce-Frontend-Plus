import PaymentForm from "./PaymentForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const PUBLIC_KEY = process.env.STRIPE_PUBLIC_KEY;

const stripePromise = loadStripe(PUBLIC_KEY);

function Payment({ price }) {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm price={price} />
    </Elements>
  );
}

export default Payment;
