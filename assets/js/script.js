const counting = document.getElementById("counting");
const addbtn = document.getElementById("addbtn");
const savebtn = document.getElementById("savebtn");
const value = document.getElementById("value");
const reset = document.getElementById("reset")

addbtn.addEventListener("click", function () {
    counting.innerHTML = +counting.innerHTML + 1;
    savebtn.classList.replace("btn-disabled", "btn-filled-bg")

});

savebtn.addEventListener("click", function () {
    if (value.innerHTML == 0) {
        value.innerHTML = counting.innerHTML
    } else {
        value.innerHTML = value.innerHTML + "," + counting.innerHTML
    }
});
reset.addEventListener("click", function () {
    value.innerHTML = 0
    counting.innerHTML = 0;
})

