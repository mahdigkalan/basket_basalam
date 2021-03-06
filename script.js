// $(document).ready(function(){

//     $(".add-button").click(function () {
//         var productNumber =  $(this).siblings("input").val() ;
//         productNumber++ ;
//         $(this).siblings("input").val(productNumber) ;
//     });

//     $(".less-button").click(function () {

//         var productNumber =  $(this).siblings("input").val() ;
//         if(productNumber > 1){
//             productNumber = parseInt(productNumber-1)
//         $(this).siblings("input").val(productNumber) ;
//         }

//     });


//     $(".delButton").click(function (e) {
//         console.log(e.target.nodeName);
//         var target = $(e.target).parent().parent().parent().parent().parent() ;
//         var height = $(target).css("height") ;
//         var product = $(this).parents(".product") ;
//         height = height.replace("px", "");
//         $(product).css("display","none") ;
//         height = parseInt(height-180) ;
//         $(target).css("height" , +height+"px") ;
//         console.log(height);
//         if(height <= 240){
//             $(target).css("display","none") ;
//         }
//         $(product).removeClass("product") ;
//         var pro = $(".product").length ;
//         console.log(pro);
//         $(".small-badge").html(pro);
//     });

// });

var button = document.querySelectorAll(".add-button") ;
var buttonLess = document.querySelectorAll(".less-button") ;
var input = document.querySelectorAll(".inp") ;
var value = document.querySelector("#inp1") ;
var value1 = document.querySelector("#inp2") ;
var value2 = document.querySelector("#inp3") ;
var val = 0 ;
var sum1,sum2,sum3 ;

var buttonArray = Array.prototype.slice.call(button);
var buttonLessArray = Array.prototype.slice.call(buttonLess);
var inputAarray = Array.prototype.slice.call(input);


inputAarray.forEach((el,index) => {
    val = el.value ;
    if(index == 0){
        sum1 = val ;
    }
    if(index == 1 ){
        sum2 = val ;
    }
    if(index == 2){
        sum3 = val ;
    }   
});

var set,set2 ; 
buttonArray.forEach((el,index) => {
    el.addEventListener("click", ()=>{
        if (index == 0){
                sum1++ ;
                value.value = sum1 ;
            }
            if(index == 1 ){
                sum2++ ;
                value1.value = sum2 ;
            }
            if(index == 2){
                sum3++ ;
                value2.value = sum3 ;
            }
    })
    el.addEventListener("mousedown", () => {
        set = setInterval(function addPerSecond(){
            if (index == 0){
                sum1++ ;
                value.value = sum1 ;
            }
            if(index == 1 ){
                sum2++ ;
                value1.value = sum2 ;
            }
            if(index == 2){
                sum3++ ;
                value2.value = sum3 ;
            }
        },100)

        

    })

    el.addEventListener("mouseup", ()=>{
        clearInterval(set) ;
    })
});

buttonLessArray.forEach((el,index) => {
    el.addEventListener("click", () => {
        if (index == 0){
            if(sum1  > 1){sum1-- ;
                value.value = sum1 ;
            }
        }
        if(index == 1 ){
            if(sum2  > 1){sum2-- ;
                value1.value = sum2 ;
            }
        }
        if(index == 2){
            if(sum3  > 1){sum3-- ;
                value2.value = sum3 ;
            }
        }

    })

    el.addEventListener("mousedown", ()=>{
        set2 = setInterval(function addPerSecond(){
            if (index == 0){
                if(sum1  > 1){sum1-- ;
                value.value = sum1 ;}
            }
            if(index == 1 ){
                if(sum2  > 1){sum2-- ;
                value1.value = sum2 ;}
            }
            if(index == 2){
                if(sum3  > 1){sum3-- ;
                value2.value = sum3 ;}
            }
        },100)
    })

    el.addEventListener("mouseup", ()=>{
        clearInterval(set2) ;
    })
});


var delButton = document.querySelectorAll(".delButton") ;
var delButtonArray = Array.prototype.slice.call(delButton) ; 
var firstContain = document.querySelector(".container-first") ;

delButtonArray.forEach((el,index) => {
    el.addEventListener("click" , () => {
        if(index == 1){
            console.log("hello world");
            console.log(firstContain.style.height);
        }
    })
});
