function isAddress(address) {
	result = false;
	if(/^\d+L$/.test(address)){
		result = true;
	}
	else{
		var notifOptions = {
                        type: "basic",
                        iconUrl: "favicon.png",
                        title: "Not a Lisk address!",
                        message: "Uh oh, that's not a valid Lisk address."
                    };
        chrome.notifications.create('limitNotif', notifOptions);
	}
	return result;
}

function explorer(address,tab) {
	if(isAddress(address.selectionText)){
		chrome.tabs.create({  
			url: "https://explorer.lisk.io/address/" + address.selectionText,
		});
	}
}

function sendWithNano(address,tab) {
	if(isAddress(address.selectionText.trim())){
		chrome.tabs.create({  
			url: "lisk://main/transactions/send?recipient=" + address.selectionText,
		});   
	}  
}

function voteManager(address,tab) {
	if(isAddress(address.selectionText)){
		chrome.tabs.create({  
			url: "https://lisk.builders/votemanager/" + address.selectionText,
		});
	}
}

chrome.contextMenus.create({
  title: "Block Explorer", 
  contexts:["selection"], 
  onclick: explorer,
});

chrome.contextMenus.create({
  title: "Vote Manager", 
  contexts:["selection"], 
  onclick: voteManager,
});

chrome.contextMenus.create({
  title: "Send LSK with Nano", 
  contexts:["selection"], 
  onclick: sendWithNano,
});	