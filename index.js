
// let queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
// person + "&api_key=vSblTkW9IvvHKnDqLd22GU9Noj4S7o9j&limit=10";




// let searchTerm = document.getElementById('searchTerms');//this is for the search input

let searchTerm = '';//we will take the users input and use this as a query

let startYear = '20120101';

let endYear = '20151212';

let searchBtn = document.getElementById('searchBtn');

let searchContainer = document.getElementById('searchContainer');

// let queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&begin_date=" + startYear + "&end_date=" + endYear + "&api-key=Bq0ZfhRwKnR4t8433PGAy8T9YOzcUzJJ"

let queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=&api-key=Bq0ZfhRwKnR4t8433PGAy8T9YOzcUzJJ"

searchBtn.addEventListener('click', function(){

    


    console.log(searchTerm.value);


})





fetch(queryURL)
.then(response => response.json())
.then(response => {
    console.log(response.response.docs[0]);
})


// put eventlistener on the whole container and only execute if the search button is clicked.
// in the if statement take all the values from the inputs and use this in the query.
 //clear button will clear all input fields.

//temp1.response.docs[i]//

//numRecords[0].getAttribute('data-set')// this returns data-set = 1
 // i need to pick the one based on the users selection and store this in a value in the query.