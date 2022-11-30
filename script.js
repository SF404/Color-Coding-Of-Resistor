let band1 = document.getElementById("band1");
let band2 = document.getElementById("band2");
let band3 = document.getElementById("band3");
let band4 = document.getElementById("band4");
let band5 = document.getElementById("band5");
let container = document.getElementById("colorPallete");
let result = document.getElementById("result")
let resistance = "";
const bands = [band1, band2, band3, band4, band5];
const colors = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white", "goldenrod", "silver"];
const tolerance = ["20", "1", "2", "3", "  +100", "0.5", "0.25", "0.10", "0.05", "10", "5", "10"];

function createColorpallete() {
    let input;
    for (let i = 0; i < colors.length; i++) {
        input = document.createElement("input");
        input.value = i;
        input.classList.add("button");
        input.style.backgroundColor = `${colors[i]}`;
        container.appendChild(input);
        input.disabled = true;
    }
}
createColorpallete();
// ----------------------
let cb = 0;
container.addEventListener('click', myFunction);
function myFunction(e) {
    if (e.target !== e.currentTarget)
        console.log(e.target.value);
    let selectedColor = e.target.value;
    if (cb < 3) {
        if (selectedColor > 9) { alert("Please select a valid color"); }
        else {
            bands[cb++].style.backgroundColor = colors[selectedColor];
            resistance = resistance + selectedColor;
        }
    }
    else if (cb == 3) {

        bands[cb++].style.backgroundColor = colors[selectedColor];
        resistance = resistance + " x 10" + selectedColor.sup() + " ";

    }
    else if (cb == 4) {
        let sign = " ± ";
        if (selectedColor == 4) sign = "";
        bands[cb++].style.backgroundColor = colors[selectedColor];
        resistance = resistance + sign + tolerance[selectedColor] + "%";
    }
    result.innerHTML = resistance;

}
