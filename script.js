let band1 = document.getElementById("band1");
let band2 = document.getElementById("band2");
let band3 = document.getElementById("band3");
let band4 = document.getElementById("band4");
let band5 = document.getElementById("band5");
let i = 0;
let resistance = "";
const bands = [band1, band2, band3, band4, band5];
const colors = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white", "goldenrod", "silver"];
const tolerance = ["20", "1", "2", "3", "  +100", "0.5", "0.25", "0.10", "0.05", "10", "5", "10"];
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        let power = e.target.value;

        if (i < 3) {
            if (e.target.value > 9) {
                power = "";
            }
            resistance = resistance + power;
            document.getElementById('R').innerHTML = resistance;
        }
        else if (i == 3) {
            if (e.target.value > 9) {
                power = 9 - power;
            }
            resistance = resistance * Math.pow(10, power);
            document.getElementById('R').innerHTML = resistance;

        }
        if (i == 4) {

            let sign = " ± ";
            if (power == 4) sign = "";
            resistance = resistance + sign + tolerance[power] + "%";
            document.getElementById('R').innerHTML = resistance;

        }
        if (power === '') {
            bands[i].style.border = "none";
        }

        bands[i].style.backgroundColor = colors[e.target.value];
        i++;
    })
})
