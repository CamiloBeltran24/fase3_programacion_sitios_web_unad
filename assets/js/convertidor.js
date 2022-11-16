const byte = {
  byteToKilobyte: function (bytes) {
    return bytes / 1000;
  },
  byteToMegabyte: function (bytes) {
    return bytes / 1000000;
  },
  byteToGigabyte: function (bytes) {
    return bytes / 1000000000;
  },
  byteToTerabyte: function (bytes) {
    return bytes / 1000000000000;
  },
};

const kiloByte = {
  kilobyteToByte: function (kilobytes) {
    return kilobytes * 1000;
  },
  kilobyteToMegabyte: function (kilobytes) {
    return kilobytes / 1000;
  },
  kilobyteToGigabyte: function (kilobytes) {
    return kilobytes / 100000;
  },
  kilobyteToTerabyte: function (kilobytes) {
    return kilobytes / 1000000000;
  },
};

const megaByte = {
  megabyteToByte: function (megabyte) {
    return megabyte * 1000000;
  },
  megabyteToKilobyte: function (megabyte) {
    return megabyte * 1000;
  },
  megabyteToTeraByte: function (megabyte) {
    return megabyte / 1000000;
  },
  megabyteToGigabyte: function (megabyte) {
    return megabyte / 1000;
  },
};

const gigaByte = {
  gigabyteToByte: function (gigabytes) {
    return gigabytes * 1000000000;
  },
  gigabyteToKilobyte: function (gigabytes) {
    return gigabytes * 1000000;
  },
  gigabyteToMegabyte: function (gigabytes) {
    return gigabytes * 1000;
  },
  gigabyteToTerabyte: function (gigabytes) {
    return gigabytes / 1000;
  },
};

const teraByte = {
  terabyteToByte: (terabytes) => {
    terabytes * 1000000000000;
  },
  terabyteToKilobyte: (terabytes) => {
    terabytes * 1000000000;
  },
  terabyteToMegabyte: (terabytes) => {
    terabytes * 1000000;
  },
  terabyteToGigabyte: (terabytes) => {
    terabytes / 1000;
  },
};

function checkNumber(number_box) {
  if (number_box.value != '') {
    let number = Number(number_box.value);
    return number;
  } else {
    return false;
  }
}

function calcular(numero, inicial, buscado) {
  let result = 0;
  let unidad = '';
  switch ((inicial, buscado)) {
    //Byte
    case ('byte', 'kilobyte'):
      result = byte.byteToKilobyte(numero);
      unidad = 'kilobytes';
      break;
    case ('byte', 'megabyte'):
      result = byte.byteToMegabyte(numero);
      unidad = 'megabytes';
      break;
    case ('byte', 'gigabyte'):
      result = byte.byteToGigabyte(numero);
      unidad = 'gigabytes';
      break;
    case ('byte', 'terabyte'):
      result = byte.byteToTerabyte(numero);
      unidad = 'terabytes';
      break;
    // Kilobyte
    case ('kilobyte', 'byte'):
      result = kiloByte.kilobyteToByte(numero);
      unidad = 'bytes';
      break;
    case ('kilobyte', 'megabyte'):
      result = kiloByte.kilobyteToMegabyte(numero);
      unidad = 'megabytes';
      break;
    case ('kilobyte', 'terabyte'):
      result = kiloByte.kilobyteToTerabyte(numero);
      unidad = 'terabytes';
      break;
    //Megabyte
    case ('megabyte', 'byte'):
      result = megaByte.megabyteToByte(numero);
      unidad = 'bytes';
      break;
    case ('megabyte', 'kilobyte'):
      result = megaByte.megabyteToKilobyte(numero);
      unidad = 'kilobytes';
      break;
    case ('megabyte', 'gigabyte'):
      result = megaByte.megabyteToGigabyte(numero);
      unidad = 'gigabytes';
      break;
    case ('megabyte', 'terabyte'):
      result = megaByte.megabyteToTeraByte(numero);
      unidad = 'terabytes';
      break;
    //Gigabyte
    case ('gigabyte', 'byte'):
      result = gigaByte.gigabyteToByte(numero);
      unidad = 'bytes';
      break;
    case ('gigabyte', 'kilobyte'):
      result = gigaByte.gigabyteToKilobyte(numero);
      unidad = 'kilobytes';
      break;
    case ('gigabyte', 'megabyte'):
      result = gigaByte.gigabyteToMegabyte(numero);
      unidad = 'megabytes';
      break;
    case ('gigabyte', 'terabyte'):
      result = gigaByte.gigabyteToTerabyte(numero);
      unidad = 'terabytes';
      break;
    //Terabyte
    case ('terabyte', 'byte'):
      result = teraByte.terabyteToByte(numero);
      unidad = 'bytes';
      break;
    case ('terabyte', 'kilobyte'):
      result = teraByte.terabyteToKilobyte(numero);
      unidad = 'kilobytes';
      break;
    case ('terabyte', 'megabyte'):
      result = terabyteToMegabyte(numero);
      unidad = 'megabytes';
      break;
    case ('terabyte', 'gigabyte'):
      result = teraByte.terabyteToGigabyte(numero);
      unidad = 'gigabytes';
      break;
    default:
      result = 0;
      break;
  }

  return { result, unidad };
}

function showResults(result) {
  let cajaResultado = document.querySelector('.valor_venta');
  let cajaUnidad = document.querySelector('.valor_ganancia');
  cajaResultado.innerHTML = `<span>${result.result}</span>`;
  cajaUnidad.innerHTML = `<span>${result.unidad}</span>`;
}

let button = document.getElementById('calculadora_btn');

button.addEventListener('click', () => {
  let number_box = document.getElementById('cantidad');
  let inicial = document.getElementById('actual').value;
  let buscado = document.getElementById('buscado').value;

  if (buscado != inicial) {
    let number = checkNumber(number_box) ? checkNumber(number_box) : ''; //ternario para comprobar
    let result = calcular(number, inicial, buscado);
    showResults(result);
  } else {
    alert('Hey, Selecciona unidades diferentes');
  }
});

//Limpiar cajas
document.querySelector('.btn.limpiar').addEventListener('click', () => {
  let caja_unidad = document.getElementById('cantidad');
  caja_unidad.value = '';

  caja_unidad.classList.remove('error');
  document.querySelector('label.cantidad').classList.remove('error');
});
