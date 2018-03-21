window.onload = function() {
	document.getElementById('donate').addEventListener('click', donate);
	document.getElementById('options').addEventListener('click', options);
	document.getElementById('lskImage').addEventListener('click', explorer);
}
document.addEventListener('DOMContentLoaded', function() {
	chrome.storage.sync.get({
		currency : 'usd'
	}, function(result) {
		var currencyConv = result.currency;
		var xhr = new XMLHttpRequest();
		var url = 'https://api.coinmarketcap.com/v1/ticker/lisk/?convert='
				+ currencyConv;
		xhr.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				var json = JSON.parse(this.responseText);
				jsonConvert(json);
			}
		};
		xhr.open("GET", url, true);
		xhr.send();
		function jsonConvert(json) {
			var lskToCur = round(json[0]['price_' + currencyConv.toLowerCase()], 4);
			var currencyCode = currencyConv.toUpperCase();
			var lskToBtc = round(json[0].price_btc, 6);

			// Number(Math.round(1.005+'e2')+'e-2');
			// // 1.01
			document.getElementById('currencyValue').innerHTML = lskToCur;
			document.getElementById('btcValue').innerHTML = lskToBtc;

			document.getElementById('currencyCode').innerHTML = currencyCode;
			document.getElementById('currencyCode1').innerHTML = currencyCode;
		}
	});
});

function round(value, decimals) {
	return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}
function donate(tab) {
	chrome.tabs.create({
		url : "lisk://main/transactions/send?recipient=5471811853702363574L",
	});
}
function options(tab) {
	chrome.tabs
			.create({
				url : "chrome-extension://nfgaafodnbacmnkjihomkkolbihcnohg/options.html",
			});
}
function explorer(tab) {
	chrome.tabs.create({
		url : "https://explorer.lisk.io/",
	});
}
