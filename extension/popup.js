// By Hannah Wei @herlifeinpixels
// Show recent DL on popup

var displayLimit = 10;

var showDownloads = {
	// Let's do this
	init: function() {
		var fileList = chrome.downloads.search({
			"limit" : displayLimit,
			"orderBy" : "-startTime"
		}, function (fileList) {
			//sort the thing by file type
			console.log(fileList);
		}
	)},
	
	// sort: function() {}
	
	// getfileIcon: function(
};

document.addEventListener('DOMContentLoaded', function () {
	showDownloads.init();
});