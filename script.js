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
var value,value1,value2 ;
var val = 0 ;
var sum1,sum2,sum3 ;

var inpArr = [] ;
inputArray = Array.prototype.slice.call(input); 
inputArray.forEach((el,index) => {
    for (var i = index ; i <= index ; i++){
        inpArr.push(el) ; 
    }
});

console.log(inpArr);
value = inpArr[0] ;
value1 = inpArr[1] ;
value2 = inpArr[2] ;


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
var productOne = document.querySelector("#product1") ;
var productTwo = document.querySelector("#product2") ;
var productThree = document.querySelector("#product3") ;
var firstContain = document.querySelector(".container-first").style.height ;
firstContain = "600"
var secondContain = document.querySelector(".container-second").style.height ;
secondContain = "380" 
var firstProduct = document.querySelector(".container-first") ;
var secondProduct = document.querySelector(".container-second") ;
var productNumber = document.querySelectorAll('.product') ;
var length = 0 ;
var producntNumberArray = Array.prototype.slice.call(productNumber) ; 
var num = document.querySelector(".small-badge"); 

producntNumberArray.forEach(el => {
    var dis = el.style.display ;
    if(dis !== "none"){
        length++ ;
    }
});

function showNumber(){
    num.innerHTML = length ;
}


delButtonArray.forEach((el,index) => {
    el.addEventListener("click" , () => {
        if(index == 0){
            length-- ;
            showNumber() ;
            firstContain = parseInt(firstContain-180) ;
            productOne.style.display = "none" ;

            if(firstContain == 240){

                firstProduct.style.display = "none" ;
                document.querySelector(".container-first").style.height = firstContain ;

            }else{
                document.querySelector(".container-first").style.height = firstContain ;
            }
        }

        if(index == 1){
            length-- ;
            showNumber() ;
            firstContain = parseInt(firstContain-180) ;
            productTwo.style.display = "none" ;

            if(firstContain == 240){

                firstProduct.style.display = "none" ;
                document.querySelector(".container-first").style.height = firstContain ;

            }else{
                document.querySelector(".container-first").style.height = firstContain ;
            }
        }

        if(index == 2){
            length-- ;
            showNumber();
            secondContain = parseInt(secondContain-180) ;
            productThree.style.display = "none" ;

            if(secondContain == 200){

                secondProduct.style.display = "none" ;
                document.querySelector(".container-second").style.height = secondContain ;

            }else{
                document.querySelector(".container-second").style.height = secondContain ;
            }
        }
    })
});
