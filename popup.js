window.onload = function() {
	document.getElementById('donate').addEventListener('click', donate);
	document.getElementById('options').addEventListener('click', options);
}

document.addEventListener("DOMContentLoaded", function() {
	var xhr = new XMLHttpRequest();
	var url = "https://api.coinmarketcap.com/v1/ticker/lisk/?convert=EUR";
	xhr.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var json = JSON.parse(this.responseText);
			myFunction(json);
		}
	};
	xhr.open("GET", url, true);
	xhr.send();

	function myFunction(arr) {
		var lskToCur = round(arr[0].price_eur, 4);
		var lskToBtc = round(arr[0].price_btc, 6);

		// Number(Math.round(1.005+'e2')+'e-2'); // 1.01
		document.getElementById('currency').innerHTML = lskToCur;
		document.getElementById('btc').innerHTML = lskToBtc;
	}
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
