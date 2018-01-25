console.log("content.js GOGOGO!");

// Add a listener on the content 
chrome.runtime.onMessage.addListener(gotMessage);

const leftBarStr = 'Sidebar_sidebar_3X-DF';
const statusBannerStr = 'StatusBanner_status-view_2rGRs';
const orderBookPanelStr = 'OrderBookPanel_order-book-panel_L_2ZD';
const panelHeaderStr = 'PanelHeader_panel-header_18Etw';
const accountPanelBtnStr = 'AccountPanel_account-panel_2u2aK';
const gdaxLogoStr = 'Navbar_brand_2gRf8';
const navBarSpaceStr = 'Navbar_spacer_1-XWl';
const productSelectionStr = 'ProductSelection_choose-product_3ZOjB';
const openOrdersPanelStr = 'UserPanel_user-panel_W_gry UserPanel_view-only_2om96';



function gotMessage(request, sender, sendResponse){
	var leftBar = document.getElementsByClassName(leftBarStr);
	var statusBanner = document.getElementsByClassName(statusBannerStr);
	var orderBookPanel = document.getElementsByClassName(orderBookPanelStr);
	var openOrdersPanel = document.getElementsByClassName(openOrdersPanelStr);

	// Misc
	var accountPanelBtn = document.getElementsByClassName(accountPanelBtnStr);
	var gdaxLogo = document.getElementsByClassName(gdaxLogoStr);
	var navBarStace = document.getElementsByClassName(navBarSpaceStr);
	var productSelection = document.getElementsByClassName(productSelectionStr);

	var panelHeaderNL = document.querySelectorAll("." + panelHeaderStr);

	var elms = [];
	
	if (request.doThis != null && request.doThis === 'everything') {
		elms.push(leftBar[0]);
		elms.push(statusBanner[0]);
		elms.push(orderBookPanel[0]);
		elms.push(accountPanelBtn[0]);
		elms.push(gdaxLogo[0]);
		elms.push(navBarStace[0]);
		elms.push(productSelection[0]);
		elms.push(openOrdersPanel[0]);
		for (let a of panelHeaderNL) {
			elms.push(a);
		}
		removeStuffs(elms);
	}
}


function removeStuffs(stuffs) {
	console.log("removing %d elements...", stuffs.length);

	for (let stuff of stuffs) {
		stuff.remove();
		/*for (let elm of stuff) {
			elm.remove();
		}*/
	}
}
