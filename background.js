console.log("Background.js GOGOGO");


// Listens to the buttion on chrome being clicked.
chrome.browserAction.onClicked.addListener(buttonClicked);

// This function fires when buttom clicked.
function buttonClicked(tab){

	// Construct a message to be sent to chrome content.
	let msg = {
		txt: "hello",
		doThis: "everything"
	}

	// Send the message to the tab with id: tab.id, or you can send it to all tabs.
	chrome.tabs.sendMessage(tab.id, msg);
}


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(request.say);
    console.log(sender);
  });