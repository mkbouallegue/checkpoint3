function myFonction() {
    var text = document.getElementById ('n').style.fontWeight ='bold';
}
function myStyle() {
    var text = document.getElementById('n').style.fontStyle='italic';
}
function mySous() {
    var text = document.getElementById('n').style.textDecoration='Underline';
}
function myCenter() {
    var text = document.getElementById('n').style.textAlign='center';
}

function myFont() {
    var font = document.getElementById("listFonts").value
    document.getElementById('n').style.fontFamily = font
}

function myNumb() {
    var numero = document.getElementById('listNumb').value
    document.getElementById('n').style.fontSize = numero
}
