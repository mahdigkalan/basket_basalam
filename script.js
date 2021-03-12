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


// var button = document.querySelectorAll(".add-button") ;
// var buttonLess = document.querySelectorAll(".less-button") ;
// var input = document.querySelectorAll(".inp") ;
// var value,value1,value2 ;
// var val = 0 ;
// var sum1,sum2,sum3 ;

// var inpArr = [] ;
// inputArray = Array.prototype.slice.call(input); 
// inputArray.forEach((el,index) => {
//     for (var i = index ; i <= index ; i++){
//         inpArr.push(el) ; 
//     }
// });

// value = inpArr[0] ;
// value1 = inpArr[1] ;
// value2 = inpArr[2] ;


// var buttonArray = Array.prototype.slice.call(button);
// var buttonLessArray = Array.prototype.slice.call(buttonLess);
// var inputAarray = Array.prototype.slice.call(input);


// inputAarray.forEach((el,index) => {
//     val = el.value ;
//     if(index == 0){
//         sum1 = val ;
//     }
//     if(index == 1 ){
//         sum2 = val ;
//     }
//     if(index == 2){
//         sum3 = val ;
//     }   
// });

// var finalcost = document.querySelectorAll(".final-cost") ;
// var finalcostArray = Array.prototype.slice.call(finalcost); 
// var costArr = [] ;
// finalcostArray.forEach(el => {
//     costArr.push(el) ;
// });

// var costs = [225000,15000,225000] ;
// function findCost(num,count){
//     var constC = parseInt(costArr[num].firstElementChild.innerHTML) ;
//     var final = constC * count ;

//     if(num == 0){
//         costs.splice(0,1,final)
//     }
//     if(num == 1){
//         costs.splice(1,1,final)
//     }
//     if(num == 2){
//         costs.splice(2,1,final)
//     }

//     var factorOne = document.getElementsByClassName("factor")[0].innerHTML ;
//     factorOne = costs[0]+costs[1] ;
//     document.getElementsByClassName("factor")[0].innerHTML = factorOne ;

//     var factorTwo = document.getElementsByClassName("factor")[1].innerHTML ;
//     factorTwo = costs[2] ;
//     document.getElementsByClassName("factor")[1].innerHTML = factorTwo ;

//     var factorThree = document.getElementsByClassName("factor")[2].innerHTML ;
//     factorThree = factorOne + factorTwo ;
//     document.getElementsByClassName("factor")[2].innerHTML = factorThree ;
// }

// var set,set2 ; 
// buttonArray.forEach((el,index) => {
//     el.addEventListener("click", ()=>{
//         if (index == 0){
//                 sum1++ ;
//                 value.value = sum1 ;
//                 findCost(0,sum1) ;
//             }
//             if(index == 1 ){
//                 sum2++ ;
//                 value1.value = sum2 ;
//                 findCost(1,sum2) ;
//             }
//             if(index == 2){
//                 sum3++ ;
//                 value2.value = sum3 ;
//                 findCost(2,sum3) ;
//             }
//     })
//     el.addEventListener("mousedown", () => {
//         set = setInterval(function addPerSecond(){
//             plus++ ;
//             console.log(plus);
//             if (index == 0){
//                 sum1++ ;
//                 value.value = sum1 ;
//             }
//             if(index == 1 ){
//                 sum2++ ;
//                 value1.value = sum2 ;
//             }
//             if(index == 2){
//                 sum3++ ;
//                 value2.value = sum3 ;
//             }
//         },time())



//     })

//     el.addEventListener("mouseup", ()=>{
//         clearInterval(set) ;
//     })
// });
// var plus = 0 ;
// buttonLessArray.forEach((el,index) => {
//     el.addEventListener("click", () => {
//         if (index == 0){
//             if(sum1  > 1){sum1-- ;
//                 value.value = sum1 ;
//                 findCost(0,sum1);
//             }
//         }
//         if(index == 1 ){
//             if(sum2  > 1){sum2-- ;
//                 value1.value = sum2 ;
//                 findCost(1,sum2) ;
//             }
//         }
//         if(index == 2){
//             if(sum3  > 1){sum3-- ;
//                 value2.value = sum3 ;
//                 findCost(2,sum3) ;
//             }
//         }

//     })


//     el.addEventListener("mousedown", ()=>{
//         set2 = setInterval(function addPerSecond(){
//             plus++ ;
//             console.log(plus);
//             if (index == 0){
//                 if(sum1  > 1){sum1-- ;
//                 value.value = sum1 ;}
//             }
//             if(index == 1 ){
//                 if(sum2  > 1){sum2-- ;
//                 value1.value = sum2 ;}
//             }
//             if(index == 2){
//                 if(sum3  > 1){sum3-- ;
//                 value2.value = sum3 ;}
//             }
//         },time())
//     })

//     el.addEventListener("mouseup", ()=>{
//         clearInterval(set2) ;
//     })
// });



// function time(){
//     if(plus < 25){
//         return 100 ;
//     }else if(plus < 50){
//         return 75 ;
//     }else{
//         return 50 ;
//     }
// }

// var delButton = document.querySelectorAll(".delButton") ;
// var delButtonArray = Array.prototype.slice.call(delButton) ; 
// var productOne = document.querySelector("#product1") ;
// var productTwo = document.querySelector("#product2") ;
// var productThree = document.querySelector("#product3") ;
// var firstContain = document.querySelector(".container-first").style.height ;
// firstContain = "600"
// var secondContain = document.querySelector(".container-second").style.height ;
// secondContain = "380" 
// var firstProduct = document.querySelector(".container-first") ;
// var secondProduct = document.querySelector(".container-second") ;
// var productNumber = document.querySelectorAll('.product') ;
// var length = 0 ;
// var producntNumberArray = Array.prototype.slice.call(productNumber) ; 
// var num = document.querySelector(".small-badge"); 

// producntNumberArray.forEach(el => {
//     var dis = el.style.display ;
//     if(dis !== "none"){
//         length++ ;
//     }
// });

// function showNumber(){
//     num.innerHTML = length ;
// }

// var input = document.getElementsByClassName("inp") ;
// var cost = document.getElementsByClassName("final-cost") ;

// function editCost(inpIndex,costIndex){
//     var inputVal = input[inpIndex].value ;
//     var costVal = cost[costIndex].firstElementChild.innerHTML ;
//     var finalLessCost = inputVal * costVal ;
//     if(inpIndex <= 1){
//     var factorOne = document.getElementsByClassName("factor")[0].innerHTML ;
//     var factorTwo = document.getElementsByClassName("factor")[1].innerHTML ;
//     document.getElementsByClassName("factor")[0].innerHTML = factorOne - finalLessCost ;
//     factorOne = document.getElementsByClassName("factor")[0].innerHTML ;
//     factorOne = parseInt(factorOne) ;
//     factorTwo = parseInt(factorTwo) ;
//     var display = document.getElementsByClassName("product")[2].style.display ;
//     if(display == "none"){
//         factorTwo = 0 ;
//     }
//     document.getElementsByClassName("factor")[2].innerHTML = factorOne + factorTwo ;
//     }else{
//         var factorOne = document.getElementsByClassName("factor")[0].innerHTML ;
//         var factorTwo = document.getElementsByClassName("factor")[1].innerHTML ;
//         factorOne = parseInt(factorOne) ;
//         factorTwo = 0 ;
//         document.getElementsByClassName("factor")[2].innerHTML = factorOne + factorTwo ;
//     }
// }




// delButtonArray.forEach((el,index) => {
//     el.addEventListener("click" , () => {
//         if(index == 0){
//             editCost(0,0) ;
//             length-- ;
//             showNumber() ;
//             firstContain = parseInt(firstContain-180) ;
//             productOne.style.display = "none" ;

//             if(firstContain == 240){

//                 firstProduct.style.display = "none" ;
//                 document.querySelector(".container-first").style.height = firstContain ;

//             }else{
//                 document.querySelector(".container-first").style.height = firstContain ;
//             }
//         }

//         if(index == 1){
//             editCost(1,1) ;
//             length-- ;
//             showNumber() ;
//             firstContain = parseInt(firstContain-180) ;
//             productTwo.style.display = "none" ;

//             if(firstContain == 240){

//                 firstProduct.style.display = "none" ;
//                 document.querySelector(".container-first").style.height = firstContain ;

//             }else{
//                 document.querySelector(".container-first").style.height = firstContain ;
//             }
//         }

//         if(index == 2){
//             editCost(2,2) ;
//             length-- ;
//             showNumber();
//             secondContain = parseInt(secondContain-180) ;
//             productThree.style.display = "none" ;


//             if(secondContain == 200){

//                 secondProduct.style.display = "none" ;
//                 document.querySelector(".container-second").style.height = secondContain ;

//             }else{
//                 document.querySelector(".container-second").style.height = secondContain ;
//             }
//         }
//     })
// });






//---------------------------------------------------------------------------------------------------------



const dataArrays = [
    {
        name: "سوسیس آلمانی پنیری",
        finalCost: 75000,
        linedCost: 85000,
        productImage: "image/image 1.png",
        firstValue: 3
    },
    {
        name: "کالباس پسته",
        finalCost: 15000,
        linedCost: 35000,
        productImage: "image/image 2.png",
        firstValue: 1
    },
];

let template = document.getElementsByTagName("template")[0];
for (let i = 0; i < dataArrays.length ; i++) {
    template.content.querySelector("img").setAttribute("src", dataArrays[i].productImage);
    template.content.querySelector(".product-name").firstElementChild.innerText = dataArrays[i].name;
    template.content.querySelector(".line-cost").firstElementChild.innerText = dataArrays[i].linedCost;
    template.content.querySelector(".pCost").innerText = dataArrays[i].finalCost;
    template.content.querySelector("input").setAttribute("value", dataArrays[i].firstValue);
    template.content.querySelector(".add-button").setAttribute("onclick", "showAdd(" + i + ")");
    template.content.querySelector(".add-button").setAttribute("onmousedown", "showAddSpeed(" + i + ")");
    template.content.querySelector(".add-button").setAttribute("onmouseup", "showAddSpeedup()");
    template.content.querySelector(".less-button").setAttribute("onclick", "showLess(" + i + ")");
    template.content.querySelector(".delButton").setAttribute("onclick", "del(" + i + ")");
    template.content.querySelector(".less-button").setAttribute("onmousedown", "showLessSpeed(" + i + ")");
    template.content.querySelector(".less-button").setAttribute("onmouseup", "showLessSpeedup()");
    let clon = template.content.cloneNode(true);
    document.querySelector(".produnt-list").appendChild(clon);
};

function countCost() {
    let finalCost = 0;
    let final = 0;
    for (let i = 0; i < dataArrays.length ; i++) {
        let num = +document.querySelectorAll(".inp")[i].value;
        let cost = +dataArrays[i].finalCost;
        final = num * cost;
        finalCost += final;
        document.querySelector(".factor").innerText = finalCost;
    }
    document.querySelector(".small-badge").innerText = document.getElementsByClassName("product").length ;
}
countCost();
function del(i) {
    let tem = document.querySelectorAll(".product")[i] ;
    console.log(i);
    tem.remove() ;
    dataArrays.splice(i,1) ;
    console.log(dataArrays) ;
    countCost() ;
} ;
function showAdd(i) {
    let tem = document.querySelectorAll(".inp")[i].getAttribute("value");
    tem++;
    document.querySelectorAll(".inp")[i].setAttribute("value", tem);
    countCost();

}
function showLess(i) {
    let tem = document.querySelectorAll(".inp")[i].getAttribute("value");
    if (tem > 1) {
        tem--;
        document.querySelectorAll(".inp")[i].setAttribute("value", tem);
    }
    countCost();

}
let setting;
function showAddSpeed(i) {
    let turn = i;
    setting = setTimeout(function () {
        let tem = document.querySelectorAll(".inp")[turn].getAttribute("value");
        tem++;
        document.querySelectorAll(".inp")[turn].setAttribute("value", tem);
        showAddSpeed(i);
        countCost();
    }, time())
};
function showAddSpeedup() {
    clearInterval(setting);
};
function time() {
    return 200;
}

let set;
function showLessSpeed(i) {
    let turn = i;
    set = setTimeout(function () {
        let temm = document.querySelectorAll(".inp")[turn].getAttribute("value");
        temm--;
        document.querySelectorAll(".inp")[turn].setAttribute("value", temm);
        showLessSpeed(i);
        countCost();

    }, time())
};
function showLessSpeedup() {
    clearInterval(set);
};