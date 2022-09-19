const fs = require('fs');

require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
  try {
    let salida = '',
      consola = '';
    const nombreArchivo = `./salida/tabla-${base}.txt`;

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} X ${i} = ${i * base}\n`;
      consola += `${base} ${'X'.cyan} ${i} ${'='.cyan} ${i * base}\n`;
    }

    listar &&
      console.log(
        `${'==============='.green}\n  Tabla Del: ${String(base).green}\n${
          '==============='.green
        }\n${consola}`
      );

    fs.writeFileSync(nombreArchivo, salida);

    return nombreArchivo;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo,
};
