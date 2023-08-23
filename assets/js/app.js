let addbutton = document.querySelector("#addbutton");
let Savebutton = document.querySelector("#Savebutton");
let p = document.querySelector("#text");
let Savednumber = document.querySelector("#Savednumber");
let ResetBtn = document.querySelector("#ResetBtn")

addbutton.addEventListener("click", function () {
    p.innerHTML = +p.innerHTML + 1;
    Savebutton.classList.remove("button-2-disabled");
})

Savebutton.addEventListener("click", () => {
    if (p.innerHTML == 0) {
        Savebutton.classList.add("button-2-disabled")
    }
    else {
        if (Savednumber.innerHTML == 0) {
            Savednumber.innerHTML = p.innerHTML;
        }

        else {
            Savednumber.innerHTML = Savednumber.innerHTML + ', ' + p.innerHTML;
        }
        p.innerHTML = 0;
    }
})
ResetBtn.addEventListener("click", function () {
    p.innerHTML = 0;
    Savednumber.innerHTML = 0;
})