// from data.js
var tableData = data;

// YOUR CODE HERE!

// Select the submit button
var submit = d3.select("#submit");

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#filter-form-input");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);

  var filteredData = tableData.filter(event => event.datetime === inputValue);

  console.log(filteredData);

  // BONUS: Calculate summary statistics for the age field of the filtered data

  // First, create an array with just the age values
  var witness = filteredData.map(person => person.datetime);

  // Next, use math.js to calculate the mean, median, mode, var, and std of the ages
  var Date = math.count(datetime);
  // var median = math.median(ages);
  // var mode = math.mode(ages);
  // var variance = math.var(ages);
  // var standardDeviation = math.std(ages);

  // Finally, add the summary stats to the `ul` tag
   d3.select(".summary")
     .append("tb").text(`${Date}`)
  //   .append("li").text(`Median: ${median}`)
  //   .append("li").text(`Mode: ${mode}`)
  //   .append("li").text(`Variance: ${variance}`)
  //   .append("li").text(`Standard Deviation: ${standardDeviation}`);
});