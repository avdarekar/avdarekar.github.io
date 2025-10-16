/* Code from w3schools.com */

/* Expand and collapse text */
var collapse = document.getElementsByClassName("collapse__button");
var i;

for (i = 0; i < collapse.length; i++) {
  collapse[i].addEventListener("click", function () {
    this.classList.toggle("active");

    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
      this.innerText = "Expand";
    } else {
      content.style.display = "block";
      this.innerText = "Collapse";
    }
  });
}
