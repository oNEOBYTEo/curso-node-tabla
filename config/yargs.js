const argv = require('yargs')
  .options({
    b: {
      alias: 'base',
      type: 'number',
      demandOption: true,
      describe: 'Es la base de la tabla de multiplicar',
    },
    l: {
      alias: 'listar',
      type: 'boolean',
      default: false,
      describe: 'Muestra el resultado de la tabla',
    },
    h: {
      alias: 'hasta',
      type: 'number',
      default: 10,
      describe: 'Limite de la tabla',
    },
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw 'La base tiene que ser un número';
    } else if (isNaN(argv.h)) {
      throw 'Hasta tiene que ser un número';
    }
    return true;
  }).argv;

module.exports = argv;
