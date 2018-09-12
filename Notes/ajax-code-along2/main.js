document.addEventListener('DOMContentLoaded', (event) => {
  //Step 0: Ensure event listener works
  console.log('here')

  //Step 1: fetch some data from a server. axios? OMDBAPI
  let url = 'http://www.omdbapi.com/?apikey=a325fd1&s=awful'
  axios.get(url)
  .then((response) => {

    //Step 2: Log Data and see what you are getting back as a response
    console.log(response.data);
    console.log(response.status);

    let movies = response.data.Search

    //Step 3: Insert that data into your DOM, with some DOM creation/manipulation
    let ml3 = document.querySelector('#movie-list-3 p.card-text')
    console.log('ml3', ml3);

    // ml3.innerText
    // loop over movie results, creating <li>'s inside an <ol>

    // create ol
    let ol = document.createElement('ol')
    let li

    for (var i = 0; i < movies.length; i++) {
      // create li
      li = document.createElement('li')
      li.innerText = `${movies[i].Title} (${movies[i].Year})`
      ol.appendChild(li)
    }

    ml3.appendChild(ol)

  });

  
