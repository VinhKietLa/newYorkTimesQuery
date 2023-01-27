// let queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
// person + "&api_key=vSblTkW9IvvHKnDqLd22GU9Noj4S7o9j&limit=10";

// let searchTerm = document.getElementById('searchTerms');//this is for the search input

// let searchTerm = '';//we will take the users input and use this as a query

let startYear = "20120101";

let endYear = "20151212";

let searchBtn = document.getElementById("searchBtn");

let searchContainer = document.getElementById("searchContainer");

let searchTerm = document.getElementById("searchTerms");

let numRecords = document.querySelector("#numRecords");

// let queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + "&begin_date=" + startYear + "&end_date=" + endYear + "&api-key=Bq0ZfhRwKnR4t8433PGAy8T9YOzcUzJJ"

// let queryURL =
//   "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=money&page=2&api-key=Bq0ZfhRwKnR4t8433PGAy8T9YOzcUzJJ";
let numberOfRequests = [];

function getSelectedDataSet() {
  let selectedOption =
  numRecords.options[
    numRecords.selectedIndex
    ];
  let dataSetValue = selectedOption.getAttribute("data-set");
  console.log(dataSetValue);
  if(dataSetValue == 0){
    console.log('hi');
    numberOfRequests.push('1');
    console.log(numberOfRequests);
  } else if (dataSetValue == 1) {
    numberOfRequests.push('1','2')
  } else if (dataSetValue == 2) {
    numberOfRequests.push('1','2','3');
  }
  console.log(numberOfRequests)

  return numberOfRequests;
}
console.log(numberOfRequests)
// numRecords.addEventListener("change", getSelectedDataSet);


searchContainer.addEventListener("click", function (event) {

  if (event.target.id === "searchBtn") {

    let page = getSelectedDataSet();
    // numberOfRequests.push(page);
    // console.log(numberOfRequests);
    let searched = "";
    searched = searchTerm.value;

// let test = document.querySelector("#numRecords").options
// console.log(test.length);

for (let i = 1; i <= numberOfRequests.length; i++) {
    console.log(searched)
    console.log(numberOfRequests);
    let queryURL =
    "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
    searched +
    "&begin_date=" +
    startYear +
    "&end_date=" +
    endYear +
    "&page=" +
    i +
    "&api-key=Bq0ZfhRwKnR4t8433PGAy8T9YOzcUzJJ";
    fetch(queryURL)
    .then((response) => response.json())
    .then((response) => {
        console.log(response.response.docs);
    });
}
  }
});

// fetch(queryURL)
//   .then((response) => response.json())
//   .then((response) => {
//     console.log(response.response.docs);
//   });

// put eventlistener on the whole container and only execute if the search button is clicked.
// in the if statement take all the values from the inputs and use this in the query.
//clear button will clear all input fields.

// display the results in the top articles section

//temp1.response.docs[i]//

//numRecords[0].getAttribute('data-set')// this returns data-set = 1
// i need to pick the one based on the users selection and store this in a value in the query.




//this gets 1 query:
//     let queryURL =
//       "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
//       searched +
//       "&begin_date=" +
//       startYear +
//       "&end_date=" +
//       endYear +
//       "&page=" +
//       page +
//       "&api-key=Bq0ZfhRwKnR4t8433PGAy8T9YOzcUzJJ";

//       fetch(queryURL)
//   .then((response) => response.json())
//   .then((response) => {
//     console.log(response.response.docs);
//   });