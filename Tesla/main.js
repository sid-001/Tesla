var header = document.getElementById("header");
var mS = document.getElementById("modelS");
var m3 = document.getElementById("model3");
var mX = document.getElementById("modelX");
var mY = document.getElementById("modelY");
var model = document.getElementById("model");

mS.onclick = function(){
    header.style.backgroundImage = "url(images/image-1.png)"
    model.innerHTML = "Model S"
    m3.setAttribute('style', '');
    mX.setAttribute('style', '');
    mY.setAttribute('style', '');
    mS.style.color = "black"
    mS.style.fontWeight = "550"
}
m3.onclick = function(){
    header.style.backgroundImage = "url(images/image-2.png)"
    model.innerHTML = "Model 3"
    mS.setAttribute('style', '');
    mX.setAttribute('style', '');
    mY.setAttribute('style', '');
    m3.style.color = "black"
    m3.style.fontWeight = "550"
}
mX.onclick = function(){
    header.style.backgroundImage = "url(images/image-3.png)"
    model.innerHTML = "Model X"
    mS.setAttribute('style', '');
    m3.setAttribute('style', '');
    mY.setAttribute('style', '');
    mX.style.color = "black"
    mX.style.fontWeight = "550"
}
mY.onclick = function(){
    header.style.backgroundImage = "url(images/image-4.png)"
    model.innerHTML = "Model Y"
    mS.setAttribute('style', '');
    m3.setAttribute('style', '');
    mX.setAttribute('style', '');
    mY.style.color = "black"
    mY.style.fontWeight = "550"
}