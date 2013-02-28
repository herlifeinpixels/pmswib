// By Hannah Wei @herlifeinpixels
// Show recent DL on popup

var showDownloads = {
	// Let's do this
	init: function() {
		var fileList = chrome.downloads.search(DownloadQuery {}, function (fileList) {
			//sort the thing
		}
	)},
	
	// sort: function() {}
	
	
};

document.addEventListener('DOMContentLoaded', function () {
	showDownloads.init();
});