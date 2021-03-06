let cnv = document.getElementById("sorting-area");
let ctx = cnv.getContext("2d");

let height = cnv.height;
let width = cnv.width;

function drawArray(array) {
    let len = array.length;
    let barWidth = width/len;

    // Cover previous array.
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, width, height);

    // Draw array.
    for (let x = 0; x < len; x++) {
        ctx.fillStyle = array[x].state.toString();
        ctx.fillRect(barWidth * x, height, width/len, -(array[x].value * ((height * 0.5) / Math.max.apply(null, array.map(function (o) {return o.value})))));
    }
}