var weather = "weather.json";

function weatherJSON() {
	$.getJSON(weather, function (data) {
		$.each(data.features, function (i, vol) {
			weatherDaily[i] = vol.source.date;
			weatherDay[i] = vol.source.dowTLA;
			weatherForecast[i] = vol.source.forecastWord;
			weatherTempMax[i] = vol.source.max;
			weatherTempMin[i] = vol.source.min;
		})
	});
}