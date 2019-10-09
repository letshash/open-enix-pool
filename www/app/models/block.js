import Ember from 'ember';

var Block = Ember.Object.extend({
	variance: Ember.computed('difficulty', 'shares', function() {
		var percent = this.get('shares') / this.get('difficulty');
		if (!percent) {
			return 0;
		}
		return percent;
	}),

	isLucky: Ember.computed('variance', function() {
		return this.get('variance') <= 1.0;
	}),

	isOk: Ember.computed('orphan', 'uncle', function() {
		return !this.get('orphan');
	}),

	formatReward: Ember.computed('reward', function() {
		if (!this.get('orphan')) {
			var value = parseInt(this.get('reward')) * 0.000000000000000001;
			return value.toFixed(6);
		} else {
		  return 0;
		}
	})
});

Ember.$.getJSON("https://api.coingecko.com/api/v3/coins/invacio?sparkline=true", function(data) {
	var price = `${data.market_data.current_price.usd}`;

	var usd = value * price;
	console.log(usd + " Reward Value in USD");

	$(".enixusdr").html(usd1);
});

export default Block;
