let refreshBtn = document.getElementById("refresh-btn");
let sortBtn = document.getElementById("sort-btn");
let selectedSort = 0;
let sortTypes = document.getElementsByClassName("sort-type");


// Following code is used to highlight the selected algorithm.
for (let i = 0; i < sortTypes.length; i++) {
    sortTypes[i].addEventListener("click", function () {
        sortTypes[selectedSort].className = "sort-type";
        selectedSort = i;
        sortTypes[i].className = sortTypes[i].className + " selected-sort";
    });
}