var accordions = document.querySelectorAll(".accordion");

accordions.forEach(function (accordionItem) {
  accordionItem.addEventListener("click", function () {
    var panel = this.nextElementSibling;
    var isActive = this.classList.contains("active");

    if (isActive) {
      accordions.forEach(function (item) {
        item.classList.remove("active");
        item.childNodes[3].src = "assets/images/icon-plus.svg";
        item.nextElementSibling.style.display = "none";
      });
    } else {
      accordions.forEach(function (item) {
        item.classList.remove("active");
        item.childNodes[3].src = "assets/images/icon-plus.svg";
        item.nextElementSibling.style.display = "none";
      });
      this.classList.add("active");
      this.childNodes[3].src = "assets/images/icon-minus.svg";
      panel.style.display = "block";
    }
  });
});
