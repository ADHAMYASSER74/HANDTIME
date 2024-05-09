let imge = document.querySelector(`.img-change`);
let colorCont = document.querySelector(`.color-cont`);
let colorPara = document.querySelector(`.color-para`);
let cont = document.querySelector(`.contect`);

function change(Watches) {
    imge.src = Watches;
}

function colors(color) {
    cont.style.background = color;
}

function colorText(colorText) {
    colorCont.style.color = colorText;
}
function colorpara(colorpara) {
    colorPara.style.color = colorpara;
}
