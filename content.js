console.log("content.js GOGOGO!");

// Add a listener on the content 
chrome.runtime.onMessage.addListener(gotMessage);

/* Deleting elements */
const leftBarStr = 'Sidebar_sidebar_3X-DF';
const statusBannerStr = 'StatusBanner_status-view_2rGRs';
const orderBookPanelStr = 'OrderBookPanel_order-book-panel_L_2ZD';
const panelHeaderStr = 'PanelHeader_panel-header_18Etw';
const accountPanelBtnStr = 'AccountPanel_account-panel_2u2aK';
const gdaxLogoStr = 'Navbar_brand_2gRf8';
const navBarSpaceStr = 'Navbar_spacer_1-XWl';
const productSelectionStr = 'ProductSelection_choose-product_3ZOjB';
const openOrdersPanelStr = 'UserPanel_user-panel_W_gry';

/* Beautify elements */
const chartStr = 'ChartPanel_chart-panel_2l4tM';
const topInfoOutterStr = 'Navbar_row_1C-84';
const topInfoInnerStr = 'Navbar_info-number-wrapper_VnPY0';
//const lastTradedPriceStr = 'MarketInfo_market-num_1lAXs';
//const lastTradedPriceTextStr = 'MarketInfo_market-descr_2lp4B';

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
		beautifyUI();

	}

	console.log("getting ready to send message to extension");
	//sendResponse({say:"goodbye"});
	chrome.runtime.sendMessage({say: "hello from content"}, function(response) {
		console.log("trying to log a response here");
	  console.log(response);
	});
}

function removeStuffs(stuffs) {
	console.log("removing %d elements...", stuffs.length);

	for (let stuff of stuffs) {
		if (stuff != undefined) {
			stuff.remove();
		}
	}
}

function beautifyUI() {
	var chart = document.getElementsByClassName(chartStr);
	var topInfoOutter = document.getElementsByClassName(topInfoOutterStr);
	var topInfoInner = document.getElementsByClassName(topInfoInnerStr);

	//chart[0].setAttribute("style", "display:none;");
	chart[0].setAttribute("style", "left:0;");
	topInfoOutter[0].setAttribute("style", "height:200px;");
	topInfoInner[0].setAttribute("style", "background-color:#15232c; padding-left:120px;");

	// Sorry I got really lazy, gonna use jQuery...

	// market info market
	$('.MarketInfo_market-info_3lkUj .MarketInfo_market-num_1lAXs').css({'font-size':'78px', 'font-weight':'normal', 'color':'#FFFFFF'});
	$('.MarketInfo_market-info_3lkUj .MarketInfo_market-descr_2lp4B').css({'font-size':'16px', 'font-weight':'normal', 'color':'#FFFFFF'});

	$('.MarketInfo_market-info_3lkUj li').css({'margin-right':'60px'}); // change topInfo li margin-right
	//$('.MarketInfo_market-num_1lAXs').css({'font-size':'48px', 'font-weight':'normal'});

	$('.MarketInfo_price-up_1nKzy .MarketInfo_market-num_1lAXs').css({'font-size':'48px', 'font-weight':'normal', 'color':'#44be24'});
	$('.MarketInfo_day-volume_16biA .MarketInfo_market-num_1lAXs').css({'font-size':'48px', 'font-weight':'normal', 'color':'#FFFFFF'});


}

function updateDiv(){
   //$(".ChartPanel_charts_1AFGo").load(window.location.href + " .ChartPanel_charts_1AFGo" );
}

