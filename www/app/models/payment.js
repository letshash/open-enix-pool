import Ember from 'ember';

var Payment = Ember.Object.extend({
  formatAmount: Ember.computed('amount', function() {
    var value = parseInt(this.get('amount')) * 0.000000001;
    return value.toFixed(8);

    Ember.$.getJSON("https://api.coingecko.com/api/v3/coins/invacio?sparkline=true", function(data) {
      var price = `${data.market_data.current_price.usd}`;

      var usd = value * price;
      console.log(usd + " Value Mined");

      $(".enixusd").html(usd);
    });
  })
});

Ember.$.getJSON("https://api.coingecko.com/api/v3/coins/invacio?sparkline=true", function(data) {
  var price = `${data.market_data.current_price.usd}`;
  console.log(price + " Price From CoinGecko");

  var price2 = parseFloat(price).toFixed(3);
  console.log(price2 + " Rouded Price to 3 Decimals")

  var price3 = '$ ' + price2 + ' Per Enix'
  console.log(price3)

  $(".enixus").html(price3);
});

export default Payment;
