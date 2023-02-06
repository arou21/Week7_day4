let i = 0;
function imgload() {
    let images = ['london.jpg', 'new-york.jpg', 'snow.jpg', 'let.jpg', '123.jpg', 'rome.jpg', 'sydney.jpg', 'pairs.jpg', 'hawaii.jpg' ];
    let body = document.querySelector("body");
    body.style.backgroundImage = `url(./images/${images[i]})`
    if(i < images.length) {
        i++
    } else {
        i = 0;
    }
}



function kToF(valNum) {
    return Math.round(((valNum - 273.15) * 1.8) + 32, 1);
}

function putTemp(location, valNum) {
    document.getElementById(location).innerHTML = valNum
}

function weather() {
    let city = document.getElementById("city-name").value;

    let key = "c819c9a89f1a95ed0f56bd65d7e893b1"
    let url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + key
    fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    })
        .then(response => response.json())
        .then(response => {
            let result = response;
            console.log(result);

            let name = result['name'];
            putTemp("outputName", name);


            let temp = kToF(result['main']['temp']);
            putTemp("outputTemp", temp);

            let high = kToF(result['main']['temp_max']);
            putTemp("outputHigh", high);


            let low = kToF(result['main']['temp_min']);
            putTemp("outputLow", low);

            let humidity = result['main']['humidity'];
            putTemp("outputHumidity", humidity);


            let forecast = result['main']['feels_like'];
            putTemp("outputForecast", forecast);



        })

}

imgload();

setInterval(() => {
    imgload();

}, 45000)