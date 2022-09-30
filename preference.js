const mercadopago = require ('mercadopago');
// Add Your credentials
mercadopago.configure({
  access_token: 'TEST-415585518666585-050622-932ce1a48342385a47c09514c5761af8-119077743'
});

let preference = {
    items: [
      {
        title: 'PDF',
        unit_price: 100,
        quantity: 9999,
      }
    ],
    back_urls: {
      "success": "https://casino-carlos.herokuapp.com/?status=pago"
  }
  };


mercadopago.preferences.create(preference)
.then(function(response){
// This value replaces the String "<%= global.id %>" in your HTML
  console.log(response.body.id)
}).catch(function(error){
  console.log(error);
});
