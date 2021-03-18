
window.onload = function () {

    let hova = document.getElementById("ide");
    let sor = document.createElement("div");
    sor.classList.add("sorban");
    hova.appendChild(sor);
    for (var o = 0; o < 10; o++) {
        let szám = document.createElement("div");
        sor.appendChild(szám);
        szám.classList.add("doboz")
        szám.innerText = o + 1;
        szám.style.background = `rgb(255, ${255 - 20 * o}, 255)`
    }
    var faktoriális = function (n) {
        let er = 1;
        for (let i = 2; i <= n; i++) {
            er = er * i;
        }
        return er;
    }


    for (var sora = 0; sora < 10; sora++) {
        let hova = document.getElementById("oda");
        let sor = document.createElement("div");
        sor.classList.add("sor");
        hova.appendChild(sor);
        for (var oszlop = 0; oszlop <= sora; oszlop++) {
            let szám = document.createElement("div");
            szám.classList.add("elem")
            szám.innerText = faktoriális(sora) / (faktoriális(oszlop) * (faktoriális(sora - oszlop)));;
            sor.appendChild(szám);
        }
    }
}
