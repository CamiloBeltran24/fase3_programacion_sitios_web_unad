let button = document.getElementById('calculadora_btn');

let byte = {
  byteToKilobyte: function (bytes) {
    return bytes / 1000
  },
  byteToMegabyte:function(bytes){
    return bytes / 1000000
  },
  byteToGigabyte:function(bytes){
    return bytes / 1000000000
  },
  byteToTerabyte:function(bytes){
    return bytes / 1000000000000
  }
};

const kilobyte = {
  kilobyteToByte: function(){},
  kilobyteToMegabyte:function(){},
  kilobyteToGigabyte: function(){},
  kilobyteToterabyte: function(){}
}

const megaByte = {
  
}

console.log(byte.byteToKilobyte(1));

function checkNumber(number_box) {
  if (number_box.value != '') {
    let number = Number(number_box.value);
    return number;
  } else {
    return false;
  }
}


button.addEventListener('click', () => {
  let number_box = document.getElementById('cantidad');
  let inicial = document.getElementById('actual').value;
  let buscado = document.getElementById('buscado').value;

  if (buscado != inicial) {
    let number = checkNumber(number_box) ? checkNumber(number_box) : ''; //ternario para comprobar validar el numero y asignarlo a la
    // calcular(number, inicial, buscado);
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
