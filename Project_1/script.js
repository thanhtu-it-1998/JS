const getMain = document.getElementById("main");
const getBtn = document.getElementsByClassName("colorBtn");
const getNavList = document.getElementsByClassName("navList");
const getAddBtn = document.getElementsByClassName("addBtn");
const getClose = document.getElementsByClassName("close");
const getAdd = document.getElementById("add");
const setColor = document.getElementsByClassName("color");
const getSubmitColor = document.getElementsByClassName("submitColor");



const colors = ["Tomato", "Orange", "DodgerBlue", "MediumSeaGreen", "Gray", "SlateBlue", "Violet", "LightGray"];


getBtn[0].addEventListener('click', ChangeColor);
getAddBtn[0].addEventListener('click', Show);
getClose[0].addEventListener('click', Hidden);
getSubmitColor[0].addEventListener('click', AddColor);

Render(getNavList[0], colors);





for (const color of colors) {
    var getColor = document.getElementsByClassName(color);
    getColor[0].style.background = color;
}



function Show() {
    getAdd.style.display = "block";
}
function Hidden() {
    getAdd.style.display = "none";
}

function ChangeColor() {
    let valueRandom = Math.floor((Math.random() * 8));
    getMain.style.background = colors[valueRandom];
}

function Render(container, arr) {
    let arrTemporary;
    let ctHTMl;

    arrTemporary = arr.map(function (item) {
        return " <li class=\"" + item + "\">" + item + "</li>";
    })

    ctHTML = arrTemporary.join(" ");

    container.innerHTML = ctHTML;
}
function AddColor() {
    valueColor = setColor[0].value;

    newColors = colors.push(valueColor);
    alert(colors);
}