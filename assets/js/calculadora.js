function calcularPrecio(valorCompra, utilidad, iva) {
  let porcentajeUtilidad = utilidad / 100;
  let porcentajeIva = iva / 100;
  let precioIva = valorCompra * porcentajeIva;
  let gananciaEstimada = valorCompra * porcentajeUtilidad;

  let precio = valorCompra + gananciaEstimada + precioIva;

  return { precio, gananciaEstimada };
}

function showInfo(precioVenta) {
  let caja_ganancia = document.querySelector('.valor_ganancia');
  let caja_precioVenta = document.querySelector('.valor_venta');

  caja_precioVenta.innerHTML = `<span class="money">$${precioVenta.precio}</span>`;
  caja_ganancia.innerHTML = `<span>$${precioVenta.gananciaEstimada}</span>`;
}

function calculadoraPrecioVenta() {
  let valorCompra = Number(document.getElementById('valor_compra').value);
  let utilidad = Number(document.getElementById('utilidad').value);
  let iva = 19;

  if (
    valorCompra != '' &&
    utilidad != '' &&
    valorCompra != null &&
    utilidad != null
  ) {
    document.getElementById('valor_compra').classList.remove('error');
    document.getElementById('utilidad').classList.remove('error');
    document.querySelector('label.valor_compra').classList.remove('error');
    document
      .querySelector('label.porcentaje_utilidad')
      .classList.remove('error');

    let precioVenta = calcularPrecio(valorCompra, utilidad, iva);

    showInfo(precioVenta);
  } else {
    document.getElementById('valor_compra').classList.add('error');
    document.getElementById('utilidad').classList.add('error');
    document.querySelector('label.valor_compra').classList.add('error');
    document.querySelector('label.porcentaje_utilidad').classList.add('error');
  }
}

//Listeners para los botones de los formularios
document
  .getElementById('venta_submitBtn')
  .addEventListener('click', function () {
    calculadoraPrecioVenta();
  });

document.querySelector('.btn.limpiar').addEventListener('click', () => {
  let caja_utilidad = document.querySelector('input#utilidad');
  let caja_valor = document.querySelector('input#valor_compra');
  caja_utilidad.value = '';
  caja_valor.value = '';
  document.getElementById('valor_compra').classList.remove('error');
  document.getElementById('utilidad').classList.remove('error');
  document.querySelector('label.valor_compra').classList.remove('error');
  document.querySelector('label.porcentaje_utilidad').classList.remove('error');
});
