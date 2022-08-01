jQuery( function( $ ) {
	'use strict';

	var $box = $( '#header-settings' );

	// Toggle header background field
	$( '#rz_header_background' ).on( 'change', function( event ) {
		var $el = $( this );

		if ( $el.val() === 'transparent' ) {
			$( '.header-text-color', $box ).removeClass( 'hidden' );
		} else {
			$( '.header-text-color', $box ).addClass( 'hidden' );
		}

		if ( $el.val() === 'transparent' ) {
			$( '.header-background-color', $box ).removeClass( 'hidden' );
		} else {
            $( '.header-background-color', $box ).addClass( 'hidden' );
        }
	} ).trigger( 'change' );

	// Toggle spacing fields
	$( '#rz_content_top_spacing, #rz_content_bottom_spacing' ).on( 'change', function() {
		var $el = $( this );

		if ( 'custom' === $el.val() ) {
			$el.closest( '.rwmb-field' ).next( '.custom-spacing' ).slideDown();
		} else {
			$el.closest( '.rwmb-field' ).next( '.custom-spacing' ).slideUp();
		}
	} ).trigger( 'change' );

	// Toggle spacing fields
	$( '#rz_page_header_spacing' ).on( 'change', function() {
		var $el = $( this );

		if ( 'custom' === $el.val() ) {
			$el.closest( '.rwmb-meta-box' ).find( '.custom-page-header-spacing' ).slideDown();
		} else {
			$el.closest( '.rwmb-meta-box' ).find( '.custom-page-header-spacing' ).slideUp();
		}
	} ).trigger( 'change' );

	// Toggle spacing fields
	$( '#rz_footer_section_border_color' ).on( 'change', function() {
		var $el = $( this );

		if ( 'custom' === $el.val() ) {
			$el.closest( '.rwmb-meta-box' ).find( '.footer-section-custom-border-color' ).slideDown();
		} else {
			$el.closest( '.rwmb-meta-box' ).find( '.footer-section-custom-border-color' ).slideUp();
		}
	} ).trigger( 'change' );
} );
