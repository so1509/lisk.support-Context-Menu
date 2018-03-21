window.onload = function() {
	document.getElementById('save').addEventListener('click', save_options);
}
// Saves options to chrome.storage
function save_options() {
	var currencyToSave = document.getElementById('currency').value;
	var storedLSKAdd = document.getElementById('storedLSKAdd').value;
	chrome.storage.sync.set({
		currency : currencyToSave,
		storedLSKAdd : storedLSKAdd
	}, function() {
		// Update status to let user know options were saved.
		var status = document.getElementById('status');
		status.textContent = 'Options saved.';
		setTimeout(function() {
			status.textContent = '';
		}, 750);
	});
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
	// Use default value currency = 'USD' if none specified yet
	chrome.storage.sync.get({
		currency : 'usd', storedLSKAdd:'Your LSK Adress'
	}, function(result) {
		var storedCurrency = result.currency.toUpperCase();
		document.getElementById('currency').value = storedCurrency;
		
		var storedLSKAdd = result.storedLSKAdd;
		document.getElementById('storedLSKAdd').value = storedLSKAdd;
	});
}
document.addEventListener('DOMContentLoaded', restore_options);
