var everywhereDrop = $('#everywhere');
var everythingDrop = $('#everything');
var allTimeDrop = $('#allTime');
var scrollBut = $('#scrollTop');
var sortBut = $('#arrowSort');
var userCab = $('#userBut');
var filter = $('.filer');
var fancyBox = $('.fancybox');
var tabs = $('#tabs-block');
var tabsAdmin = $('#tabs-block-admin');



var scrollInit = function(elem){
    if(!elem.length > 0) {
        return;
    } else {
        elem.mCustomScrollbar({
            scrollbarPosition: 'inside',
            autoHideScrollbar: true,
            autoDraggerLength: false

        });
    }
};

userCab.bind('click', function(){

    var  but = this;
    if(!$(but).find('.user-cabinet__head').hasClass('active')) {
        $(but).find('.user-cabinet__head').addClass('active');
        $(but).find('.user-cabinet__menu').slideDown('slow');
    } else {
        $(but).find('.user-cabinet__menu').slideUp(function(){
            $(but).find('.user-cabinet__head').removeClass('active');
        });
    }

});

$(document).bind('mouseup resize',function (e){

    if (everywhereDrop.is(e.target)) {

        everywhereDrop.toggleClass('active');
    } else if(everywhereDrop.has(e.target).length !== 0) {
        if((e.target.nodeName.toLowerCase() == 'label') || $(e.target).hasClass('l-sort__header')) {
            everywhereDrop.find('.l-sort__header').html(e.target.innerHTML);
            everywhereDrop.toggleClass('active');
        }
    } else {
        everywhereDrop.removeClass('active');
    }

    if($(window).width()<960) {
        if (everythingDrop.is(e.target)) {

            everythingDrop.toggleClass('active');
        } else if (everythingDrop.has(e.target).length !== 0) {
            if ((e.target.nodeName.toLowerCase() == 'label') || $(e.target).hasClass('l-sort__header')) {
                everythingDrop.find('.l-sort__header').html(e.target.innerHTML);
                everythingDrop.toggleClass('active');
            }
        } else {
            everythingDrop.removeClass('active');
        }
    }
    if($(window).width()<700) {
        if (allTimeDrop.is(e.target)) {

            allTimeDrop.toggleClass('active');
        } else if (allTimeDrop.has(e.target).length !== 0) {
            if ((e.target.nodeName.toLowerCase() == 'label') || $(e.target).hasClass('l-sort__header')) {
                allTimeDrop.find('.l-sort__header').html(e.target.innerHTML);
                allTimeDrop.toggleClass('active');
            }
        } else {
            allTimeDrop.removeClass('active');
        }
    }
});

$(window).bind('scroll resize',function(){
    if( ($(this).scrollTop() > $(this).height()) && ( $(this).width() > 960)) {
        scrollBut.show();
    } else {
        scrollBut.hide();
    }
});

scrollBut.bind('click',function(){
    $('body').animate({scrollTop:0}, 500);
});

sortBut.bind('click',function(){
    $('body').animate({scrollTop: $('#sort').offset().top}, 500);
});

(function filInit(){
    if(!(filter.length > 0)) {
        return;
    } else {

        filter.selectize({
            create: true
        });
    }
})();


$(window).bind('load resize', function(){

   if(everywhereDrop.length>0) { scrollInit(everywhereDrop.find('.l-sort__list')); }

    if(everythingDrop.length>0) {
        if ($(window).width() < 960) {
            scrollInit(everythingDrop.find('.l-sort__list'));
        } else {
            everythingDrop.find('.l-sort__list').mCustomScrollbar('destroy');
        }
    }
    if(allTimeDrop.length>0) {
        if ($(window).width() < 700) {
            scrollInit(allTimeDrop.find('.l-sort__list'));
        } else {
            allTimeDrop.find('.l-sort__list').mCustomScrollbar('destroy');
        }
    }
});

(function fancyInit(){
    if(!(fancyBox.length > 0)) {
       return;
    } else {
        fancyBox.fancybox();
    }
})();

(function tabInit(){
    if(!(tabs.length > 0)) {
        return;
    } else {
        tabs.responsiveTabs({
            scrollToAccordion: true,
            rotate: false,
            animation: 'slide',
            startCollapsed: 'accordion',
            enabled: 0
        })
    }
})();

(function adminTabs(){
    if(!(tabsAdmin.length > 0)) {
        return;
    } else {
        tabsAdmin.responsiveTabs({
            scrollToAccordion: true,
            rotate: false,
            animation: 'slide',
            startCollapsed: 'accordion',
            enabled: 0
        })
    }
})();

