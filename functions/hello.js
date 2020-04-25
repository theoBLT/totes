exports.handler = function(event, context, callback) {
    const { STRIPE_TEST_API_KEY } = process.env;
    callback(null, {
    statusCode: 200,
    body: `Stripe test API key is ${STRIPE_TEST_API_KEY}`
    });
}