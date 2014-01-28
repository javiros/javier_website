
function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}

$("#experience").click(function() {
   scrollToAnchor('experience');
});

$("#about").click(function() {
   scrollToAnchor('about');
});

$("#home").click(function() {
   scrollToAnchor('home');
});

