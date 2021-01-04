//Read in json sample data
d3.json("./samples.json").then((importedData) => {
    console.log(importedData);
})
//Drop down list
var populateDropdown = (names) => {
    var selecTag = d3.select("#selDataset");
    var option = selecTag.selectAll('option').importedData(names);

    option.enter().append('option').attr('value', function (d) { return d; }).text(function (d) { return d; });
}

//select the html of the drop down list

//append the "option" tag with the name from the json 

