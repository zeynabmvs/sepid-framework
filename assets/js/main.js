(function ($) {
    'use strict';

    var sepid = sepid || {};
    sepid.init = function () {
        sepid.$body = $(document.body),
        sepid.$window = $(window),
        sepid.$header = $('#site-header');

        // Common
        this.toggleModals();
        this.customizeStyles();
        this.menuToggleDropDown();
        this.backToTop();

    };

    sepid.toggleModals = function () {
        sepid.$body.on('click', '[data-toggle="modal"]', function (event) {
            var target = '#' + $(this).data('target');

            if ($(target).hasClass('open')) {
                sepid.closeModal(target);
            } else if (sepid.openModal(target)) {
                event.preventDefault();
            }

        }).on('click', '.sepid-modal .button-close, .sepid-modal .off-modal-layer', function (event) {
            event.preventDefault();
            sepid.closeModal(this);
        }).on('keyup', function (e) {
            if (e.keyCode === 27) {
                sepid.closeModal();
            }
        });
    };

    sepid.openModal = function (target) {
        var $target = $(target);

        if (!$target.length) {
            return false;
        }

        $target.fadeIn();
        $target.addClass('open');

        sepid.$body.addClass('modal-opened ' + $target.attr('id') + '-opened').trigger('sepid_modal_opened', [$target]);

        if( $target.attr('id') == 'search-modal' ) {
            $('.sepid-search-modal .search-field').focus();
        } else if( $target.attr('id') == 'account-modal' ) {
            $('.woocommerce-account .input-text[name="username"]').focus();
        }

        var widthScrollBar = window.innerWidth - document.documentElement.clientWidth;
        if( document.documentElement.clientWidth < 767 ) {
            widthScrollBar = 0;
        }
        sepid.$body.css({'padding-right': widthScrollBar, 'overflow': 'hidden'});

        return true;
    }

    sepid.closeModal = function (target) {
        if (!target) {
            $('.sepid-modal').removeClass('open').fadeOut();

            $('.sepid-modal').each(function () {
                var $modal = $(this);

                if (!$modal.hasClass('open')) {
                    return;
                }

                $modal.removeClass('open').fadeOut();
                sepid.$body.removeClass($modal.attr('id') + '-opened');
            });
        } else {
            target = $(target).closest('.sepid-modal');
            target.removeClass('open loaded').fadeOut();

            sepid.$body.removeClass(target.attr('id') + '-opened');
        }

        sepid.$body.removeAttr('style');
        sepid.$header.removeAttr('style');

        sepid.$body.removeClass('modal-opened').trigger('sepid_modal_closed', [target]);
    }

    sepid.customizeStyles = function() {
        sepid.$window.on('resize', function () {
            if (sepid.$window.width() < 601) {
                $('#wpadminbar').css('z-index', '999');
            } else {
                $('#wpadminbar').removeAttr('style');
            }
        }).trigger('resize');

        sepid.$body.find('.spd-nav .menu-item-has-children > a').prepend('<span class="toggle-menu-arrow"><span class="spd-svg-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></span></span>')
    }

    sepid.backToTop = function () {
        var $scrollTop = $('#gotop');

        sepid.$window.on('scroll', function () {
            if (sepid.$window.scrollTop() > sepid.$window.height()) {
                $scrollTop.addClass('show-scroll');
            } else {
                $scrollTop.removeClass('show-scroll');
            }
        });

        sepid.$body.on('click', '#gotop', function (e) {
            e.preventDefault();

            $('html, body').animate({scrollTop: 0}, 800);
        });
    }


    // Toggle Menu Sidebar
    sepid.menuToggleDropDown = function () {
        var $menutoggle = $('.menu-toggle-dropdown')

        // $menutoggle.find('.nav-menu .menu-item-has-children > a').prepend('<span class="toggle-menu-arrow"><span class="spd-svg-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></span></span>');

        // $menutoggle.find('.menu-item-has-children').removeClass('active');
        // $menutoggle.find('li.menu-item-has-children').on('click', function (e) {
        //     e.preventDefault();
        //     $(this).closest('li').siblings().find('ul.sub-menu, ul.dropdown-submenu').slideUp();
        //     $(this).closest('li').siblings().removeClass('active');
        //
        //     $(this).closest('li').children('ul.sub-menu, ul.dropdown-submenu').slideToggle();
        //     $(this).closest('li').addClass('active');
        //     return false;
        // });


    };


    $(function () {
        sepid.init();
    });

})(jQuery);
