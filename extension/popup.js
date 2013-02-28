// By Hannah Wei @herlifeinpixels
// Show recent DL on popup

var displayLimit = 50;

var showDownloads = {
	// Let's do this
	init: function() {
		var fileList = chrome.downloads.search({
			"limit" : displayLimit,
			"orderBy" : "-startTime"
		}, function (fileList) {
			fileList.sort(this.sortByType);
			console.log(fileList);
		}
	)},
	
	sortByType: function(file1, file2) {
		return (sort(file1.filename.split('.').pop() - file2.filename.split('.').pop()));
	}
	
	getfileIcon: function(file) {
		return "chrome://fileicon/" + file.filename + "?scale=1x";
	}
};

document.addEventListener('DOMContentLoaded', function () {
	showDownloads.init();
});