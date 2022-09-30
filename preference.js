const mercadopago = require ('mercadopago');
// Add Your credentials
mercadopago.configure({
  access_token: 'APP_USR-415585518666585-050622-c17f7d6c3717b37130dca9668548c51e-119077743'
});

let preference = {
    items: [
      {
        title: 'PDF 0',
        unit_price: 100,
        quantity: 9999,
      }
    ],
    back_urls: {
      "success": "https://www.google.com",
      "pending":  "https://www.google.com",
      "failure":  "https://www.google.com",
    },
    redirect_urls: {
      "success": "https://www.google.com",
      "pending":  "https://www.google.com",
      "failure":  "https://www.google.com",
    },
    auto_return: "approved"
  };


mercadopago.preferences.create(preference)
.then(function(response){
// This value replaces the String "<%= global.id %>" in your HTML
  console.log(response.body)
}).catch(function(error){
  console.log(error);
});
