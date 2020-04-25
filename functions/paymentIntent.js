exports.handler = function(event, context, callback) {
    const { STRIPE_TEST_API_KEY } = process.env;

    const stripe = require('stripe')(STRIPE_TEST_API_KEY);
    
    stripe.paymentIntents.create(
        {
          amount: 2000,
          currency: 'usd',
          payment_method_types: ['card'],
        },
        function(err, paymentIntent) {
          // asynchronously called
          console.log(JSON.stringify(paymentIntent))
        }
      );

    callback(null, {
    statusCode: 200,
    body: `Nothing to see here`,
    });
}