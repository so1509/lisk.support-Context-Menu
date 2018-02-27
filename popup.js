document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("donation").addEventListener("click", donate);
});
function donate(tab) {
		chrome.tabs.create({  
			url: "lisk://main/transactions/send?recipient=5471811853702363574L"
		});   
	  
}
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("send").addEventListener("click", send);
});
function send(tab) {
		chrome.tabs.create({  
			url: "lisk://main/transactions/send"
		});   
	  
}

