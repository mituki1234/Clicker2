let money = 0;
let moneyps = 0;

const btn = document.getElementById("click");
let moneydisplay = document.getElementById("clickdisplay");

function click(){
    money += 1;
    moneydisplay.innerText = money;
}
setInterval(click(),100);
