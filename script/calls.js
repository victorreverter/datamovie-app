
var searchBtn = document.getElementById('btn-search');
var movieDBKey = 'e962fcd71f30befe6e49c1956de17142';

//POP UP call

// Veil Layer
var veilLayer = document.getElementById('veil-layer');

// Body element
var bodyElem = document.getElementById('body-elem');
var resulterBlock = document.getElementById('resulter-search');

// Abrir resulter
function myResMovie(idValue) {
  window.scrollTo(0, 0);
  resulterSearch.classList.add('show-up');

  veilLayer.style.display = 'block';
  // bodyElem.classList.add('body-overflow');

  var popUpUrlMovie = "https://api.themoviedb.org/3/movie/" + idValue + "?api_key=" + movieDBKey + "&append_to_response=videos,images";

  // console.log(popUpUrlMovie);

  fetch(popUpUrlMovie)
  .then(function(popUpMovie){
    return popUpMovie.json();
  })
  .then(function(popUpMovieJson){

    var baseHTTP = 'https:';
    var domainUrl = 'www.youtube.com';
    var videoWay = 'embed';

    var trailerUrl = '';
    var trailerResult = '';
    // var trailerUrl = baseHTTP + '//' + domainUrl + '/' + videoWay + '/' + popUpMovieJson.videos.results[0].key;
    // https://www.youtube.com/embed/-UaGUdNJdRQ

    // Define URL for the main Picture
    var headerMovieProtocol = "https:";
    var headerMovieHost = "image.tmdb.org";
    var headerMovieLeftovers = "t/p/w500";
    var headerMoviePicUrl = '';

    // Categories Variables
    var genresItem = '';
    var genresItemLength = popUpMovieJson.genres.length;

    // var moviePicUrl = movieProtocol + "//" + movieHost + '/' + movieLeftovers + movieJson.results[i].poster_path;

    // Establish the null-pic
    if(popUpMovieJson.images.backdrops.length === 0){
      headerMoviePicUrl = "pics/backdrop-fail.jpg";
    }else {
      headerMoviePicUrl = headerMovieProtocol + "//" + headerMovieHost + '/' + headerMovieLeftovers + popUpMovieJson.images.backdrops[0].file_path;
    }

    // url("https://image.tmdb.org/t/p/w500 + movieJson.results[i].poster_path")

    // console.log(trailerResult);

    // console.log(popUpMovieJson.videos.results);
    // console.log(popUpMovieJson.videos);

    // Establish Categories in the Pop Up
    if(popUpMovieJson.genres.length === 0){
      genresItem = '';
    }else {
      for (var genres = 0; genres < genresItemLength; genres++) {
        genresItem += popUpMovieJson.genres[genres].name + ' / ';
      }
    }


    // Establish Video Trailer or No
    if(popUpMovieJson.videos.results.length === 0){
      // trailerResult = '<a id="trailer-btn" href="" class="btn-video">No Trailer</a>';
      trailerResult = '<a id="trailer-btn"></a>';
      trailerUrl = '#';
      // console.log(trailerResult);
    }else {
      trailerResult = '<a id="trailer-btn" href="#media-popup" class="btn-video">Trailer</a>';
      trailerUrl = baseHTTP + '//' + domainUrl + '/' + videoWay + '/' + popUpMovieJson.videos.results[0].key;
      // console.log(trailerResult);
    }

    var moviePopUp = '<div id="closer-result" class="close-resulter">X</div>';
    moviePopUp += '<div class="head-resulter" style="background: url('+ headerMoviePicUrl +') no-repeat; background-size: cover; background-position: center">';
    moviePopUp += '<p>' + popUpMovieJson.original_title +'</p>';
    moviePopUp += '</div>';
    moviePopUp += '<div class="item-resulter">';
    moviePopUp += '<div class="sub-head">';
    moviePopUp += '<div class="vote-items">';
    moviePopUp += '<div class="vote-average">' + popUpMovieJson.vote_average +'</div>';
    moviePopUp += '<p>score</p>';
    moviePopUp += '</div>';
    moviePopUp += '<div class="date-ref">' + popUpMovieJson.release_date +'</div>';
    moviePopUp += '</div>';
    moviePopUp += '<div class="genres-item">' + genresItem + '</div>';
    // moviePopUp += '<div class="genres-item">Action - Adventure - Animation - Family</div>';
    moviePopUp += '<div class="overview-item">';
    moviePopUp += '<p>' + popUpMovieJson.overview + '</p>';
    moviePopUp += '</div>';
    moviePopUp += trailerResult;
    // moviePopUp += '<a id="trailer-btn" href="#media-popup" class="btn-video">Trailer</a>';
    moviePopUp += '<div id="media-popup" class="popup">';
    moviePopUp += '<iframe src="' + trailerUrl +'" frameborder="0" allowfullscreen></iframe>';
    moviePopUp += '</div>';
    moviePopUp += '</div>';

    resulterBlock.innerHTML = moviePopUp;

    // Close resulter
    var closeResult = document.getElementById('closer-result');

    // Llamada al trailer de Youtube

    var trailerCall = document.getElementById('trailer-btn');
    var iframeYoutube = document.getElementById('media-popup');
    var iframe = iframeYoutube.querySelector('iframe');

    // FadeIn trailer

    trailerCall.addEventListener('click', function() {
      iframeYoutube.classList.add("show-popup");
    });

    // FadeOut trailer
    iframeYoutube.addEventListener('click', function() {
      stopVideo(iframeYoutube);
      iframeYoutube.classList.remove("show-popup");
    });

    // Stop Video function
    var stopVideo = function(element) {
      if ( iframe !== null ) {
        var iframeSrc = iframe.src;
        iframe.src = iframeSrc;
      }
    }

    // Cerrar resulter

    closeResult.addEventListener('click', function() {
      resulterSearch.classList.remove('show-up');

      veilLayer.style.display = "none";
      // bodyElem.classList.remove('body-overflow');
    });


  })
  .catch(function(error){
    console.log('RequestFailed-PopUp', error);
  });
}


// TV Show resulter
function myResTv(idValue) {
  window.scrollTo(0, 0);
  resulterSearch.classList.add('show-up');

  veilLayer.style.display = 'block';
  // bodyElem.classList.add('body-overflow');

  var popUpUrlTV = "https://api.themoviedb.org/3/tv/" + idValue + "?api_key=" + movieDBKey + "&append_to_response=videos,images";

  // console.log(popUpUrlMovie);

  fetch(popUpUrlTV)
  .then(function(popUpTV){
    return popUpTV.json();
  })
  .then(function(popUpTVJson){

    var baseHTTP = 'https:';
    var domainUrl = 'www.youtube.com';
    var videoWay = 'embed';

    var trailerUrl = '';
    var trailerResult = '';
    // var trailerUrl = baseHTTP + '//' + domainUrl + '/' + videoWay + '/' + popUpTVJson.videos.results[0].key;
    // https://www.youtube.com/embed/-UaGUdNJdRQ

    // Define URL for the main Picture
    var headerTVProtocol = "https:";
    var headerTVHost = "image.tmdb.org";
    var headerTVLeftovers = "t/p/w500";
    var headerTVPicUrl = '';

    // Categories Variables
    var genresItem = '';
    var genresItemLength = popUpTVJson.genres.length;

    // var moviePicUrl = movieProtocol + "//" + movieHost + '/' + movieLeftovers + movieJson.results[i].poster_path;

    // Establish the null-pic
    if(popUpTVJson.images.backdrops.length === 0){
      headerTVPicUrl = "pics/backdrop-fail.jpg";
    }else {
      headerTVPicUrl = headerTVProtocol + "//" + headerTVHost + '/' + headerTVLeftovers + popUpTVJson.images.backdrops[0].file_path;
    }

    // url("https://image.tmdb.org/t/p/w500 + movieJson.results[i].poster_path")

    // console.log(trailerResult);

    // console.log(popUpTVJson.videos.results);
    // console.log(popUpTVJson.videos);

    // Establish Categories in the Pop Up
    if(popUpTVJson.genres.length === 0){
      genresItem = '';
    }else {
      for (var genres = 0; genres < genresItemLength; genres++) {
        genresItem += popUpTVJson.genres[genres].name + ' / ';
      }
    }


    // Establish Video Trailer or No
    if(popUpTVJson.videos.results.length === 0){
      // trailerResult = '<a id="trailer-btn" href="" class="btn-video">No Trailer</a>';
      trailerResult = '<a id="trailer-btn"></a>';
      trailerUrl = '#';
      // console.log(trailerResult);
    }else {
      trailerResult = '<a id="trailer-btn" href="#media-popup" class="btn-video">Trailer</a>';
      trailerUrl = baseHTTP + '//' + domainUrl + '/' + videoWay + '/' + popUpTVJson.videos.results[0].key;
      // console.log(trailerResult);
    }

    var tvPopUp = '<div id="closer-result" class="close-resulter">X</div>';
    tvPopUp += '<div class="head-resulter" style="background: url('+ headerTVPicUrl +') no-repeat; background-size: cover; background-position: center">';
    tvPopUp += '<p>' + popUpTVJson.name +'</p>';
    tvPopUp += '</div>';
    tvPopUp += '<div class="item-resulter">';
    tvPopUp += '<div class="sub-head">';
    tvPopUp += '<div class="vote-items">';
    tvPopUp += '<div class="vote-average">' + popUpTVJson.vote_average +'</div>';
    tvPopUp += '<p>score</p>';
    tvPopUp += '</div>';
    tvPopUp += '<div class="date-ref">' + popUpTVJson.first_air_date +'</div>';
    tvPopUp += '</div>';
    tvPopUp += '<div class="genres-item">' + genresItem + '</div>';
    // tvPopUp += '<div class="genres-item">Action - Adventure - Animation - Family</div>';
    tvPopUp += '<div class="overview-item">';
    tvPopUp += '<p>' + popUpTVJson.overview + '</p>';
    tvPopUp += '</div>';
    tvPopUp += trailerResult;
    // tvPopUp += '<a id="trailer-btn" href="#media-popup" class="btn-video">Trailer</a>';
    tvPopUp += '<div id="media-popup" class="popup">';
    tvPopUp += '<iframe src="' + trailerUrl +'" frameborder="0" allowfullscreen></iframe>';
    tvPopUp += '</div>';
    tvPopUp += '</div>';

    resulterBlock.innerHTML = tvPopUp;

    // Close resulter
    var closeResult = document.getElementById('closer-result');

    // Llamada al trailer de Youtube

    var trailerCall = document.getElementById('trailer-btn');
    var iframeYoutube = document.getElementById('media-popup');
    var iframe = iframeYoutube.querySelector('iframe');

    // FadeIn trailer

    trailerCall.addEventListener('click', function() {
      iframeYoutube.classList.add("show-popup");
    });

    // FadeOut trailer
    iframeYoutube.addEventListener('click', function() {
      stopVideo(iframeYoutube);
      iframeYoutube.classList.remove("show-popup");
    });

    // Stop Video function
    var stopVideo = function(element) {
      if ( iframe !== null ) {
        var iframeSrc = iframe.src;
        iframe.src = iframeSrc;
      }
    }

    // Cerrar resulter

    closeResult.addEventListener('click', function() {
      resulterSearch.classList.remove('show-up');

      veilLayer.style.display = "none";
      // bodyElem.classList.remove('body-overflow');
    });


  })
  .catch(function(error){
    console.log('RequestFailed-PopUp', error);
  });
}


// ----------------------------  EN OF POP UP  ------------------------------


// Function for search the three categories
function myInfoLoad(searchElement) {
  var movieBlock = document.getElementById('movies-block');
  var tvBlock = document.getElementById('tv-block');
  var personBlock = document.getElementById('person-block');
  var itemClass = document.getElementsByClassName('section-item');

  // Function to eliminate all the children of an Element
  if(movieBlock.firstChild || tvBlock.firstChild || personBlock.firstChild){
    // Eliminate all the elements of MovieBlock
    while (movieBlock.firstChild) {
      movieBlock.removeChild(movieBlock.firstChild);
    }
    while (tvBlock.firstChild) {
      tvBlock.removeChild(tvBlock.firstChild);
    }
    while (personBlock.firstChild) {
      personBlock.removeChild(personBlock.firstChild);
    }
  }

  var movieUrl = 'https://api.themoviedb.org/3/search/movie?api_key=' + movieDBKey + '&query=' + searchElement;

  // console.log(movieUrl);

  fetch(movieUrl)
  .then(function(movie){
    return movie.json();
  })
  .then(function(movieJson){
    // console.log(movieJson);
    // console.log(movieJson.results);
    // console.log(movieJson.results.length);
    // console.log(movieJson.results[0].poster_path);

    var movieResultLength = movieJson.results.length;

    if(movieResultLength !== 0) {
      for (var i = 0; i < movieResultLength; i++) {
        // var movieItem = '';
        // var movieBlock = document.getElementById('movies-block');

        // Define URL for the main Picture
        var movieProtocol = "https:";
        var movieHost = "image.tmdb.org";
        var movieLeftovers = "t/p/w500";
        var moviePicUrl = '';

        // var moviePicUrl = movieProtocol + "//" + movieHost + '/' + movieLeftovers + movieJson.results[i].poster_path;

        if(movieJson.results[i].poster_path == null){
          moviePicUrl = "pics/null-pic.png";
        }else {
          moviePicUrl = movieProtocol + "//" + movieHost + '/' + movieLeftovers + movieJson.results[i].poster_path;
        }

        // url("https://image.tmdb.org/t/p/w500 + movieJson.results[i].poster_path")

        var movieItem = '<div id="' + movieJson.results[i].id + '" class="section-item">';
        // movieItem += '<div class="pic-item" style="background: url("https://image.tmdb.org/t/p/w500' + movieJson.results[i].poster_path + '") no-repeat"';
        movieItem += '<div class="pic-item" style="background: url('+ moviePicUrl +') no-repeat; background-size: contain; background-position: top center"';
        movieItem += '></div>';
        movieItem += '<div class="contain-item">';
        movieItem += '<div class="head-item">';
        movieItem += '<div class="title-item">' + movieJson.results[i].title + '</div>';
        movieItem += '<div class="date-item">' + movieJson.results[i].release_date + '</div>';
        movieItem += '</div>';
        movieItem += '<p class="overview-item">' + movieJson.results[i].overview + '</p>';

        // The myRes call use the id for search the required info for the pop up

        movieItem += '<div class="see-more" onclick="myResMovie(' + movieJson.results[i].id + ')">More</div>';
        movieItem += '</div></div>';

        // var movieElement = document.createElement(movieItem);
        // movieBlock.append(movieItem);

        // Add the movie Items to the Movie Block
        movieBlock.innerHTML += movieItem;
      }
    } else {
      let noFoundPic = '<div class="no-found-pic"></div>';
      noFoundPic += '<h2>No results Found</h2>';

      movieBlock.innerHTML += noFoundPic;
    }

    // TV Show Search (duplicate internally the code from movies search)

    var tvShowUrl = 'https://api.themoviedb.org/3/search/tv?api_key=' + movieDBKey + '&query=' + searchElement;

    fetch(tvShowUrl)
    .then(function(tvShow){
      return tvShow.json();
    })
    .then(function(tvShowJson){

      var tvShowResultLength = tvShowJson.results.length;

      if(tvShowResultLength !== 0) {
        for (var i = 0; i < tvShowResultLength; i++) {
          // var movieItem = '';
          // var movieBlock = document.getElementById('movies-block');

          // Define URL for the main Picture
          var movieProtocol = "https:";
          var movieHost = "image.tmdb.org";
          var movieLeftovers = "t/p/w500";
          var moviePicUrl = '';

          // var moviePicUrl = movieProtocol + "//" + movieHost + '/' + movieLeftovers + movieJson.results[i].poster_path;

          if(tvShowJson.results[i].poster_path == null){
            moviePicUrl = "pics/null-pic.png";
          }else {
            moviePicUrl = movieProtocol + "//" + movieHost + '/' + movieLeftovers + tvShowJson.results[i].poster_path;
          }

          // url("https://image.tmdb.org/t/p/w500 + movieJson.results[i].poster_path")

          var tvShowItem = '<div id="' + tvShowJson.results[i].id + '" class="section-item">';
          // tvShowItem += '<div class="pic-item" style="background: url("https://image.tmdb.org/t/p/w500' + movieJson.results[i].poster_path + '") no-repeat"';
          tvShowItem += '<div class="pic-item" style="background: url('+ moviePicUrl +') no-repeat; background-size: contain; background-position: top center"';
          tvShowItem += '></div>';
          tvShowItem += '<div class="contain-item">';
          tvShowItem += '<div class="head-item">';
          tvShowItem += '<div class="title-item">' + tvShowJson.results[i].name + '</div>';
          tvShowItem += '<div class="date-item">' + tvShowJson.results[i].first_air_date + '</div>';
          tvShowItem += '</div>';
          tvShowItem += '<p class="overview-item">' + tvShowJson.results[i].overview + '</p>';

          // The myRes call use the id for search the required info for the pop up

          tvShowItem += '<div class="see-more" onclick="myResTv(' + tvShowJson.results[i].id + ')">More</div>';
          tvShowItem += '</div></div>';

          // var movieElement = document.createElement(tvShowItem);
          // movieBlock.append(tvShowItem);

          // Add the movie Items to the Movie Block
          tvBlock.innerHTML += tvShowItem;
        }
      } else {
        let noFoundPic = '<div class="no-found-pic"></div>';
        noFoundPic += '<h2>No results Found</h2>';

        tvBlock.innerHTML += noFoundPic;
      }

      // Person Search (duplicate internally the code from movies & tv show search)

      var personUrl = 'https://api.themoviedb.org/3/search/person?api_key=' + movieDBKey + '&query=' + searchElement;

      fetch(personUrl)
      .then(function(person){
        return person.json();
      })
      .then(function(personJson){

        var personResultLength = personJson.results.length;

        if(personResultLength !== 0) {

          for (var i = 0; i < personResultLength; i++) {
            // console.log(personJson.results[i].id);
            var idSearch = personJson.results[i].id;
            var personUrlSearch = "https://api.themoviedb.org/3/person/" + idSearch + "?api_key=" + movieDBKey + "&append_to_response=videos,images";

            // console.log(personUrlSearch);
            // console.log(personResultLength);

            // console.log(j);

            // .then(function(personId){
            //   return personId.json();
            // })

            // console.log(personUrlSearch.results[i].name);

            fetch(personUrlSearch)
            .then(function(personId){
              return personId.json();
            })
            .then(function(personIdJson){
              // console.log(personUrlSearch);
              // console.log(personIdJson);

              // console.log(personIdJson.profile_path);
              // console.log(personIdJson.place_of_birth);
              // console.log(personUrlSearch.results[i].poster_path);

              // Define URL for the main Picture
              var movieProtocol = "https:";
              var movieHost = "image.tmdb.org";
              var movieLeftovers = "t/p/w500";
              var moviePicUrl = '';

              // var moviePicUrl = movieProtocol + "//" + movieHost + '/' + movieLeftovers + movieJson.results[i].poster_path;

              if(personIdJson.profile_path== null){
                moviePicUrl = "pics/null-pic.png";
              }else {
                moviePicUrl = movieProtocol + "//" + movieHost + '/' + movieLeftovers + personIdJson.profile_path;
              }

              // Life Person Data

              var lifeDates = '';

              if (personIdJson.deathday == null && personIdJson.birthday == null) {
                lifeDates = '';
              }else if(personIdJson.birthday == null) {
                lifeDates = ' (' + personIdJson.deathday + ')';
              }else if (personIdJson.deathday == null) {
                lifeDates = ' (' + personIdJson.birthday + ')';
              }else {
                lifeDates = ' (' + personIdJson.birthday + ' / ' + personIdJson.deathday + ' )';
              }

              // Birth Place Data
              var placeBirth = '';

              if (personIdJson.place_of_birth == null) {
                placeBirth = '';
              }else {
                placeBirth = personIdJson.place_of_birth;
              }

              var personItem = '<div class="section-item">';
              personItem += '<div class="pic-item3" style="background: url(' + moviePicUrl + ') no-repeat; background-size: contain; background-position: top center"></div>';
              personItem += '<div class="contain-item">';
              personItem += '<div class="head-item">';
              personItem += '<div class="title-item">' + personIdJson.name + '</div>';
              personItem += '</div>';
              personItem += '<p class="birth-item">' + placeBirth + lifeDates + '</p>';
              // personItem += '<p class="birth-item">' + personIdJson.place_of_birth + ' (' + personIdJson.birthday + '/ death(' + personIdJson.deathday + ') )</p>';
              personItem += '<p class="overview-item">' + personIdJson.biography + '</p>';
              personItem += '</div';


              // var personBlock = document.getElementById('person-block');

              // Add the movie Items to the Movie Block
              personBlock.innerHTML += personItem;

            });

            // for (var j = 0; j < personResultLength; j++) {
            //
            //   // console.log(j);
            //
            //   fetch(personUrlSearch)
            //   .then(function(personId){
            //     return personId.json();
            //   })
            //   .then(function(personIdJson){
            //     // Define URL for the main Picture
            //     var movieProtocol = "https:";
            //     var movieHost = "image.tmdb.org";
            //     var movieLeftovers = "t/p/w500";
            //     var moviePicUrl = '';
            //
            //     // var moviePicUrl = movieProtocol + "//" + movieHost + '/' + movieLeftovers + movieJson.results[i].poster_path;
            //
            //     if(personIdJson.results[i].poster_path == null){
            //       moviePicUrl = "pics/null-pic.png";
            //     }else {
            //       moviePicUrl = movieProtocol + "//" + movieHost + '/' + movieLeftovers + personIdJson.results[i].profile_path;
            //     }
            //
            //     var personItem = '<div class="section-item">';
            //     personItem += '<div class="pic-item3" style="background: url(' + moviePicUrl + ') no-repeat; background-size: contain; background-position: top center"></div>';
            //     personItem += '<div class="contain-item">';
            //     personItem += '<div class="head-item">';
            //     personItem += '<div class="title-item">' + personIdJson.results[i].name + '</div>';
            //     personItem += '</div>';
            //     personItem += '<p class="birth-item">' + personIdJson.results[i].place_of_birth + ' (' + personIdJson.results[i].birthday + '/ death(' + personIdJson.results[i].deathday + ') )</p>';
            //     personItem += '<p class="overview-item">' + personIdJson.results[i].biography + '</p>';
            //     personItem += '</div';
            //
            //     // Add the movie Items to the Movie Block
            //     personBlock.innerHTML += personItem;
            //   })
            // }
          }

        } else {
          let noFoundPic = '<div class="no-found-pic"></div>';
          noFoundPic += '<h2>No results Found</h2>';

          personBlock.innerHTML += noFoundPic;
        }

      })

    })

  })
  .catch(function(error){
    console.log('RequestFailed', error);
  });

}

// Activate with click in the Search Btn the search in the API
searchBtn.addEventListener('click', function(){

  var searchElement = '';
  var searchText = document.getElementById('searching-bar').value;

  if( searchText !== '') {
    searchElement = searchText;
    myInfoLoad(searchElement);
  }
  // else {
  //   searchElement = searchText;
  //   myInfoLoad(searchElement);
  // }

  // console.log(searchText);
  // console.log(searchElement);
});

// Activate with Enter Key the search in the API
document.body.addEventListener('keyup', function (e){
  if(e.keyCode == 13) {

    var searchElement = '';
    var searchText = document.getElementById('searching-bar').value;

    if( searchText !== '') {
      searchElement = searchText;
      myInfoLoad(searchElement);
    }
    // else {
    //   searchElement = searchText;
    //   myInfoLoad(searchElement);
    // }

    // console.log(searchText);
    // console.log(searchElement);
  }
});
