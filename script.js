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
    template.content.querySelector(".less-button").setAttribute("onmouseup","showLessSpeedup()");
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