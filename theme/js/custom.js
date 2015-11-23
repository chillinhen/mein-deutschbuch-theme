jQuery(function ($) {
    
    /*** if AdBlocker is active ***/
      if( !(window.canRunAds === undefined) ){
        // adblocker detected, show fallback
        //alert('ads');
        //$('.leader-board-wallpaper, #main-nav, #main .mod_article').addClass('move-leaderboard');
        $('.custom, #wrapper, .netpoint-billboard, #main, #footer').addClass('if-has-ads');
      }
    
    
    //add target _blanl to external links
    $('a').filter(function () {
        return this.hostname && this.hostname !== location.hostname;
    }).attr("target", "_blank");
    
    // Toggle contents
    $();
    $('.ce_headline.toggle').each(function () {
        $(this).next('.flex-container').addClass('hidden');
        $(this).click(function () {
            $(this).next().toggleClass('hidden');
        });
    });
});
/** Table of contents***/
jQuery(function ($) {

    
    $('a.show-link').each(function () {
        var str = $(this).attr('href');
        str = /#(.+)/.exec(str)[1];
        var newStr = '#' + str;
        //alert(newStr);
        $(this).data('target', newStr);
    });
    $('.ce_table-of-contents').attr('id', 'toc');
    var toc = $('#toc');
    toc.removeClass('block');
    toc.parent('div').affix({
        offset: {
            top: $('#toc').offset().top
        }
    });

    toc.children('ul.level_1')

            .addClass('nav')
            .wrap('<div class="scrollspy"></div>');
    
   
});

/** Scroll to Top***/
/**Check to see if the window is top if not then display button**/
jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > 100) {
        jQuery('.scroll-to-top').fadeIn();
        jQuery('#main-nav').addClass('navbar-fixed-top');
        jQuery('#side-nav.mod_navigation').addClass('fixed');
        
    } else {
        jQuery('.scroll-to-top').fadeOut();   
        jQuery('#main-nav').removeClass('navbar-fixed-top');
        jQuery('#side-nav.mod_navigation').removeClass('fixed');
    }
});

//Click event to scroll to top
jQuery('.scroll-to-top').click(function () {
    jQuery('html, body').animate({scrollTop: 0}, 800);
    return false;
});