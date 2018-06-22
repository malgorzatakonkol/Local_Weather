$(function () {
    console.log("DOM");

    var url = 'http://api.openweathermap.org/data/2.5/weather?q=London&appid=0792ae5427c864ed05425224de36e150';
    var ulElement = $(".description");

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
        var weatherIcon = element.weather[0].icon;


        console.log(nameCity);
        console.log(temperature);
        console.log(minTemp);
        console.log(maxTemp);
        console.log(weatherDescription);
        console.log(weatherIcon);

        var newLi = $("<li>");

        var newLi1 = $("<div>");
        newLi1.text(nameCity);

        var newLi2 = $("<div>");
        newLi2.text(temperature);

        var newLi3 = $("<div>");
        newLi3.text(minTemp);

        var newLi4 = $("<div>");
        newLi4.text(maxTemp);

        newLi.append(newLi1);
        newLi.append(newLi2);
        newLi.append(newLi3);
        newLi.append(newLi4);

        ulElement.append(newLi);

        var urlIcon = $(".weatherIcon");
        urlIcon.attr('src', 'http://openweathermap.org/img/w/' + weatherIcon + '.png');
    }

    button.on("click", loadWeather);

});