let popData;
let drawYearIndex;
//load the page's html first and then fetch the data
window.addEventListener("load", function () {
    console.log("page is loaded");
    let dataURL = "http://api.worldbank.org/v2/countries/CHN/indicators/SP.POP.TOTL?per_page=5000&format=json";

    //get access to online API about Chinese population since 1960s
    fetch(dataURL)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            popData = data;
            //console.log(popData[1][40].value);
        })
        //display the error if there's any
        .catch(error => {
            console.log("error:" + error);
        })
});

/*-----p5 code-----*/

function setup() {
    let cnv = createCanvas(400,300);
    cnv.parent("canvas-container");
}

function draw() {
    background("#f0f0f0");
    if (popData) {
        drawYearIndex= 2020 - $('select#years option:selected').val();
        noStroke();
        fill(20,55,177);
        ellipse(width/2,height/2,popData[1][drawYearIndex-5].value/5000000,popData[1][drawYearIndex-5].value/5000000);
        fill(255,255,255);
        ellipse(width/2,height/2,popData[1][drawYearIndex].value/5000000,popData[1][drawYearIndex].value/5000000);
        fill(176,37,210,42);
        ellipse(width/2,height/2,popData[1][drawYearIndex+5].value/5000000,popData[1][drawYearIndex+5].value/5000000);
    } else {
        console.log("waiting for information");
    }
}