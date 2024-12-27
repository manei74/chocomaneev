// const scImage = document.getElementById("spicy_citrus");

// scImage.addEventListener("mouseover", () => {
//   scImage.src = "img/sc_spicycitrus_slice.jpg";
// });

// scImage.addEventListener("mouseout", () => {
//   scImage.src = "img/sc_spicycitrus.jpg";
// });

function changePicture(idElement) {
  const image = document.getElementById(idElement);

  if (!image) {
    console.error(`Element with id '${idElement}' not found.`);
    return;
  }

  image.addEventListener("mouseover", () => {
    image.src = `img/${idElement}_slice.jpg`;
  });

  image.addEventListener("mouseout", () => {
    image.src = `img/${idElement}.jpg`;
  });
}

changePicture("sc_spicycitrus");
changePicture("sc_bananaalmond");
changePicture("sc_caramelcookies");
changePicture("sc_peachyogurt");
changePicture("truf_american");
changePicture("truf_coconat");
changePicture("truf_dark");
changePicture("truf_dubai");

// banana_almond;
