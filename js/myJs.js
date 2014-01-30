
function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}

$("#experience").click(function() {
   scrollToAnchor('experience');
});

$("#myexperience").click(function() {
   scrollToAnchor('experience');
});

$("#my_experience").click(function() {
   scrollToAnchor('experience');
});

$("#about").click(function() {
   scrollToAnchor('about');
});

$("#about_me").click(function() {
   scrollToAnchor('about');
});

$("#my_experience").click(function() {
   scrollToAnchor('experience');
});

$("#home").click(function() {
   scrollToAnchor('home');
});

$("#portfolio").click(function() {
   scrollToAnchor('portfolio');
});

$("#myportfolio").click(function() {
   scrollToAnchor('portfolio');
});

$("#my_portfolio").click(function() {
   scrollToAnchor('portfolio');
});

$("#contact").click(function() {
   scrollToAnchor('contact');
})

$("#button_contact").click(function() {
   scrollToAnchor('contact');
})



