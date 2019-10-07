import Ember from 'ember';

var Payment = Ember.Object.extend({
  formatAmount: Ember.computed('amount', function() {
    var value = parseInt(this.get('amount')) * 0.000000001;
    return value.toFixed(8);
  })
});

$.getJSON("https://api.coingecko.com/api/v3/coins/invacio?sparkline=true", function(data) {
  var price = `${data.market_data.current_price.usd}`;

  var usdvalue = (Payment * price).toFixed(2);

  $(".enixusd").html(final);
});

export default Payment;
