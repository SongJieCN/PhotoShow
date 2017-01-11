$(".card.first").on('swipeleft', function(){
    $(".card.second").removeClass("moveTop");
    $(".card.first").removeClass("moveBot");
    $(".card.first").addClass("moveTop");
    $(".card.second").addClass("moveBot");
})

$(".card.second").on('swipeleft', function(){
    $(".card.first").removeClass("moveTop");
    $(".card.second").removeClass("moveBot");
    $(".card.second").addClass("moveTop");
    $(".card.first").addClass("moveBot");
})