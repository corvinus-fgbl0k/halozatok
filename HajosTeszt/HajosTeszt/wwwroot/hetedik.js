//var kérdések;
//var kérdésszáma = 0;
var aktualiskerdes;
var melyikkérdés = 1;

window.onload = () => {
    //letöltés();
    //kérdésBetöltés(melyikkérdés);
    fetch('/questions/1')
        .then(response => response.json())
        .then(data => kérdésMegjelenítés(data)
        );
}


//function letöltés() {
//    fetch('/questions.json')
//    .then(response => response.json())
//    .then(data => letöltésBefejeződött(data)
//    );
//}

//function letöltésBefejeződött(d) {
//    console.log("Sikeres letöltés")
//    console.log(d)
//    kérdések = d;
//    kérdésMegjelenítés(0);
//}


//function kérdésBetöltés(id) {
//    fetch(`/questions/${id}`)
//        .then(response => {
//            if (!response.ok) {
//                console.error(`Hibás válasz: ${response.status}`)
//            }
//            else {
//                return response.json()
//            }
//        })
//        .then(data => kérdésMegjelenítés(data));
//}    

function kérdésBetöltés(id) {
    fetch(`/questions/${id}`)
        .then(válaszfeldolgozás)
        .then(kérdésMegjelenítés);
} 
function válaszfeldolgozás(válasz) {
    if (!válasz.ok) {
        console.error(`Hibás válasz: ${response.status}`)
    }
    else {
        return válasz.json()
    }
}


 function kérdésMegjelenítés(kérdés) {
    //let kérdés_ide = document.getElementById("kérdés_szöveg")
    //kérdés_ide.innerHTML = kérdések[kérdés].questionText;
    //console.log(`${kérdések.length} kérdés érketett`)

    //for (var i = 1; i <= 3; i++) {
    //    let kérdés_elem = document.getElementById("válasz" + i)
    //    kérdés_elem.innerHTML = kérdések [kérdés] ["answer" + i]
    //}
    //document.getElementById("kép1").src = "https://szoft1.comeback.hu/hajo/" + kérdések[kérdés].image 
     aktualiskerdes = kérdés;
     console.log(kérdés);
     document.getElementById("kérdés_szöveg").innerText = kérdés.questionText
     document.getElementById("válasz1").innerText = kérdés.answer1
     document.getElementById("válasz2").innerText = kérdés.answer2
     document.getElementById("válasz3").innerText = kérdés.answer3
     if (kérdés.image != "") {
        document.getElementById("kép1").src = "https://szoft1.comeback.hu/hajo/" + kérdés.image; 
     }
     else {
         document.getElementById("kép1").src = "";
     }
     
}

function Előre() {
    //kérdésszáma++;
    //if (kérdésszáma==kérdések.length) {
    //    kérdésszáma = 0;
    //}
    //kérdésMegjelenítés(kérdésszáma);   
    
    if (melyikkérdés==859) {
        melyikkérdés = 1;
    }
    else {
        melyikkérdés++;
    }
    kérdésBetöltés(melyikkérdés);
    Clear();
}
function Vissza() {
    //if (kérdésszáma > 0) {
    //    kérdésszáma = kérdésszáma - 1;
    //}
    //else {
    //    kérdésszáma = kérdések.length - 1;
    //}
    //kérdésMegjelenítés(kérdésszáma);
    if (melyikkérdés > 1) {
        melyikkérdés = melyikkérdés - 1;
    }
    else {
        melyikkérdés = 859;
    }
    kérdésBetöltés(melyikkérdés);
    Clear();
}

//function Válasz(n) {
//    if (n == kérdések[kérdésszáma].correctAnswer) {
//        document.getElementById("válasz" + n).classList.add("jo");
//    }
//    else {       
//        document.getElementById("válasz" + n).classList.add("rossz");
//    }
//}

function Válasz(n) {
    if (n==aktualiskerdes.correctAnswer) {
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