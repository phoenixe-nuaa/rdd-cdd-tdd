var data = require('./data');


/**
 * A weather format object wrapped from the JSON data.
 * @constructor
 * @param {object} json - The JSON data from the website.
 * @param {string} units - The units used to represent the temperature and speed.
 */
function Format(json, units) {
    var obj = JSON.parse(json),
        current = obj.currently,
        predict = obj.daily.data.slice(1, 5);

    this.dates = data.collectDates(predict);
    this.highs = data.collectHighs(predict, units);
    this.lows = data.collectLows(predict, units);
    this.precips = data.collectPrecip(predict);
    this.summaries = data.collectSummary(predict);
    this.icons = data.icon(predict);
    this.sunrises = data.collectSunrises(predict);
    this.sunsets = data.collectSunsets(predict);

    this.currentWeather = data.display(current, units);
}

/**
 * Display a table in the console.
 * @returns {string} - The table made up by characters.
 */
Format.prototype.tabled = function () {
    return data.displayTable(this.dates, this.highs, this.lows, this.icons, this.precips, this.sunrises, this.sunsets);
};

/**
 * Create a new instance.
 * @param {object} json - The JSON data from the website.
 * @param {string} units - The units used to represent the temperature and speed.
 * @returns {object} - A Format object.
 */
function instance(json, units) {
    return new Format(json, units);
}

module.exports = instance;
