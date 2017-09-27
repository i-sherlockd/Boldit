var css='body{font-style: italics;}'
var enable=true; 
//method to enable nightmode
function enableMode() {
	browser.tabs.insertCSS({code: css});
	enable=false;
}

//method to disable nightmode
function disableMode(){
	browser.tabs.removeCSS({code: css});
	enable=true;
}

//method to toggle mode
function toggleMode(tab){
	if(tab.url.indexof("https://en.wikipedia.org/*")!=-1){
		if(enable){
			enableMode();
		}else{
			disableMode();
		}
	
}
}


//event handler when you click the button in the toolbar
browser.pageAction.onClicked.addListener(toggleMode);