let refreshBtn = document.getElementById("refresh-btn");
let sortBtn = document.getElementById("sort-btn");
let selectedSort = 0;
let sortTypes = document.getElementsByClassName("sort-type");


// Following code is used to highlight the selected algorithm.
for (let i = 0; i < sortTypes.length; i++) {
    sortTypes[i].addEventListener("click", function () {
        if (sortTypes[i].classList.contains("enabled-btn")) {
            sortTypes[selectedSort].className = "sort-type enabled-btn";
            selectedSort = i;
            sortTypes[i].className = sortTypes[i].className + " selected-sort";
        }
    });
}

function toggleButtons(enabled) {
    for (let x = 0; x < sortTypes.length; x++) {
        sortTypes[x].classList.add(enabled ? "enabled-btn" : "disabled-btn");
        sortTypes[x].classList.remove(enabled ? "disabled-btn" : "enabled-btn");
    }

    sortBtn.classList.add(enabled ? "enabled-btn" : "disabled-btn");
    sortBtn.classList.remove(enabled ? "disabled-btn" : "enabled-btn");
    refreshBtn.classList.add(enabled ? "enabled-btn" : "disabled-btn");
    refreshBtn.classList.remove(enabled ? "disabled-btn" : "enabled-btn");

}