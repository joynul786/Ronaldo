
let bar = document.getElementById("bar");
let navRight = document.getElementById("navRight");
bar.addEventListener("click", myfunction)
function myfunction() {
    var collapsd = navRight.classList.contains("show")
    if (collapsd) {
        navRight.classList.remove("show")
    }
    else {
        navRight.classList.add("show")
    }
}

