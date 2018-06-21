$(function () {
    console.log("DOM");

    var url = 'http://api.openweathermap.org/data/2.5/weather?q=London&appid=0792ae5427c864ed05425224de36e150';
    
    function loadWeather () {
        $.ajax({
            url: url,
            method: 'GET',
            datatype: 'json'
        }).done(function (response) {
            console.log(response);
            showWeather(response);
        }).fail(function (error) {
            console.log(error);
        })
    }
    loadWeather();


    function showWeather(element) {
        var nameCity = element.name;
        var temperature = ((element.main.temp) - 273.15).toFixed(2);
        var minTemp = ((element.main.temp_min) - 273.15).toFixed(2);
        var maxTemp = ((element.main.temp_max) - 273.15).toFixed(2);
        var weatherDescription = element.weather[0].description;
        var weatherIcon = element.weather[0].icon;


        console.log(nameCity);
        console.log(temperature);
        console.log(minTemp);
        console.log(maxTemp);
        console.log(weatherDescription);
        console.log(weatherIcon);

    }
    // var button = $('#show_city');
    // var firstInput = $('.get_name');
    //
    // function addInfo(e) {
    //     e.preventDefault();
    //     var newCity = {
    //         name:
    //     }
    // }
});