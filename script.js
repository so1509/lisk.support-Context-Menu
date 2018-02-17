function explorer(address,tab) {
  chrome.tabs.create({  
    url: "https://explorer.lisk.io/address/" + address.selectionText,
  });           
}
function sendWithNano(address,tab) {
  chrome.tabs.create({  
    url: "lisk://main/transaction/send?recipient=" + address.selectionText,
  });           
}

function voteManager(address,tab) {
  chrome.tabs.create({  
    url: "https://lisk.builders/votemanager/" + address.selectionText,
  });           
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