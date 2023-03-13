import { CardElement, PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import { axiosAuthInstance } from "../backend-calls/axiosInstance";

const CheckoutForm = () => {

  const [status, setStatus] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('errrrr')
    
    //     if (!stripe || !elements) {
    //         // Stripe.js has not yet loaded.
    //         // Make sure to disable form submission until Stripe.js has loaded.
    //         return;
    //     }
    // if (status !== '') {
    //   const result = await stripe.confirmCardPayment(clientSecret, {
    //     payment_method: {
    //       card: elements.getElement(CardElement),
    //       billing_details: {
    //         email: 'adityapatkar22@gmail.com',
    //       },
    //     },
    //     setup_future_usage : 'on_session'
    //   });
    //   if (result.error) {
    //     console.log(result.error.message);
    //     // Show error in payment form
    //   } else {
    //     console.log('Hell yea, you got that sub money!');
    //   }
    // } else {
    //   const result = await stripe.createPaymentMethod({
    //     type: 'card',
    //     card: elements.getElement(CardElement),
    //     billing_details: {
    //       email: 'adityapatkar22@gmail.com',
    //     },
    //   });

    //   if (result.error) {
    //     console.log(result.error.message);
    //     // Show error in payment form
    //   } else {
    //     const payload = {
    //       email: 'adityapatkar22@gmail.com',
    //       payment_method: result.paymentMethod.id,
    //       planName: 'Saber 1rs test subscription'
    //     };
        // Otherwise send paymentMethod.id to your server
        const res = await axiosAuthInstance.post('api/payment',{
          "planName" : "Saber 1rs test subscription"
        });
        window.location.href = res.data.url
        console.log(res)
        // eslint-disable-next-line camelcase
    //     const {client_secret, status} = res.data;

    //     if (status === 'requires_action') {
    //       setStatus(status);
    //       setClientSecret(client_secret);
    //       stripe.confirmCardPayment(client_secret,{
    //         payment_method: {card: CardElement},
    //         setup_future_usage : 'on_session'
    //       }).then(function(result) {
    //         if (result.error) {
    //           // Display error message in your UI.
    //           // The card was declined (i.e. insufficient funds, card has expired, etc)
    //           console.log(result.error.message);
    //         } else {
    //           // Show a success message to your customer
    //           console.log('Hell yea, you got that sub money!');
    //         }
    //       });
    //     } else {
    //       console.log('Hell yea, you got that sub money!');
    //     }
    //   }
    // }
    
    }

  return(
    <form onSubmit={handleSubmit}>
        <CardElement />
        {/* {status === 'requires_action' && <iframe src= title="description"></iframe>} */}
        <button onClick={handleSubmit}>Submit</button>
    </form>
  )
}

export default CheckoutForm;