import Ember from 'ember';

var Payment = Ember.Object.extend({
  formatAmount: Ember.computed('amount', function() {
    var value = parseInt(this.get('amount')) * 0.000000001;
    return value.toFixed(8);
  })
});

Ember.$.getJSON("https://api.coingecko.com/api/v3/coins/invacio?sparkline=true", function(data) {
  var price = `${data.market_data.current_price.usd}`;

  var usdvalue = (Payment * price).toFixed(2);
  console.log(usdvalue);

  $(".enixusd").html(usdvalue);
});

Ember.$.getJSON("https://api.coingecko.com/api/v3/coins/invacio?sparkline=true", function(data) {
  var price2 = `${data.market_data.current_price.usd}`;
  console.log(price2);

  var price = '$ ' + price2.toFixed(3) + ' Per Enix'
  console.log(price)

  $(".enixus").html(price);
});

export default Payment;
