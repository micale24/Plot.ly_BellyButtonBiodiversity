//Read in data
const url = ("./static/samples.json")

//Horizonatal Bar Chart with drop down menu to display the top 10 OTUs
        // Use sample_value for bar chart--otu_ids for lables-- otu_labels for hover text

//Fetch the JSON data and console log it
d3.json(url).then(function(data) {
    console.log(data);
    var dropContent = data.names
 });
 
d3.selectAll("#selDataset").on("change", optionChanged);


// This function is called when a dropdown menu item is selected
function optionChanged() {
        // Use D3 to select the dropdown menu
        var dropdownMenu = d3.select("#selDataset");
        // Assign the value of the dropdown menu option to a variable
        var dataset = dropdownMenu.property("value");
        
        //For Loop to input the test subject number into list

        for (i=0, i)
       
      }


 