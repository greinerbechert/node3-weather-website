const request = require('request')

const forecast = (longitude, latitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=a9c172abc48ada5bc0e06914bd6c6bd0&query='+latitude+','+longitude+'&units=m'
    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to access weather service', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            const description = body.current.weather_descriptions
            const temperature = body.current.temperature
            const feelslike = body.current.feelslike
            const wind_speed = body.current.wind_speed
            callback(undefined, description+'. It is currently ' + temperature + ' degrees out. The wind speed is ' + wind_speed + 'km/h. It feels like ' + feelslike + ' degrees.')
        }
    })
}

module.exports = forecast