const monthlyPrices = document.querySelectorAll(".planValue__month");

const annualPrices = document.querySelectorAll(".planValue__year");

toggle.checked == true;

/* First, the code calls a function everytime the toggle changes. This function will execute a forEach for all the price spans and display the correct price for each position of toggle */

toggle.addEventListener("change", function () {
  monthlyPrices.forEach((monthlyPrice) => {
    monthlyPrice.style.display = toggle.checked == true ? "block" : "none";
  });
  annualPrices.forEach((annualPrice) => {
    annualPrice.style.display = toggle.checked == true ? "none" : "block";
  });
});
