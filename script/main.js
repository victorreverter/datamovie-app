// window.onload = function () {};

// // Close resulter
// var closeResult = document.getElementById('closer-result');
var resulterSearch = document.getElementById("resulter-search");
var seeMore = document.querySelectorAll('.see-more');

// console.log(seeMore);

// Navegar por las categorias de búsquedas

var categoryItem = document.querySelectorAll('.category-item');
console.log(categoryItem);

var movieBlock = document.getElementById('movies-block');
var tvBlock = document.getElementById('tv-block');
var personBlock = document.getElementById('person-block');

categoryItem[0].addEventListener('click', function() {
  categoryItem[0].classList.add('selected-category');
  categoryItem[1].classList.remove('selected-category');
  categoryItem[2].classList.remove('selected-category');

  movieBlock.style.display = "block";
  tvBlock.style.display = "none";
  personBlock.style.display = "none";
});

categoryItem[1].addEventListener('click', function() {
  categoryItem[0].classList.remove('selected-category');
  categoryItem[1].classList.add('selected-category');
  categoryItem[2].classList.remove('selected-category');

  movieBlock.style.display = "none";
  tvBlock.style.display = "block";
  personBlock.style.display = "none";
});

categoryItem[2].addEventListener('click', function() {
  categoryItem[0].classList.remove('selected-category');
  categoryItem[1].classList.remove('selected-category');
  categoryItem[2].classList.add('selected-category');

  movieBlock.style.display = "none";
  tvBlock.style.display = "none";
  personBlock.style.display = "block";
});

// -----------------------------------------------------------------

// if(categoryItem[0].checked == true) {
//   console.log(categoryItem[0].className);
// }

// function navCategory() {
//   console.log(categoryItem[0].className);
//   console.log(Boolean(categoryItem[0].getElementsByClassName('selected-category')));
//   console.log(Boolean(categoryItem[0].className == 'selected-category'))
//   // catItem[1].classList.add('selected-category');
//   if(categoryItem[0].clicked == true) {
//     console.log(categoryItem[0].className);
//   }
// }

// // Veil Layer
// var veilLayer = document.getElementById('veil-layer');
//
// // Body element
// var bodyElem = document.getElementById('body-elem');
//
// // Abrir resulter
// function myRes(idValue) {
//   window.scrollTo(0, 0);
//   resulterSearch.classList.add('show-up');
//
//   veilLayer.style.display = 'block';
//   bodyElem.classList.add('body-overflow');
//
//   var popUpUrl = "https://api.themoviedb.org/3/person/" + idSearch + "?api_key=" + movieDBKey + "&append_to_response=videos,images";
//
//   fetch(popUpUrl)
//   .then(function(movie){
//     return movie.json();
//   })
//   .then(function(movieJson){
//
//   })
//   .catch(function(error){
//     console.log('RequestFailed-PopUp', error);
//   });
// }
//
// // Cerrar resulter
//
// closeResult.addEventListener('click', function() {
//   resulterSearch.classList.remove('show-up');
//
//   veilLayer.style.display = "none";
//   bodyElem.classList.remove('body-overflow');
// });
//
// // Llamada al trailer de Youtube
//
// var trailerCall = document.getElementById('trailer-btn');
// var iframeYoutube = document.getElementById('media-popup');
// var iframe = iframeYoutube.querySelector('iframe');
//
// // FadeIn trailer
//
// trailerCall.addEventListener('click', function() {
//   iframeYoutube.classList.add("show-popup");
// });
//
// // FadeOut trailer
// iframeYoutube.addEventListener('click', function() {
//   stopVideo(iframeYoutube);
//   iframeYoutube.classList.remove("show-popup");
// });
//
// // Stop Video function
// var stopVideo = function(element) {
//   if ( iframe !== null ) {
//     var iframeSrc = iframe.src;
//     iframe.src = iframeSrc;
//   }
// }
