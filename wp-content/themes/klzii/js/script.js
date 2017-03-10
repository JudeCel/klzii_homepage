equalheight = function(container){

    var currentTallest = 0,
    currentRowStart = 0,
    rowDivs = new Array(),
    $el,
    topPosition = 0;
    $(container).each(function() {

        $el = $(this);
        $($el).height('auto');
        topPostion = $el.position().top;

        if (currentRowStart != topPostion) {
            for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }
            rowDivs.length = 0; // empty the array
            currentRowStart = topPostion;
            currentTallest = $el.height();
            rowDivs.push($el);
        } else {
            rowDivs.push($el);
            currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
        }
        for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
            rowDivs[currentDiv].height(currentTallest);
        }
    });
}
/* DELETES EMPTY P TAGS */
function removeEmptyP() {
    var pTag = $('p:empty');
    if( pTag.length !== 0 ){
        pTag.remove();
    }
}


$(document).ready(function(){
    /* For Equal Height */
    equalheight('.coloredBox-line .item, .iconBox-text .item');
    var windowW = $(window).width(),
        checker = 0;
   /* var equalHeightEl1 = $('.coloredBox-line .item'),
        equalHeightEl2 = $('.iconBox-text .item');*/
    $(window).resize(function() {
        windowW         = $(window).width();
        var counter         = 0;
        var counterLimit    = $('.price .item:first-of-type .body ul li').length + 1;
        if( windowW <= 767 ){
            /*equalHeightEl1.removeAttr('style');
            equalHeightEl2.removeAttr('style');*/
            $('.coloredBox-line .item, .iconBox-text .item, .price .item .body ul li').removeAttr('style');
        }else if( windowW > 767){
            equalheight('.coloredBox-line .item, .iconBox-text .item');
            if(checker == 0){
                checker = 1;
                do {
                    equalheight('.price .item .body ul li:nth-of-type('+counter+')');
                    if(counter == (counterLimit - 1) ){ checker = 0; }
                    counter++;
                }while(counter < counterLimit);
            }
        }
    });
    /* End Of Equal Height */

    removeEmptyP();

    var itemCollapse = $('.itemCollapse');
    if( itemCollapse.length !== 0 ){
        $('.itemCollapse .bottomCollapse.active').css({ display: 'block' });
        $('.itemCollapse .header').click(function(){
            var el = $(this).next('.bottomCollapse');
            if( el.hasClass('active') ){
                el.slideUp();
                el.removeClass('active');
            }else{
                el.slideToggle();
            }
        });
    }

});
$(window).load(function(){
    windowW         = $(window).width();
    if( windowW > 767 ){
        /* For Equal Height */
        equalheight('.coloredBox-line .item, .iconBox-text .item');
        var counter         = 0;
            counterLimit    = $('.price .item:first-of-type .body ul li').length + 1;
        do {
            equalheight('.price .item .body ul li:nth-of-type('+counter+')');
            counter++;
        }while(counter < counterLimit);
        /* End Of Equal Height */
    }
    $('.price .item .body ul li').hover(function(){
        var index = $(this).index() + 1;
        if(index > 1){$('.price .item .body ul li:nth-of-type('+index+')').addClass('active');}
    },function(){
        var index = $(this).index() + 1;
        if(index > 1){$('.price .item .body ul li:nth-of-type('+index+')').removeClass('active');}
    });
});



//inlinemanual js script
window.inlineManualOptions = { language: 'en'};
!function(){var e=document.createElement("script"),t=document.getElementsByTagName("script")[0];e.async=1,e.src="https://inlinemanual.com/embed/player.4d477842920267622ba2d80045849e23.js",e.charset="UTF-8",t.parentNode.insertBefore(e,t)}();