const monthlyPrices = document.querySelectorAll(".planValue__month");

const annualPrices = document.querySelectorAll(".planValue__year");

toggle.checked == true;

toggle.addEventListener("change", function () {
  monthlyPrices.forEach((monthlyPrice) => {
    monthlyPrice.style.display = toggle.checked == true ? "block" : "none";
  });
  annualPrices.forEach((annualPrice) => {
    annualPrice.style.display = toggle.checked == true ? "none" : "block";
  });
});
