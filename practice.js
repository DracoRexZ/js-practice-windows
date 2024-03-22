document.body.onload = textD20;
function changeColor(newColor) {
    const primaryText = document.getElementById("mainText");
    primaryText.style.color = newColor;
}
// D20
function rollD20() {
    return Math.floor(Math.random()*20)+1;
}
function textD20() {
    const rollResults = rollD20();
    const postRoll = document.getElementById("post-roll");
    postRoll.innerText = rollResults; 
}
// color generator
function generateColor() {
    var equis = Math.round(0xffffff*Math.random()).toString(16);
    var igriega = (6-equis.length);
    var zeta = "000000";
    var z1 = zeta.substring(0,igriega);
    var randomColor = "#" + z1+equis;
    return randomColor;
}
function setColor() {
    const colorGenerated = generateColor();
    const preColor = document.getElementById("pre-color");
    preColor.innerText = colorGenerated;
    document.getElementById("color-box").style.background = colorGenerated;
}