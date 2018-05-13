$(document).ready( function(){
    if( $(".progress").length ) {
        var bar = $(".progress");
        var total = bar.attr("data-total");
        var fill = bar.attr("data-fill");
        fill = (fill / total)*100;
        bar.find("div").css("width", fill+"%");
        
    }
});
