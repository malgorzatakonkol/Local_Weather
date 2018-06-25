$(function () {
    console.log("DOM");

    // var url = 'http://api.openweathermap.org/data/2.5/weather?q=London&appid=0792ae5427c864ed05425224de36e150';
    var ulElement = $(".des");

    var button = $('#show_city');
    var firstInput = $('.get_name');


    
    function loadWeather (e) {
        e.preventDefault();

        var newCity = firstInput.val();
        $.ajax({
            url: 'http://api.openweathermap.org/data/2.5/weather?q=' + newCity + '&appid=0792ae5427c864ed05425224de36e150',
            method: 'GET',
            datatype: 'json'
        }).done(function (response) {
            console.log(response);
            showWeather(response);
        }).fail(function (error) {
            console.log(error);
        })
    }



    function showWeather(element) {
        ulElement.empty();
        var nameCity = element.name;
        var temperature = ((element.main.temp) - 273.15).toFixed(0);
        var minTemp = ((element.main.temp_min) - 273.15).toFixed(1);
        var maxTemp = ((element.main.temp_max) - 273.15).toFixed(1);
        var weatherDescription = element.weather[0].description;
        var windSpeed = element.wind.speed;
        var clouds = element.clouds.all;
        var pressure = element.main.pressure;
        var humidity = element.main.humidity;
        var weatherIcon = element.weather[0].icon;


        console.log(nameCity);
        console.log(temperature);
        console.log(minTemp);
        console.log(maxTemp);
        console.log(weatherDescription);
        console.log("wiatr", windSpeed);
        console.log("chmury", clouds);
        console.log("ciśnienie", pressure);
        console.log("wilgotność", humidity);
        console.log(weatherIcon);

        var newLi = $("<li>");

        var newLi1 = $("<div>");
        newLi1.text("Lokalizacja:   " + nameCity);

        var newLi2 = $("<div>");
        newLi2.text(temperature);

        var newLi3 = $("<div>");
        newLi3.text(minTemp);

        var newLi4 = $("<div>");
        newLi4.text(maxTemp);


        var newLi5 = $("<div>");
        newLi5.text("Wiatr: " + windSpeed + " km/h");

        var newLi6 = $("<div>");
        newLi6.text("Zachmurzenie: " + clouds + " %");

        var newLi7 = $("<div>");
        newLi7.text("Ciśnienie: " + pressure + " hPa");

        var newLi8 = $("<div>");
        newLi8.text("Wilgotność: " + humidity + " %");

        var newI = $("<img>");
        newI.attr('src', 'http://openweathermap.org/img/w/' + weatherIcon + '.png');
        newI.addClass('weatherIcon');



        newLi.append(newI);
        newLi.append(newLi1);
        // newLi.append(newLi2);
        newLi.append("Temperatura [<sup>o</sup>C]: ", newLi2);
        newLi.append("Temperatura min [<sup>o</sup>C]: ", newLi3);
        newLi.append("Temperatura max [<sup>o</sup>C]: ", newLi4);
        // newLi.append(newLi4);
        newLi.append(newLi5);
        newLi.append(newLi6);
        newLi.append(newLi7);


        ulElement.append(newLi);

        // var urlIcon = $(".weatherIcon");
        // var descriptionDiv = $(".description");
        // var newIcon = $("<img>");
        // newIcon.attr('src', 'http://openweathermap.org/img/w/' + weatherIcon + '.png');
        // newIcon.addClass("weatherIcon");
        // //
        // newIcon.append(descriptionDiv);


    }

    button.on("click", loadWeather);

});