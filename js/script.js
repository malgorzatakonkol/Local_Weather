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
        }).fail(function (error) {
            console.log(error);
        })
    }
    loadWeather();
});