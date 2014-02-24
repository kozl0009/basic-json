// Onload Setup click events
$(document).ready(function() {
	doPager();
});


// Get links from paginated a tags
// onclick get href value and pass it to the jquery load function
function doPager() {
 $('.pager a').click(function(e) {
  e.preventDefault();
  loadProducts($(this).attr('href'));
 });
}

// empty elements from #inner div, add loading class, load in elements from link #inner div, remove loading class when complete.
function loadProducts(url) {
 $('#inner').empty().addClass('loading').load(url + ' #inner', function() {
  $('#inner').removeClass();
 });
}

