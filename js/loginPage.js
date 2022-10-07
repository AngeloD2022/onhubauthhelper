const box = document.getElementById("view_container");

if (box) {
    let g = document.createElement("p");
    g.innerHTML = "Please note that this is a one-time process when using the OnHub API. You do not need more than one refresh token and only need to sign in once.";
    g.style.color = "orange";
    box.appendChild(g);
}

const btn = document.getElementsByClassName("VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-k8QpJ VfPpkd-LgbsSe-OWXEXe-dgl2Hf nCP5yc AjY5Oe DuMIQc qIypjc TrZEUc")[0];

if (btn) {
    btn.addEventListener("click", function () {
        box && box.removeChild(g);
        setTimeout(function () {
            console.log("done")
            box && box.appendChild(g);
        }, 1000);
    })
}