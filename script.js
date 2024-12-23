document.getElementById("backtotop").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Smooth scrolling effect
  });
});

const backToTopButton = document.getElementById("backtotop");

window.addEventListener("scroll", function () {
  if (window.scrollY > 200) {
    // Show button after 200px scroll
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});
