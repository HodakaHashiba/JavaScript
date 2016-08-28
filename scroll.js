var now_auto_scroll = false;

var mousewheelevent = 'onwheel' in document ? 'wheel' : 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll';
$(document).on(mousewheelevent,function(e){
    e.preventDefault();
    var delta = e.originalEvent.deltaY ? -(e.originalEvent.deltaY) : e.originalEvent.wheelDelta ? e.originalEvent.wheelDelta : -(e.originalEvent.detail);

    console.log("call");
    if(now_auto_scroll)return;

    console.log("in");

    var now_scrollTop = $(this).scrollTop();
    prev_scrollTop = now_scrollTop;
    if (delta < 0){
        //down
        console.log("down");
        now_auto_scroll = true;
        pageScroll($(window).height(), 2000);
    } else {
        //up
        console.log("up");
        now_auto_scroll = true;
        pageScroll($(window).height() * -1, 2000);
    }
});


var pageScroll = function(scroll_value, time){
  console.log("pageScroll in");
  var now_scrollTop = $(this).scrollTop();
  $("html").animate({scrollTop: now_scrollTop + scroll_value}, time, "swing", function(){console.log("done");now_auto_scroll = false;});
}
