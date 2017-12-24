$(document).ready(function() {
    $("#collectionsPanel").hover(function() {
       $(".collectionsTxt").css("fill-opacity", 1); 
    }, function() {
        $(".collectionsTxt").css("fill-opacity", 0);
    });
    
    $("#aboutPanel").hover(function() {
       $(".aboutTxt").css("fill-opacity", 1); 
    }, function() {
        $(".aboutTxt").css("fill-opacity", 0);
    });
    
    $("#extraPanel").hover(function() {
       $(".extraTxt").css("fill-opacity", 1); 
    }, function() {
        $(".extraTxt").css("fill-opacity", 0);
    });
    
    $("#logofolioPanel").hover(function() {
       $(".logofolioTxt").css("fill-opacity", 1); 
    }, function() {
        $(".logofolioTxt").css("fill-opacity", 0);
    });
});