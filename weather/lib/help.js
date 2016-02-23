var chalk = require('chalk'),
  pkg = require('../package.json'),
  col = chalk.bgBlack.white;

/**
 * Display the help message. 
 * @param {object} args - The command line parameters that you passed to the program.
 */
function help(args) {

  var belp =
    '\ncli-weather, version ' + col(pkg.version) + '\n' +
    '--------------------------\n' +
    'available commands:\n' +
      '\t ' + col('-a, --address') + '\tpass address\n' +
      '\t ' + col('-s, --save') + '\tsave preset(s)\n' +
      '\t ' + col('--long') + '\t\tpass longitude (requires ' + col('--lat') + ')\n' +
      '\t ' + col('--lat') + '\t\tpass latitude (requires ' + col('--long') + ')\n' +
      '\t ' + col('-c, --config') + '\tuse metric' + '\n' +
      '\t ' + col('-h, --help') + '\tdisplay this help text' + '\n' +
      '\t ' + col('-v, --verbose') + '\tverbose';

  if (args.h || args.help) {
      console.log(belp);
      process.exit(0);
  }
}

module.exports = help;
