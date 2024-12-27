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

function updateVideoSource() {
  const videoElement = document.querySelector(".myVideo");
  const sourceElement = document.querySelector(".videoSource");
  console.log(sourceElement);
  console.log(window.innerWidth);

  if (window.innerWidth <= 500) {
    if (sourceElement.src !== window.location.origin + "/filem.mp4") {
      sourceElement.src = "finalm.mp4"; // Change to smaller video
      videoElement.load(); // Reload the video with the new source
    }
  } else {
    if (sourceElement.src !== window.location.origin + "/final.mp4") {
      sourceElement.src = "final.mp4"; // Default video
      videoElement.load(); // Reload the video with the new source
    }
  }
}

// Run on page load
window.addEventListener("load", updateVideoSource);

// Run on window resize
window.addEventListener("resize", updateVideoSource);

const btnShopnow = document.getElementById("button_shop");

btnShopnow.addEventListener("click", function () {
  const telegramUrl = "https://www.t.me/chocomaneev";
  window.open(telegramUrl, "_blank");
});

const btnAllproducts = document.getElementById("button_allproducts");

btnAllproducts.addEventListener("click", function () {
  const assortmentUrl = "assortment.html";
  window.open(assortmentUrl, "_blank");
});
