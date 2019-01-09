var tbody = document.querySelector("tbody");
var dateInput = document.querySelector("#datetime");
var stateInput = document.querySelector("#state");
var searchBtn = document.querySelector("#filter-btn");
var cityInput= document.querySelector("#city");
var countryInput = document.querySelector("#country");
var shapeInput = document.querySelector("#shape");

// add event to the searchButton, call handleSearchButtonClick
searchBtn.addEventListener("click", function (event) {
  handleSearchButtonClick(event)
});

var filteredUFO = data;

function renderTable() {
  tbody.innerHTML = "";
  // console.log("rendering")

  for (var i = 0; i < filteredUFO.length; i++) {

    // get sighting field
    var sighting = filteredUFO[i];
    var fields = Object.keys(sighting);
    // Create a new row in the tbody
    var row = tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // create a new cell at set its inner text to be the current value at the current address's field
      var field = fields[j];
      var cell = row.insertCell(j);
      cell.innerText = sighting[field];
    }
  }
}

function handleSearchButtonClick(event) {
  event.preventDefault();
  //use .trim to remove spaces and .tolower case
  var filterDate = dateInput.value.trim();
  var filterState = stateInput.value.trim().toLowerCase();
  var filterCity = cityInput.value.trim().toLowerCase();
  var filterCountry = countryInput.value.trim().toLowerCase();
  var filterShape = shapeInput.value.trim().toLowerCase();

  if (filterDate.length != 0) {
    filteredUFO = data.filter(function (sighting) {
      var sightingDate = sighting.datetime;
      return sightingDate === filterDate;
    });
  }
  else {
    filteredUFO = data
  }
  if (filterState.length != 0) {
    filteredUFO = filteredUFO.filter(function (sighting) {
      var sightingState = sighting.state;
      return sightingState === filterState;
    });
  }
  else {
    filteredUFO = filteredUFO
  }
  if (filterCity.length!=0){
    filteredUFO = filteredUFO.filter(function(sighting){
      var sightingCity = sighting.city;
      return sightingCity === filterCity;
    });
  }
  else {
    filteredUFO = filteredUFO
  }
  if (filterCountry.length!=0){
    filteredUFO = filteredUFO.filter(function(sighting){
      var sightingCountry = sighting.country;
      return sightingCountry === filterCountry;
    });
  }
  else {
    filteredUFO = filteredUFO
  }
  if (filterShape.length!=0){
    filteredUFO = filteredUFO.filter(function(sighting){
      var sightingShape = sighting.shape;
      return sightingShape === filterShape;
    });
  }
  else {
    filteredUFO = filteredUFO
  }

  
  renderTable();

}
// print table
renderTable();