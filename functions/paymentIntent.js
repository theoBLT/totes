exports.handler = function(event, context, callback) {
    const { STRIPE_TEST_API_KEY } = process.env;

    const stripe = require('stripe')(STRIPE_TEST_API_KEY);
    const getServerSidePropos = async () => {

        const paymentIntent = await stripe.paymentIntents.create({
            payment_method_types: ['fpx'],
            amount: 1099,
            currency: 'myr',
          });

          return paymentIntent

    }
      
    
    callback(null, {
    statusCode: 200,
    body: JSON.stringify(paymentIntent),
    });
}