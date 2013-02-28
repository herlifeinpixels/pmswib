// By Hannah Wei @herlifeinpixels
// Show recent DL on popup

var displayLimit = 50;

var showDownloads = {

	init: function(callback) {
		// get array of latest downloads
		var fileList = chrome.downloads.search({
			"state" : "complete",
			"limit" : displayLimit,
			"orderBy" : "-startTime"
		}, function (fileList) {
			callback.call(fileList);
		}
	)}
};

document.addEventListener('DOMContentLoaded', function () {
	showDownloads.init(function() {
		
		// get icons by filetype, although we don't have permission to do this yet..
		function getIcon(file) {
			return "chrome://fileicon/" + file.filename + "?scale=1x";
		}
		
		// Sort downloads by file type, accending
		this.sort(function(a, b) {
			return a.filename.split('.').pop().localeCompare(b.filename.split('.').pop());
		});
		console.log(this);
		
		// Display files
		var items = [];
		$.each(this, function(i, item) {
			var fileName = item.filename.split('\\').pop();
			items.push('<li><img src="' + getIcon(item) + '"/>' + fileName + '</li>');
		});  // close each()
		
		$("#myFiles").append(items.join(''));
		
	});
});