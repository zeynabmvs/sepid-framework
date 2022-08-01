( function( $, api ) {
	'use strict';

	// Open popup when open the section popup
	api.section( 'newsletter_popup', function( section ) {
		section.expanded.on( function( isExpanded ) {
			api.previewer.send( 'open_popup_previewer', {expanded: isExpanded} );
		} );
	} );

} )( jQuery, wp.customize );