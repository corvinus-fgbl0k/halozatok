var kérdések;
var kérdésszáma = 0;

window.onload = () => {
    letöltés();
}


function letöltés() {
    fetch('/questions.json')
    .then(response => response.json())
    .then(data => letöltésBefejeződött(data)
    );
}

function letöltésBefejeződött(d) {
    console.log("Sikeres letöltés")
    console.log(d)
    kérdések = d;
    kérdésMegjelenítés(0);
}


 function kérdésMegjelenítés(kérdés) {
    let kérdés_ide = document.getElementById("kérdés_szöveg")
    kérdés_ide.innerHTML = kérdések[kérdés].questionText;
    console.log(`${kérdések.length} kérdés érketett`)

    for (var i = 1; i <= 3; i++) {
        let kérdés_elem = document.getElementById("válasz" + i)
        kérdés_elem.innerHTML = kérdések [kérdés] ["answer" + i]
    }
    document.getElementById("kép1").src = "https://szoft1.comeback.hu/hajo/" + kérdések[kérdés].image 
}

function Előre() {
    kérdésszáma++;
    if (kérdésszáma==kérdések.length) {
        kérdésszáma = 0;
    }
    kérdésMegjelenítés(kérdésszáma);   
    Clear();
}
function Vissza() {
    if (kérdésszáma > 0) {
        kérdésszáma = kérdésszáma - 1;
    }
    else {
        kérdésszáma = kérdések.length - 1;
    }
    kérdésMegjelenítés(kérdésszáma);
    Clear();
}

function Válasz(n) {
    if (n == kérdések[kérdésszáma].correctAnswer) {
        document.getElementById("válasz" + n).classList.add("jo");
    }
    else {       
        document.getElementById("válasz" + n).classList.add("rossz");
    }

}

function Clear() {
    document.getElementById("válasz1").classList.remove("jo");
    document.getElementById("válasz1").classList.remove("rossz");
    document.getElementById("válasz2").classList.remove("jo");
    document.getElementById("válasz2").classList.remove("rossz");
    document.getElementById("válasz3").classList.remove("jo");
    document.getElementById("válasz3").classList.remove("rossz");
}