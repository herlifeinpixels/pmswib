// By Hannah Wei @herlifeinpixels
// Show recent DL on popup

var showDownloads = {
	// Let's do this
	init: function() {
		var fileList = chrome.downloads.search({
			"limit" : 10,
			"orderBy" : "-startTime"
		}, function (fileList) {
			//sort the thing by file type
			console.log(fileList);
		}
	)},
	
	// sort: function() {}
	
	
};

document.addEventListener('DOMContentLoaded', function () {
	showDownloads.init();
});