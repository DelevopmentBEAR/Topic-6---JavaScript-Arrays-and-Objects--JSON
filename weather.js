// Example weather current conditions from Open Weather Map API
// https://samples.openweathermap.org/data/2.5/find?q=London&units=metric&appid=439d4b804bc8187953eb36d2a8c26a02

let weather = {
    "message": "accurate",
    "cod": "200",
    "count": 1,
    "list": [
        {
            "id": 2643743,
            "name": "London",
            "coord": {
                "lat": 51.5085,
                "lon": -0.1258
            },
            "main": {
                "temp": 7,            // Current temperature
                "pressure": 1012,
                "humidity": 81,
                "temp_min": 5,
                "temp_max": 8
            },
            "dt": 1485791400,
            "wind": {
                "speed": 4.6,     // I want this info - wind speed
                "deg": 90
            },
            "sys": {
                "country": "GB"
            },
            "rain": null,
            "snow": null,
            "clouds": {
                "all": 90
            },
            "weather": [
                {
                    "id": 701,
                    "main": "Mist",
                    "description": "mist",   // description
                    "icon": "50d"
                },
                {
                    "id": 300,
                    "main": "Drizzle",
                    "description": "light intensity drizzle",  // description
                    "icon": "09d"
                }
            ]
        }
    ]
}

// Extract current temperature, step-by-step
let weatherList = weather.list
console.log(weatherList) // [ { id: 2643743, name: 'London', coord: { lat: 51.5085, lon: -0.1258 }, main: { temp: 7, pressure: 1012, humidity: 81, temp_min: 5, temp_max: 8 }, dt: 1485791400, wind: { speed: 4.6, deg: 90 }, sys: { country: 'GB' }, rain: null, snow: null, clouds: { all: 90 }, weather: [ { id: 701, main: 'Mist', description: 'mist', icon: '50d' }, { id: 300, main: 'Drizzle', description: 'light intensity drizzle', icon: '09d' } ] } ]

let weatherInfo = weatherList[0]
console.log(weatherInfo) // { id: 2643743, name: 'London', coord: { lat: 51.5085, lon: -0.1258 }, main: { temp: 7, pressure: 1012, humidity: 81, temp_min: 5, temp_max: 8 }, dt: 1485791400, wind: { speed: 4.6, deg: 90 }, sys: { country: 'GB' }, rain: null, snow: null, clouds: { all: 90 }, weather: [ { id: 701, main: 'Mist', description: 'mist', icon: '50d' }, { id: 300, main: 'Drizzle', description: 'light intensity drizzle', icon: '09d' } ] }

let main = weatherInfo.main
console.log(main) // { temp: 7, pressure: 1012, humidity: 81, temp_min: 5, temp_max: 8 }

let currentTemp = main.temp
console.log(currentTemp)    // and there's the temp!

console.log('---------') // Divider for readability

// Or, combine all these steps into one 
// test this type of code and make sure you don't miss a step.
let temp = weather.list[0].main.temp
console.log('The current temperature is: ' + temp + ' degrees Celsius') // The current temperature is: 7 degrees Celsius

let pressure = weather.list[0].main.pressure
console.log('With a pressure of: ' + pressure + ' hPa') // With a pressure of: 1012 hPa

let humidity = weather.list[0].main.humidity
console.log('And a humidity of: ' + humidity + '%') // And a humidity of: 81%

// Extract wind speed and weather description
let windSpeed = weather.list[0].wind.speed
console.log('The wind speed is: ' + windSpeed + ' meters per second') // The wind speed is: 4.6 meters per second

let weatherDescription = weather.list[0].weather[0].description
let weatherDescription2 = weather.list[0].weather[1].description
console.log('The weather today is: ' + weather.list[0].weather[0].description + ' with ' + weather.list[0].weather[1].description + ' of rain.') 
// The weather today is: mist with light intensity drizzle of rain.

console.log('---------') // Divider for readability
