const mercadopago = require ('mercadopago');
// Add Your credentials
mercadopago.configure({
  access_token: 'TEST-415585518666585-050622-932ce1a48342385a47c09514c5761af8-119077743'
});

let preference = {
    id: '119077743-7ad9e49c-5efb-4c5e-9098-f65b398931b1',
    items: [
      {
        title: 'PDF - SEGREDO DO CASINO',
        unit_price: 100,
        quantity: 1,
      }
    ],
    back_urls: {
      "success": "https://casino-carlos.herokuapp.com/pago",
      "pending":  "https://www.google.com",
      "failure":  "https://www.google.com",
    },
    auto_return: "approved"
  };


mercadopago.preferences.update(preference)
.then(function(response){
// This value replaces the String "<%= global.id %>" in your HTML
  console.log(response.body)
}).catch(function(error){
  console.log(error);
});
