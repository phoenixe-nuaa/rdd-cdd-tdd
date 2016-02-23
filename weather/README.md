# cli-weather
----

## Dependencies  
This program require the package below:
+ istanbul: V0.4.2  
+ jshint: V2.9.1-rc2
+ minimist: V1.2.0
+ mocha: V2.3.4
+ public-ip: V1.1.
+ update-notifier: V0.6.0 

Use `npm install` to make sure you have installed all these package so that we can start.  
Run `npm run test` to run all the testcase via `mocha`.

## Usage  
### 1. Default mode  
Just enter `node index.js`, and it will get your location by your IP address and display the forecast.

*Note that the first time you use it, it will report that your do not have a pre-set.  
You can use `-s` or `-save` option to save your preferences in `lib/data.json`. The next time you use it, it will automatically read your preferences from the config file.*

### 2. Weather in specific area  
When you want know the weather of somewhere else instead of where you stay, You can pass the address(`-a`) or longitude and latitude (`--long --lat`) to get specific forecast information.  

`node index.js -a Paris` or `node index.js --long 116.219146 --lat 39.995242`

*Note that when you choose `--long` or `lat`, both of them are indispensable.*

### 3. Switch scale  
We have two scale to choose from, ˚F and ˚C.Use option `-c` to switch it. 

### 4. Help  
Run `node index.js -h` or `node index.js --help` to get more help. 

## Questions and issues  
You can report any issues in [GitHub](https://github.com/92bondstreet/rdd-cdd-tdd/issues).
## License  
The MIT License (MIT)
