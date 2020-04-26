/*
*
* This function creates a payment intent for an item
* @see https://stripe.com/docs/api/payment_intents?lang=node
*
*/

const stripe = require('stripe')(process.env.STRIPE_TEST_API_KEY);

exports.handler = async (event) =>{

    const paymentIntent = await stripe.paymentIntents.create(
        {
          amount: 2000,
          currency: 'usd',
          payment_method_types: ['card'],
        })

    console.log(paymentIntent.id)

    return {
        statusCode: 200,
        body: JSON.stringify(paymentIntent.id)
    };

}

