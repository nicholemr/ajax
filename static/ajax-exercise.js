"use strict";


// PART 1: SHOW A FORTUNE



function showFortune(evt) {
  // console.log(response);
    // TODO: get the fortune and show it in the #fortune-text div
    $.get('/fortune', (response) => {

      $('#fortune-text').html(response);

    });
}

$('#get-fortune-button').on('click', showFortune);


// function replaceFortune(results) {

//   $('#fortune-text').html(results);
// }

// function showFortune(evt) {
  
//     // TODO: get the fortune and show it in the #fortune-text div
//     $.get('/fortune', replaceFortune); 
// }




// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();



    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};

    $.get(url, formData, (res) => {
        $('#weather-info').text(res['forecast']);
    });

    // TODO: request weather with that URL and show the forecast in #weather-info
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


