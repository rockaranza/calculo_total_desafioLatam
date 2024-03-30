// Captura elementos HTML
const quantity = document.querySelector(".cantidad");
const btnAdd = document.querySelector("#btnAdd");
const btnSubtract = document.querySelector("#btnSubtract");
const priceSpan = document.querySelector(".precio-inicial");
const totalPrice = document.querySelector(".valor-total");

// Variables
const price = 400000;
let quantityValue = 0;

// Actualizar total
function updateTotal() {
  const total = price * quantityValue;
  totalPrice.innerHTML = total;
}

// Check de btnSubstract segun quantity
function checkBtnSubstract() {
  btnSubtract.disabled = quantityValue === 0; // si cumple es TRUE, si no FALSE
}

// Sumar elementos
btnAdd.addEventListener('click', function() {
  quantityValue++;
  quantity.innerHTML = quantityValue;
  updateTotal();
  checkBtnSubstract();
});

// Restar elementos
btnSubtract.addEventListener('click', function() {
  if(quantityValue > 0) {
    quantityValue --;
    quantity.innerHTML = quantityValue;
    updateTotal();
    checkBtnSubstract()
  };
});

// Carga de estados en el sitio
document.addEventListener('DOMContentLoaded', function() {
  priceSpan.innerHTML = price;
  btnSubtract.disabled = true; // Inicia desactivado por no haber elementos en el carro
});