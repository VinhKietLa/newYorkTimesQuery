
// let queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
// person + "&api_key=vSblTkW9IvvHKnDqLd22GU9Noj4S7o9j&limit=10";




// let searchTerm = document.getElementById('searchTerms');//this is for the search input

// let searchTerm = '';//we will take the users input and use this as a query

let startYear = '20120101';

let endYear = '20151212';

let searchBtn = document.getElementById('searchBtn');

let searchContainer = document.getElementById('searchContainer');

let searchTerm = document.getElementById('searchTerms');

// let queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&begin_date=" + startYear + "&end_date=" + endYear + "&api-key=Bq0ZfhRwKnR4t8433PGAy8T9YOzcUzJJ"

let queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=money&page=2&api-key=Bq0ZfhRwKnR4t8433PGAy8T9YOzcUzJJ"


// let numberOfRecords = document.querySelector("#numRecords").addEventListener("change", function() {
//     let selectedOption = this.options[this.selectedIndex];
//     let dataSetValue = selectedOption.getAttribute("data-set");
//     console.log(dataSetValue);
//     return dataSetValue
// });

searchContainer.addEventListener('click', function(event){

    let page = event.target.querySelector("[data-set]").getAttribute("data-set");

    console.log(page);

    if(event.target.id === "searchBtn") {
    let searched = '';
    searched = searchTerm.value;

    let page;

    page = 
    
    console.log(page);

    
    let queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searched + "&begin_date=" + startYear + "&end_date=" + endYear + "&=" + page + "&api-key=Bq0ZfhRwKnR4t8433PGAy8T9YOzcUzJJ"

    }



})





fetch(queryURL)
.then(response => response.json())
.then(response => {
    console.log(response.response.docs);
})


// put eventlistener on the whole container and only execute if the search button is clicked.
// in the if statement take all the values from the inputs and use this in the query.
 //clear button will clear all input fields.

  // display the results in the top articles section

//temp1.response.docs[i]//

//numRecords[0].getAttribute('data-set')// this returns data-set = 1
 // i need to pick the one based on the users selection and store this in a value in the query.