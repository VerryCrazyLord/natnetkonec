var modal = document.getElementById("myModal");
var video__play = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

video__play.onclick = function () {
  modal.style.display = "block";
}

span.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

let reviewsInfo = document.querySelector('.reviews__info-text');
let reviewsName = document.querySelector('.reviews__name');
let reviewsText = document.querySelector('.reviews__text');
let reviewsImages = document.querySelectorAll('.reviews__item');
let reviews = [
  {
    name: "Anime class",
    position: "absolute",
    text: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh velvelit auctor aliquet.Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit."
  },
  {
    name: "Anime govno",
    position: "absolute",
    text: "Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit."
  },
  {
    name: "Anime govno",
    position: "absolute",
    text: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh velvelit auctor aliquet.Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.Morbi accumsan ipsum velit.Nam nec tellus a odio tincidunt auctor a ornare odio.Sed non mauris vitae erat consequat auctor eu in elit."
  },
  {
    name: "Anime govno",
    position: "absolute",
    text: " lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auct"
  },
  {
    name: "Anime govno",
    position: "absolute",
    text: "n of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a orna"
  }
];
reviewsImages.forEach((item, i) => item.addEventListener('click', () => showComment(i)))
function showComment(i) {
  reviewsInfo.innerHTML = "";
  reviewsInfo.append(reviews[i].text);
  reviewsImages.forEach(item => item.classList.remove('reviews__item-active'))
  reviewsImages[i].classList.add('reviews__item-active')
}