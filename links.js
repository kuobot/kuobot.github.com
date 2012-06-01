<--- --------------------------------------------------------------------------------------- ----
	
	Blog Entry:
	Preventing Links In Standalone iPhone Applications From Opening In Mobile Safari
	
	Code Snippet:
	3
	
	Author:
	Ben Nadel / Kinky Solutions
	
	Link:
	http://www.bennadel.com/index.cfm?event=blog.view&id=2302
	
	Date Posted:
	Dec 27, 2011 at 10:06 AM
	
---- --------------------------------------------------------------------------------------- --->


// Listen for ALL links at the top level of the document. For
// testing purposes, we're not going to worry about LOCAL vs.
// EXTERNAL links - we'll just demonstrate the feature.
$( document ).on(
	"click",
	"a",
	function( event ){
 
		// Stop the default behavior of the browser, which
		// is to change the URL of the page.
		event.preventDefault();
 
		// Manually change the location of the page to stay in
		// "Standalone" mode and change the URL at the same time.
		location.href = $( event.target ).attr( "href" );
 
	}
);