const mercadopago = require ('mercadopago');
// Add Your credentials
mercadopago.configure({
  access_token: 'APP_USR-415585518666585-050622-c17f7d6c3717b37130dca9668548c51e-119077743'
});

let preference = {
    items: [
      {
        title: 'PDF',
        unit_price: 100,
        quantity: 9999,
      }
    ]
  };


mercadopago.preferences.create(preference)
.then(function(response){
// This value replaces the String "<%= global.id %>" in your HTML
  console.log(response.body.id)
}).catch(function(error){
  console.log(error);
});
