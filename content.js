console.log('chrome extension go?');

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(request, sender, sendResponse){
	console.log(request.txt);
}