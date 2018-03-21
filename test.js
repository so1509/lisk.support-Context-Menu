$(function(){
	$('#spendAmount').click(function(){
		chrome.storage.sync.get('total', function(budget){
			var newTotal=0;
			if (budget.total){
				newTotal += parseInt(budget.total);
			}

			var amount = $('#amount').val();
			if(amount){
				newTotal += parseInt(amount);
			}
		chrome.storage.sync.set({'total':newTotal});

		$('#total').text(newTotal);
		$('#amount').val('');
		});
	});
});

function saveChanges() {
    // Get a value saved in a form.
    var theValue = textarea.value;
    // Check that there's some code there.
    if (!theValue) {
      message('Error: No value specified');
      return;
    }
    // Save it using the Chrome extension storage API.
    chrome.storage.sync.set({'value': theValue}, function() {
      // Notify that we saved.
      message('Settings saved');
    });
  }