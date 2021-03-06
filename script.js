$(document).ready(function(){

    $(".add-button").click(function () {
        var productNumber =  $(this).siblings("input").val() ;
        productNumber++ ;
        $(this).siblings("input").val(productNumber) ;
    });

    $(".less-button").click(function () {

        var productNumber =  $(this).siblings("input").val() ;
        if(productNumber > 1){
            productNumber = parseInt(productNumber-1)
        $(this).siblings("input").val(productNumber) ;
        }

    });

    $(".delButton").click(function (e) {
        console.log(e.target.nodeName);
        var target = $(e.target).parent().parent().parent().parent().parent() ;
        var height = $(target).css("height") ;
        var product = $(this).parents(".product") ;
        height = height.replace("px", "");
        $(product).css("display","none") ;
        height = parseInt(height-180) ;
        $(target).css("height" , +height+"px") ;
        console.log(height);
        if(height <= 240){
            $(target).css("display","none") ;
        }
        $(product).removeClass("product") ;
        var pro = $(".product").length ;
        console.log(pro);
        $(".small-badge").html(pro);
    });

});