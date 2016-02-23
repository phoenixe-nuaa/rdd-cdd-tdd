var assert = require('assert'),
    format = require('./../lib/format');

var units = {
        type: 'us',
        tmp: '˚F',
        speed: 'mph'
    },
    json = '{"latitude":39.99524,"longitude":116.219146,"timezone":"Asia/Shanghai","offset":8,"currently":{"time":1456390993,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":35.75,"apparentTemperature":31.49,"dewPoint":7.63,"humidity":0.3,"windSpeed":4.99,"windBearing":243,"cloudCover":0.23,"pressure":1030.6,"ozone":410.22},"hourly":{"summary":"Partly cloudy starting tomorrow morning.","icon":"partly-cloudy-day","data":[{"time":1456390800,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":35.82,"apparentTemperature":31.58,"dewPoint":7.61,"humidity":0.3,"windSpeed":4.98,"windBearing":242,"cloudCover":0.23,"pressure":1030.59,"ozone":410.11},{"time":1456394400,"summary":"Clear","icon":"clear-night","precipIntensity":0,"precipProbability":0,"temperature":34.48,"apparentTemperature":29.48,"dewPoint":7.98,"humidity":0.32,"windSpeed":5.62,"windBearing":268,"cloudCover":0.22,"pressure":1030.88,"ozone":412.17},{"time":1456398000,"summary":"Partly Cloudy","icon":"partly-cloudy-night","precipIntensity":0,"precipProbability":0,"temperature":32.29,"apparentTemperature":25.54,"dewPoint":7.43,"humidity":0.35,"windSpeed":7.46,"windBearing":291,"cloudCover":0.28,"pressure":1031.4,"ozone":412.92},{"time":1456401600,"summary":"Partly Cloudy","icon":"partly-cloudy-night","precipIntensity":0,"precipProbability":0,"temperature":30.1,"apparentTemperature":21.76,"dewPoint":6.56,"humidity":0.36,"windSpeed":9.29,"windBearing":302,"cloudCover":0.29,"pressure":1031.94,"ozone":411.47},{"time":1456405200,"summary":"Clear","icon":"clear-night","precipIntensity":0,"precipProbability":0,"temperature":28.27,"apparentTemperature":19.03,"dewPoint":5.71,"humidity":0.38,"windSpeed":10.13,"windBearing":307,"cloudCover":0.21,"pressure":1032.48,"ozone":406.54},{"time":1456408800,"summary":"Clear","icon":"clear-night","precipIntensity":0,"precipProbability":0,"temperature":26.57,"apparentTemperature":16.81,"dewPoint":4.82,"humidity":0.39,"windSpeed":10.33,"windBearing":311,"cloudCover":0.09,"pressure":1033.07,"ozone":399.41},{"time":1456412400,"summary":"Clear","icon":"clear-night","precipIntensity":0,"precipProbability":0,"temperature":25.15,"apparentTemperature":15.16,"dewPoint":3.97,"humidity":0.39,"windSpeed":10.13,"windBearing":313,"cloudCover":0,"pressure":1033.54,"ozone":393.05},{"time":1456416000,"summary":"Clear","icon":"clear-night","precipIntensity":0,"precipProbability":0,"temperature":24,"apparentTemperature":14.17,"dewPoint":3.15,"humidity":0.4,"windSpeed":9.41,"windBearing":314,"cloudCover":0,"pressure":1033.8,"ozone":388.48},{"time":1456419600,"summary":"Clear","icon":"clear-night","precipIntensity":0,"precipProbability":0,"temperature":23.07,"apparentTemperature":13.8,"dewPoint":2.38,"humidity":0.4,"windSpeed":8.23,"windBearing":314,"cloudCover":0,"pressure":1033.91,"ozone":384.66},{"time":1456423200,"summary":"Clear","icon":"clear-night","precipIntensity":0,"precipProbability":0,"temperature":22.25,"apparentTemperature":13.68,"dewPoint":1.71,"humidity":0.4,"windSpeed":7.08,"windBearing":314,"cloudCover":0,"pressure":1033.85,"ozone":381.47},{"time":1456426800,"summary":"Clear","icon":"clear-night","precipIntensity":0,"precipProbability":0,"temperature":21.38,"apparentTemperature":13.49,"dewPoint":1.12,"humidity":0.41,"windSpeed":6.1,"windBearing":316,"cloudCover":0,"pressure":1033.59,"ozone":378.88},{"time":1456430400,"summary":"Clear","icon":"clear-night","precipIntensity":0,"precipProbability":0,"temperature":20.48,"apparentTemperature":13.38,"dewPoint":0.55,"humidity":0.41,"windSpeed":5.15,"windBearing":318,"cloudCover":0,"pressure":1033.19,"ozone":376.91},{"time":1456434000,"summary":"Clear","icon":"clear-night","precipIntensity":0,"precipProbability":0,"temperature":19.82,"apparentTemperature":13.64,"dewPoint":0.04,"humidity":0.41,"windSpeed":4.28,"windBearing":319,"cloudCover":0,"pressure":1032.74,"ozone":375.48},{"time":1456437600,"summary":"Clear","icon":"clear-night","precipIntensity":0,"precipProbability":0,"temperature":19.49,"apparentTemperature":14.12,"dewPoint":-0.44,"humidity":0.41,"windSpeed":3.65,"windBearing":316,"cloudCover":0,"pressure":1032.27,"ozone":374.59},{"time":1456441200,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":20.33,"apparentTemperature":15.78,"dewPoint":-0.16,"humidity":0.4,"windSpeed":3.2,"windBearing":307,"cloudCover":0,"pressure":1031.73,"ozone":374.23},{"time":1456444800,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":21.74,"apparentTemperature":21.74,"dewPoint":0.22,"humidity":0.38,"windSpeed":2.77,"windBearing":287,"cloudCover":0,"pressure":1031.04,"ozone":374.3},{"time":1456448400,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":24.02,"apparentTemperature":24.02,"dewPoint":0.58,"humidity":0.35,"windSpeed":2.99,"windBearing":245,"cloudCover":0.11,"pressure":1030.13,"ozone":375.11},{"time":1456452000,"summary":"Partly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":27.07,"apparentTemperature":21.51,"dewPoint":0.81,"humidity":0.31,"windSpeed":4.78,"windBearing":216,"cloudCover":0.27,"pressure":1029.04,"ozone":376.35},{"time":1456455600,"summary":"Partly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":30.49,"apparentTemperature":23.98,"dewPoint":1.15,"humidity":0.28,"windSpeed":6.57,"windBearing":209,"cloudCover":0.4,"pressure":1027.81,"ozone":376.94},{"time":1456459200,"summary":"Partly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":34.4,"apparentTemperature":28.06,"dewPoint":2.13,"humidity":0.25,"windSpeed":7.53,"windBearing":212,"cloudCover":0.49,"pressure":1026.29,"ozone":375.82},{"time":1456462800,"summary":"Partly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":38.67,"apparentTemperature":32.97,"dewPoint":3.92,"humidity":0.23,"windSpeed":7.99,"windBearing":219,"cloudCover":0.54,"pressure":1024.62,"ozone":374.05},{"time":1456466400,"summary":"Partly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":42.15,"apparentTemperature":37.18,"dewPoint":6.34,"humidity":0.22,"windSpeed":8.04,"windBearing":223,"cloudCover":0.56,"pressure":1023.23,"ozone":373.78},{"time":1456470000,"summary":"Partly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":43.94,"apparentTemperature":39.67,"dewPoint":9.3,"humidity":0.24,"windSpeed":7.42,"windBearing":220,"cloudCover":0.5,"pressure":1022.25,"ozone":376},{"time":1456473600,"summary":"Partly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":43.39,"apparentTemperature":39.57,"dewPoint":11.44,"humidity":0.27,"windSpeed":6.38,"windBearing":213,"cloudCover":0.4,"pressure":1021.53,"ozone":379.73},{"time":1456477200,"summary":"Partly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":41.79,"apparentTemperature":38.27,"dewPoint":12.66,"humidity":0.3,"windSpeed":5.42,"windBearing":209,"cloudCover":0.34,"pressure":1021.12,"ozone":384.1},{"time":1456480800,"summary":"Partly Cloudy","icon":"partly-cloudy-night","precipIntensity":0,"precipProbability":0,"temperature":39,"apparentTemperature":35.52,"dewPoint":12.27,"humidity":0.33,"windSpeed":4.73,"windBearing":212,"cloudCover":0.36,"pressure":1021.11,"ozone":389.33},{"time":1456484400,"summary":"Partly Cloudy","icon":"partly-cloudy-night","precipIntensity":0,"precipProbability":0,"temperature":35.62,"apparentTemperature":32.07,"dewPoint":10.99,"humidity":0.35,"windSpeed":4.19,"windBearing":222,"cloudCover":0.42,"pressure":1021.41,"ozone":395.2},{"time":1456488000,"summary":"Partly Cloudy","icon":"partly-cloudy-night","precipIntensity":0,"precipProbability":0,"temperature":33.01,"apparentTemperature":29.38,"dewPoint":10.39,"humidity":0.38,"windSpeed":3.87,"windBearing":242,"cloudCover":0.44,"pressure":1021.82,"ozone":400.24},{"time":1456491600,"summary":"Partly Cloudy","icon":"partly-cloudy-night","precipIntensity":0,"precipProbability":0,"temperature":31.84,"apparentTemperature":27.25,"dewPoint":11.48,"humidity":0.42,"windSpeed":4.62,"windBearing":274,"cloudCover":0.36,"pressure":1022.3,"ozone":404.11},{"time":1456495200,"summary":"Clear","icon":"clear-night","precipIntensity":0,"precipProbability":0,"temperature":31.43,"apparentTemperature":24.95,"dewPoint":13.33,"humidity":0.47,"windSpeed":6.8,"windBearing":296,"cloudCover":0.23,"pressure":1022.9,"ozone":407.13},{"time":1456498800,"summary":"Clear","icon":"clear-night","precipIntensity":0,"precipProbability":0,"temperature":30.95,"apparentTemperature":23.06,"dewPoint":14.59,"humidity":0.5,"windSpeed":8.85,"windBearing":306,"cloudCover":0.13,"pressure":1023.56,"ozone":408.79},{"time":1456502400,"summary":"Clear","icon":"clear-night","precipIntensity":0,"precipProbability":0,"temperature":30.01,"apparentTemperature":21.3,"dewPoint":14.94,"humidity":0.53,"windSpeed":9.93,"windBearing":311,"cloudCover":0.09,"pressure":1024.28,"ozone":408.69},{"time":1456506000,"summary":"Clear","icon":"clear-night","precipIntensity":0,"precipProbability":0,"temperature":28.91,"apparentTemperature":19.66,"dewPoint":14.81,"humidity":0.55,"windSpeed":10.43,"windBearing":316,"cloudCover":0.08,"pressure":1025.02,"ozone":407.23},{"time":1456509600,"summary":"Clear","icon":"clear-night","precipIntensity":0,"precipProbability":0,"temperature":27.84,"apparentTemperature":18.26,"dewPoint":14.2,"humidity":0.56,"windSpeed":10.57,"windBearing":319,"cloudCover":0.07,"pressure":1025.62,"ozone":405.02},{"time":1456513200,"summary":"Clear","icon":"clear-night","precipIntensity":0,"precipProbability":0,"temperature":26.67,"apparentTemperature":16.98,"dewPoint":12.77,"humidity":0.55,"windSpeed":10.25,"windBearing":321,"cloudCover":0.04,"pressure":1025.97,"ozone":401.74},{"time":1456516800,"summary":"Clear","icon":"clear-night","precipIntensity":0,"precipProbability":0,"temperature":25.37,"apparentTemperature":15.79,"dewPoint":10.73,"humidity":0.53,"windSpeed":9.52,"windBearing":323,"cloudCover":0.02,"pressure":1026.22,"ozone":397.7},{"time":1456520400,"summary":"Clear","icon":"clear-night","precipIntensity":0,"precipProbability":0,"temperature":24.32,"apparentTemperature":14.94,"dewPoint":8.89,"humidity":0.51,"windSpeed":8.81,"windBearing":325,"cloudCover":0,"pressure":1026.58,"ozone":394.55},{"time":1456524000,"summary":"Clear","icon":"clear-night","precipIntensity":0,"precipProbability":0,"temperature":23.62,"apparentTemperature":14.44,"dewPoint":7.55,"humidity":0.5,"windSpeed":8.29,"windBearing":328,"cloudCover":0,"pressure":1027.21,"ozone":393.12},{"time":1456527600,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":24.08,"apparentTemperature":15.33,"dewPoint":7.17,"humidity":0.48,"windSpeed":7.83,"windBearing":330,"cloudCover":0,"pressure":1027.97,"ozone":392.56},{"time":1456531200,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":25.04,"apparentTemperature":16.78,"dewPoint":6.88,"humidity":0.45,"windSpeed":7.44,"windBearing":333,"cloudCover":0,"pressure":1028.39,"ozone":391.95},{"time":1456534800,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":26.94,"apparentTemperature":19.22,"dewPoint":6.58,"humidity":0.41,"windSpeed":7.24,"windBearing":336,"cloudCover":0,"pressure":1028.49,"ozone":390.79},{"time":1456538400,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":29.59,"apparentTemperature":22.54,"dewPoint":6.19,"humidity":0.36,"windSpeed":7.08,"windBearing":338,"cloudCover":0,"pressure":1028.35,"ozone":389.57},{"time":1456542000,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":32.35,"apparentTemperature":26.22,"dewPoint":5.85,"humidity":0.32,"windSpeed":6.57,"windBearing":340,"cloudCover":0,"pressure":1027.98,"ozone":388.82},{"time":1456545600,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":35.09,"apparentTemperature":30.27,"dewPoint":6.14,"humidity":0.29,"windSpeed":5.53,"windBearing":344,"cloudCover":0,"pressure":1027.28,"ozone":388.69},{"time":1456549200,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":37.93,"apparentTemperature":34.79,"dewPoint":7.28,"humidity":0.27,"windSpeed":4.14,"windBearing":350,"cloudCover":0,"pressure":1026.42,"ozone":389.02},{"time":1456552800,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":40.21,"apparentTemperature":40.21,"dewPoint":8.89,"humidity":0.27,"windSpeed":2.6,"windBearing":7,"cloudCover":0.01,"pressure":1025.74,"ozone":389.87},{"time":1456556400,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":41.23,"apparentTemperature":41.23,"dewPoint":10.54,"humidity":0.28,"windSpeed":1.71,"windBearing":76,"cloudCover":0.11,"pressure":1025.35,"ozone":391.08},{"time":1456560000,"summary":"Partly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":40.32,"apparentTemperature":37.91,"dewPoint":11.4,"humidity":0.3,"windSpeed":3.77,"windBearing":123,"cloudCover":0.25,"pressure":1025.11,"ozone":392.81},{"time":1456563600,"summary":"Partly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":38.62,"apparentTemperature":34.53,"dewPoint":11.86,"humidity":0.33,"windSpeed":5.41,"windBearing":129,"cloudCover":0.37,"pressure":1025.2,"ozone":395.59}]},"daily":{"summary":"Flurries over the weekend, with temperatures bottoming out at 36°F on Sunday.","icon":"snow","data":[{"time":1456329600,"summary":"Mostly cloudy until afternoon.","icon":"partly-cloudy-day","sunriseTime":1456354641,"sunsetTime":1456394536,"moonPhase":0.58,"precipIntensity":0,"precipIntensityMax":0,"precipProbability":0,"temperatureMin":20.34,"temperatureMinTime":1456344000,"temperatureMax":36.52,"temperatureMaxTime":1456387200,"apparentTemperatureMin":12.38,"apparentTemperatureMinTime":1456344000,"apparentTemperatureMax":32.63,"apparentTemperatureMaxTime":1456387200,"dewPoint":3.7,"humidity":0.36,"windSpeed":3.75,"windBearing":300,"cloudCover":0.32,"pressure":1034.17,"ozone":396.62},{"time":1456416000,"summary":"Partly cloudy until evening.","icon":"partly-cloudy-day","sunriseTime":1456440955,"sunsetTime":1456481004,"moonPhase":0.61,"precipIntensity":0,"precipIntensityMax":0,"precipProbability":0,"temperatureMin":19.49,"temperatureMinTime":1456437600,"temperatureMax":43.94,"temperatureMaxTime":1456470000,"apparentTemperatureMin":13.38,"apparentTemperatureMinTime":1456430400,"apparentTemperatureMax":39.67,"apparentTemperatureMaxTime":1456470000,"dewPoint":5.42,"humidity":0.35,"windSpeed":4.06,"windBearing":263,"cloudCover":0.23,"pressure":1027.3,"ozone":383.57},{"time":1456502400,"summary":"Flurries overnight.","icon":"snow","sunriseTime":1456527268,"sunsetTime":1456567471,"moonPhase":0.64,"precipIntensity":0.0003,"precipIntensityMax":0.0017,"precipIntensityMaxTime":1456585200,"precipProbability":0.04,"precipType":"snow","precipAccumulation":0.071,"temperatureMin":23.62,"temperatureMinTime":1456524000,"temperatureMax":41.23,"temperatureMaxTime":1456556400,"apparentTemperatureMin":14.44,"apparentTemperatureMinTime":1456524000,"apparentTemperatureMax":41.23,"apparentTemperatureMaxTime":1456556400,"dewPoint":9.68,"humidity":0.41,"windSpeed":4.03,"windBearing":339,"cloudCover":0.22,"pressure":1026.44,"ozone":398.79},{"time":1456588800,"summary":"Partly cloudy in the morning.","icon":"partly-cloudy-night","sunriseTime":1456613580,"sunsetTime":1456653938,"moonPhase":0.67,"precipIntensity":0.0005,"precipIntensityMax":0.002,"precipIntensityMaxTime":1456592400,"precipProbability":0.05,"precipType":"snow","precipAccumulation":0.148,"temperatureMin":21.26,"temperatureMinTime":1456617600,"temperatureMax":35.81,"temperatureMaxTime":1456642800,"apparentTemperatureMin":8.2,"apparentTemperatureMinTime":1456617600,"apparentTemperatureMax":25.97,"apparentTemperatureMaxTime":1456642800,"dewPoint":7.94,"humidity":0.45,"windSpeed":9.93,"windBearing":320,"cloudCover":0.29,"pressure":1032.39,"ozone":403.5},{"time":1456675200,"summary":"Mostly cloudy throughout the day.","icon":"partly-cloudy-night","sunriseTime":1456699891,"sunsetTime":1456740405,"moonPhase":0.7,"precipIntensity":0,"precipIntensityMax":0,"precipProbability":0,"temperatureMin":19.27,"temperatureMinTime":1456693200,"temperatureMax":37.64,"temperatureMaxTime":1456729200,"apparentTemperatureMin":14.46,"apparentTemperatureMinTime":1456678800,"apparentTemperatureMax":34.03,"apparentTemperatureMaxTime":1456729200,"dewPoint":8.02,"humidity":0.45,"windSpeed":2.09,"windBearing":228,"cloudCover":0.5,"pressure":1030.82,"ozone":349.92},{"time":1456761600,"summary":"Clear throughout the day.","icon":"clear-day","sunriseTime":1456786202,"sunsetTime":1456826871,"moonPhase":0.73,"precipIntensity":0,"precipIntensityMax":0,"precipProbability":0,"temperatureMin":26.39,"temperatureMinTime":1456779600,"temperatureMax":46.52,"temperatureMaxTime":1456812000,"apparentTemperatureMin":19.22,"apparentTemperatureMinTime":1456783200,"apparentTemperatureMax":41.71,"apparentTemperatureMaxTime":1456812000,"dewPoint":16.99,"humidity":0.5,"windSpeed":6.88,"windBearing":309,"cloudCover":0.15,"pressure":1025.98,"ozone":336.53},{"time":1456848000,"summary":"Clear throughout the day.","icon":"clear-day","sunriseTime":1456872511,"sunsetTime":1456913337,"moonPhase":0.76,"precipIntensity":0,"precipIntensityMax":0,"precipProbability":0,"temperatureMin":29.22,"temperatureMinTime":1456866000,"temperatureMax":53.1,"temperatureMaxTime":1456902000,"apparentTemperatureMin":23.45,"apparentTemperatureMinTime":1456866000,"apparentTemperatureMax":53.1,"apparentTemperatureMaxTime":1456902000,"dewPoint":19.69,"humidity":0.48,"windSpeed":3.24,"windBearing":275,"cloudCover":0,"pressure":1024.43,"ozone":336.09},{"time":1456934400,"summary":"Mostly cloudy starting in the evening.","icon":"partly-cloudy-night","sunriseTime":1456958820,"sunsetTime":1456999802,"moonPhase":0.79,"precipIntensity":0,"precipIntensityMax":0,"precipProbability":0,"temperatureMin":31.07,"temperatureMinTime":1456952400,"temperatureMax":55.67,"temperatureMaxTime":1456988400,"apparentTemperatureMin":29.52,"apparentTemperatureMinTime":1456945200,"apparentTemperatureMax":55.67,"apparentTemperatureMaxTime":1456988400,"dewPoint":21.18,"humidity":0.44,"windSpeed":1.13,"windBearing":260,"cloudCover":0.14,"pressure":1018.26,"ozone":354.26}]},"flags":{"sources":["gfs","cmc","fnmoc","isd"],"isd-stations":["544050-99999","545010-99999","545110-99999","545120-99999","545130-99999"],"units":"us"}}';

describe('format', function () {
    it('is a constructor of the Format object', function() {
		assert(typeof(format) === 'function');
		assert(typeof(format(json, units)) === 'object');
    });
});
