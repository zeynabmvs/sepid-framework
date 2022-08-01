/**
 * File customizer.js.
 *
 * Theme Customizer enhancements for a better user experience.
 *
 * Contains handlers to make Theme Customizer preview reload changes asynchronously.
 */

( function( $, api ) {
	'use strict';

	var $popup = $( '#newsletter-popup-modal' );
	var popupOpened = $popup.hasClass( 'open' );

	// Some handlers need to attach after previewer ready.
	api.on( 'preview-ready', function() {
		// Toggle the preloader when entering/leaving the section.

		// Toggle the poup when entering/leaving the section.
		api.preview.on( 'open_popup_previewer', function( data ) {
			if ( ! api( 'newsletter_popup_enable' ).get() ) {
				return;
			}

			if ( data.expanded ) {
				openPopup();
			} else if ( ! popupOpened ) {
				closePopup();
			}
		} );

	} );

	/** POPUP **/

	/**
	 * Open popup
	 */
	function openPopup() {
		if ( $popup.hasClass( 'open' ) ) {
			return;
		}

		$popup.fadeIn();
		$popup.addClass( 'open' );

		$( document.body ).addClass( 'modal-opened popup-opened' );
	}

	/**
	 * Close popup
	 */
	function closePopup() {
		$popup.removeClass( 'open' ).fadeOut();
		$( document.body ).removeClass( 'modal-opened popup-opened' );
	}

	/**
	 * Change popup image
	 *
	 * @param string image
	 */
	function changePopupImage( image ) {
		var el = $( '.newsletter-popup-image', $popup );

		if ( image ) {
			el.removeClass('no-image');

			if ( '1-column' === api( 'newsletter_popup_layout' ).get() ) {
				el.html( '<div class="newsletter-popup-image__holder" style="background-image: url(' + image + ')"></div>' );

			} else {
				el.html( '<img src="' + image + '">' );
			}
		} else {
			el.addClass('no-image').empty();
		}
	}

	function changePopupContent( content ) {
		var content = '<div class="newsletter-popup-content">'+ content +'</div>',
			layout = api( 'newsletter_popup_layout' ).get();

		if ( content ) {
			if ( '1-column' === layout && ! $('.newsletter-popup-image .newsletter-popup-content', $popup).length) {
				$( '.newsletter-popup-image', $popup ).append( content );

			} else if ('2-columns' === layout && ! $('.newsletter-popup-wrapper .newsletter-popup-content', $popup).length) {
				$( content ).insertBefore( $( '.newsletter-popup-form', $popup) )
			}
		}
	}

	// Toggle the popup when enable the option.
	api( 'newsletter_popup_enable', function( value ) {
		value.on( function( to ) {
			if ( to ) {
				openPopup();
			} else {
				closePopup();
			}
		} );
	} );

	api( 'newsletter_popup_layout', function( value ) {
		value.on( function( to ) {
			$popup.removeClass( 'newsletter-popup-layout-1-column newsletter-popup-layout-2-columns' ).addClass( 'newsletter-popup-layout-' + to );

			changePopupImage( api( 'newsletter_popup_image' ).get() );
			changePopupContent( api( 'newsletter_popup_content' ).get() );
		} );
	} );

	api( 'newsletter_popup_image', function( value ) {
		value.on( function( to ) {
			changePopupImage( to );
			changePopupContent( api( 'newsletter_popup_content' ).get() );
		} );
	} );

} )( jQuery, wp.customize );
