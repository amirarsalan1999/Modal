let btnElem = document.getElementById("btn"); //button
let closeElem = document.getElementById("close");//close icon in modal-box
let modalElem = document.getElementById("modal");//modal-box

// open madal-box
btnElem.addEventListener("click" , function () {
        modalElem.style.display = "block";
})

// close modal-box
closeElem.addEventListener("click" , function () {
    modalElem.style.animation = "modal-animation-reverse 1.5s linear";
    setTimeout(function () {
        modalElem.style.animation = "";
        modalElem.style.display = "none";
    }, 1400)
})