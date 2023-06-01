// $(document).ready(function() {
//     // Display current weather for city
//     $.ajax({
//         url: 'https://api.openweathermap.org/data/2.5/weather?q=El Paso, TX&units=imperial&appid=weatherMapKey',
//         type: 'GET',
//         dataType: 'json',
//         success: function(data) {
//             console.log(data);
//             var temperature = Math.round(data.main.temp) + '°F';
//             var description = data.weather[0].description;
//             var icon = 'https://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
//             $('.current-weather .temperature').text(temperature);
//             $('.current-weather .description').text(description);
//             $('.current-weather .icon').html('<img src="' + icon + '" alt="">');
//         },
//         error: function(error) {
//             console.log(error);
//         }
//     });
//
//     // Display five day forecast for city
//     $.ajax({
//         url: 'https://api.openweathermap.org/data/2.5/forecast?q=El Paso, TX&units=imperial&appid=weatherMapKey',
//         type: 'GET',
//         dataType: 'json',
//         success: function(data) {
//             console.log(data);
//             let dailyData = data.list.filter(function (weatherMapKey) {
//                 return weatherMapKey.dt_txt.includes('12:00:00'); {
//                 }
//             }
//
