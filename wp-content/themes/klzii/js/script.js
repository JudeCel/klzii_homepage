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
    var windowW = $(window).width();
    var maxHeight = 0;
    /* End Of Equal Height */
    $(window).resize(function() {
        if($(window).width() >= 1139) {
            maxHeight = 0;
            $(".coloredBox .coloredBoxInner .bottom").each(function(){
                if ($(this).height() > maxHeight) { maxHeight = $(this); }
            });
            $(".coloredBox .coloredBoxInner .bottom").height(maxHeight.height());
        } else
        if($(window).width() >= 1024) {
            maxHeight = 0;
            $(".coloredBox .coloredBoxInner .bottom").each(function(){
                if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
            });
            $(".coloredBox .coloredBoxInner .bottom").height(maxHeight);
        } else if(windowW >= 756) {
            $(".coloredBox .coloredBoxInner .bottom").height('auto');
        }
    });

    $('.overlay-box .close-box,.overlay-box .overlay').click(function(){
        $('.overlay-box').css('display','none');
    });

    $('.start-free-trial-popup').click(function(e){
        e.preventDefault();
        $('#input_7_6').val($(this).attr('data-plan'));
        var TopPosition = $(document).scrollTop();
        if(windowW <= 758) {
            TopPosition = TopPosition - 180;
        }
        $('.overlay-box .start-your-free-trial').css('top',TopPosition);
        $('.overlay-box').css('display','block');
    });

    if(windowW >= 1024) {
        maxHeight = 0;
        $(".coloredBox .coloredBoxInner .bottom").each(function(){
            if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
        });
        maxHeight = maxHeight + 86;
        $(".coloredBox .coloredBoxInner .bottom").height(maxHeight);
    } else if(windowW >= 756) {
        $(".coloredBox .coloredBoxInner .bottom").height('auto');
    }

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