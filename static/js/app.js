//Button Event
var submit = d3.select("#filter-btn");

submit.on("click", function() {

  d3.event.preventDefault();

  var inputElement = d3.select("#datetime");
  var inputDateValue = inputElement.property("value");

  inputElement = d3.select("#city");
  var inputCityValue = inputElement.property("value");

  inputElement = d3.select("#state");
  var inputStateValue = inputElement.property("value");

  inputElement = d3.select("#country");
  var inputCountryValue = inputElement.property("value");

  inputElement = d3.select("#shape");
  var inputShapeValue = inputElement.property("value");

  FilterTable(inputDateValue,inputCityValue,inputStateValue,inputCountryValue,inputShapeValue);

});


//Date Filter
function FilterTable(date,city,state,country,shape) {
    var filteredData = data;

    if (date !==""){
        filteredData = filteredData.filter(elem => elem.datetime===date);}
    if (city !==""){
        filteredData = filteredData.filter(elem => elem.city===city);}
    if (state !==""){
        filteredData = filteredData.filter(elem => elem.state===state);}
    if (country !==""){
        filteredData = filteredData.filter(elem => elem.country===country);}
    if (shape !==""){
        filteredData = filteredData.filter(elem => elem.shape===shape);}
    BuildTable(filteredData);
};


//Build Table
function BuildTable(table_Data) {
    var tbody = d3.select("#ufo-table");

    //Clean Table
    tbody.selectAll("td").remove()

    //Append Data
    table_Data.forEach((elem) => {
        var trow = tbody.append("tr");
        
        Object.entries(elem).forEach(function([key, value]) {
            var cell = trow.append("td");
            cell.text(value);
        });
    });

};

//Populate inital table
BuildTable(data);