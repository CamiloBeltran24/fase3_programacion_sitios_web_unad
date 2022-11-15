let button = document.getElementById('calculadora_btn');

function checkNumber(number_box) {
  if (number_box.value != '') {
    let number = Number(number_box.value);
    return number;
  } else {
    return false;
  }
}

function calcular(numero, inicial, buscado) {
  let resultado = 0;
  switch ((inicial, buscado)) {
    case ('bytes', 'kilobyte'):
      resultado = numero / 1024;
      break;

    case ('bytes', 'megabyte'):
      break;

    case ('bytes', 'gigabyte'):
      break;

    case ('bytes', 'terabyte'):
      break;

    case ('kilobytes', 'megabyte'):
      break;
    default:
      break;
  }
}

button.addEventListener('click', () => {
  let number_box = document.getElementById('cantidad');
  let inicial = document.getElementById('actual').value;
  let buscado = document.getElementById('buscado').value;

  if (buscado != inicial) {
    let number = checkNumber(number_box) ? checkNumber(number_box) : '';
    calcular(number, inicial, buscado);
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
