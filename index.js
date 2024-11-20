const images = document.querySelectorAll(".testimonial-images img");
const nameElement = document.querySelector(".testimonial-details h3");
const testimonialElement = document.querySelector(".testimonial-text");
const authorNameElement = document.querySelector(".author-info .name");
const countryElement = document.querySelector(".author-info .country");

images.forEach((image) => {
  image.addEventListener("click", () => {
    // Remove 'active' class from all images
    images.forEach((img) => img.classList.remove("active"));

    // Add 'active' class to the clicked image
    image.classList.add("active");

    // Update testimonial content
    nameElement.textContent = image.dataset.name;
    testimonialElement.textContent = image.dataset.testimonial;
    authorNameElement.textContent = image.dataset.name;
    countryElement.textContent = image.dataset.country;
  });
});

document.querySelectorAll(".custom-select").forEach((selectWrapper) => {
  const selectElement = selectWrapper.querySelector("select");
  const selectedDiv = document.createElement("div");
  selectedDiv.className = "select-selected";
  selectedDiv.innerHTML =
    selectElement.options[selectElement.selectedIndex].innerHTML;
  selectWrapper.appendChild(selectedDiv);

  const optionsDiv = document.createElement("div");
  optionsDiv.className = "select-items select-hide";
  for (let i = 0; i < selectElement.options.length; i++) {
    const optionDiv = document.createElement("div");
    optionDiv.innerHTML = selectElement.options[i].innerHTML;
    optionDiv.addEventListener("click", function () {
      const select = this.parentNode.parentNode.querySelector("select");
      const selected = this.parentNode.previousSibling;
      for (let j = 0; j < select.length; j++) {
        if (select.options[j].innerHTML === this.innerHTML) {
          select.selectedIndex = j;
          selected.innerHTML = this.innerHTML;
          const sameAsSelected =
            this.parentNode.getElementsByClassName("same-as-selected");
          for (let k = 0; k < sameAsSelected.length; k++) {
            sameAsSelected[k].removeAttribute("class");
          }
          this.setAttribute("class", "same-as-selected");
          break;
        }
      }
      selected.click();
    });
    optionsDiv.appendChild(optionDiv);
  }
  selectWrapper.appendChild(optionsDiv);

  selectedDiv.addEventListener("click", function (e) {
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
});

function closeAllSelect(elmnt) {
  const items = document.getElementsByClassName("select-items");
  const selected = document.getElementsByClassName("select-selected");
  for (let i = 0; i < selected.length; i++) {
    if (elmnt === selected[i]) {
      continue;
    }
    selected[i].classList.remove("select-arrow-active");
  }
  for (let i = 0; i < items.length; i++) {
    items[i].classList.add("select-hide");
  }
}

document.addEventListener("click", closeAllSelect);
