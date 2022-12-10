let productElement = document.querySelectorAll(".product");
let containerElement = document.getElementById("container");
let btnElement = document.getElementById("addToCart");
let totalPriceElement = document.getElementById("totalPrice");
let totalPrice = 0;
productElement.forEach(function (el) {
  el.addEventListener("click", function () {
    totalPrice += parseInt(el.getAttribute("price"));
    containerElement.innerHTML +=
      el.textContent + " " + el.getAttribute("price") + "<br>";
    btnElement.style.display = "block";
  });
});

btnElement.addEventListener("click", function () {
  totalPriceElement.innerHTML = "Total Price =" + totalPrice;
});
