var http = require('http'),
    https = require('https'),
    chalk = require('chalk'),
    Format = require('./format');

/**
 * Get the weather information and display it in the console.
 * @param {Object} location - Your location, including latitude and longitude.
 * @param {Object} units - The units used to represent the temperature and speed.
 * @param {string} ip - The public IP address that you have.
 */
function weatherRequest(location, units, args) {
    var weather_options = {
        host: 'api.forecast.io',
        path: '/forecast/d399f7331297381cd6b95106add0d22d/' + location.lat + ',' + location.long + '?units=' + units.type,
        method: 'GET'
    };

    https.get(weather_options, function(res) {
        var json  = '';
        res
            .on('data', function (chunk) {
                json += chunk;
            })
            .on('end', function() {
                if (args.v || args.verbose) {
                    console.log(chalk.green('✓ got data from weather server'));
                }
                var weather = Format(json, units);
                console.log(weather.currentWeather);
                console.log(weather.tabled());
                process.exit();
            });
    });
}

/**
 * 
 */
function address(addr, callback, units, args) {

    var location_options = {
        host: 'maps.googleapis.com',
        path: '/maps/api/geocode/json?address=' + encodeURIComponent(addr.toString()),
        method: 'GET'
    };

    http.get(location_options, function (res) {
        var text = '',
            position = {};
        res
            .on('data', function (chunk) {
                text +=  chunk.toString();
            })
            .on('end', function () {
                var json = JSON.parse(text);
                if (json.status == "OK" && json.results[0]) {
                    if (args.v || args.verbose) {
                        console.log(chalk.green('✓ got geo location server response'));
                        console.log(chalk.green('✓ got location: ') + chalk.bgBlack.white(json.results[0].formatted_address));
                    }
                    position.lat = json.results[0].geometry.location.lat;
                    position.long = json.results[0].geometry.location.lng;
                    callback(position, units, args);
                } else {
                    console.log(chalk.red('✗ address not found'));
                }
            });
    });
}

/**
 * Get the geographical location from your ip.
 * @param {string} ip - The public IP address that you have.
 * @param {weatherRequest} callback - The callback that handles the response.
 * @param {Object} units - The units used to represent the temperature and speed.
 * @param {Object} args - The command line parameters that you passed to the program.
 */
function automatic(ip, callback, units, args) {

    var location_options = {
        host: 'freegeoip.net',
        path: '/json/' + ip,
        method: 'GET'
    };

    http.get(location_options, function (res) {
        var text = '',
            position = {};
        res
            .on('data', function (chunk) {
                if (args.v || args.verbose) {
                    console.log(chalk.green('✓ got location server response'));
                }
                text +=  chunk.toString();
            })
            .on('end', function () {
                var json = JSON.parse(text),
                location = json.city + ', ' + json.region_name + ', ' + json.country_name;
                position.lat = json.latitude;
                position.long = json.longitude;

                if (args.v || args.verbose) {
                    console.log(chalk.green('✓ got location: ') + chalk.bgBlack.white(location));
                }
                callback(position, units, args);
            });
    });
}

module.exports = {
    weatherRequest: weatherRequest,
    address: address,
    automatic: automatic
};
