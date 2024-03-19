let spiegone = document.querySelector(".spiegone");
let popup = document.querySelector(".popup");

spiegone.addEventListener("click", function () {
    
    popup.style.display = "block";
    let p = document.createElement("p");
    p.textContent = "Escape Room\" è un gioco di strategia e indagine che si svolge tramite un'app mobile, dove due giocatori competono. Un giocatore assume il ruolo del \"Maestro di Enigmi\", l'altro è l'\"Esploratore\". L'obiettivo per l'Esploratore è trovare tutti gli indizi nascosti dal Maestro di Enigmi entro un tempo prestabilito per \"evadere\" dalla stanza virtuale.";

    popup.appendChild(p);

    let chiudi = document.createElement("button");
    chiudi.textContent = "Chiudi";
    chiudi.style.cursor = "pointer";
    popup.appendChild(chiudi);

    chiudi.addEventListener("click", function () {
        popup.style.display = "none";
        popup.removeChild(p);
        popup.removeChild(chiudi);
    });

});




document.addEventListener("DOMContentLoaded", function() {
    let messaggio1 = document.querySelector("#first_message");
    let messaggio2 = document.querySelector("#second_message");
    let primobottone = document.querySelector("#first_button");

    primobottone.addEventListener("click", function (event) {
        event.preventDefault(); // Previene il comportamento di default del link
        messaggio1.style.display = "none";
        messaggio2.style.display = "flex";
    });
});

    
let messaggio3 = document.querySelector(".third_message");


let messaggio4 = document.querySelector(".fourth_message");
