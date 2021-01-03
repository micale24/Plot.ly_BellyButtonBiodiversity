//First data set to publize 
function Initialize(){
        
        
}














//Horizonatal Bar Chart with drop down menu to display the top 10 OTUs
        // Use sample_value for bar chart--otu_ids for lables-- otu_labels for hover text
 
// d3.selectAll("#selDataset").on("change", optionChanged);

// // // This function is called when a dropdown menu item is selected
// function optionChanged() {
//         // Use D3 to select the dropdown menu
//         var dropdownMenu = d3.select("#selDataset");
//         // Assign the value of the dropdown menu option to a variable
//         var dataset = dropdownMenu.property("value");
//         console.log(dataset);
// }

// function updateMetaData(data) {
//         // Reference to Panel element for sample metadata
//         var PANEL = document.getElementById("sample-metadata");
//         // Clear any existing metadata
//         PANEL.innerHTML = '';
//         // Loop through all of the keys in the json response and
//         // create new metadata tags
//         for(var key in data) {
//             h6tag = document.createElement("h6");
//             h6Text = document.createTextNode(`${key}: ${data[key]}`);
//             h6tag.append(h6Text);
//             PANEL.appendChild(h6tag);
//         }


// function buildMetadata(sample) {
//         d3.json(`/metadata/${sample}`).then((data) => {
//         // Use d3 to select the panel with id of `#sample-metadata`
//         var PANEL = d3.select("#sample-metadata");
              
//         // Use `.html("") to clear any existing metadata
//         PANEL.html("");
              
//         // Use `Object.entries` to add each key and value pair to the panel
//         // Hint: Inside the loop, you will need to use d3 to append new
//         // tags for each key-value in the metadata.
//         Object.entries(data).forEach(([key, value]) => {
//                 PANEL.append("h6").text(`${key}: ${value}`);
//                 });
        
// }





// function demographInfo(){
//         var id = data.metadata.id
//         var ethnicity = data.metadata.ethnicity
//         var gender = data.metadata.gender
//         var age = data.metadata.age
//         var bbtype = data.metadata.bbtype
//         var wfreq = data.metadata.wfreq

// }





//         // Initializes the page with a default plot
//                  function init() {
//         data = [{
//           x: [1, 2, 3, 4, 5],
//           y: [1, 2, 4, 8, 16] }];
      
//         Plotly.newPlot("plot", data);
//       }
      
//       // Call updatePlotly() when a change takes place to the DOM
//       d3.selectAll("#selDataset").on("change", updatePlotly);
      
//       // This function is called when a dropdown menu item is selected
//       function updatePlotly() {
//         // Use D3 to select the dropdown menu
//         var dropdownMenu = d3.select("#selDataset");
//         // Assign the value of the dropdown menu option to a variable
//         var dataset = dropdownMenu.property("value");
      
//         // Initialize x and y arrays
//         var x = [];
//         var y = [];
      
//         if (dataset === 'dataset1') {
//           x = [1, 2, 3, 4, 5];
//           y = [1, 2, 4, 8, 16];
//         }
      
//         else if (dataset === 'dataset2') {
//           x = [10, 20, 30, 40, 50];
//           y = [1, 10, 100, 1000, 10000];
//         }
      
//         // Note the extra brackets around 'x' and 'y'
//         Plotly.restyle("plot", "x", [x]);
//         Plotly.restyle("plot", "y", [y]);
//       }
      
//       init();
      
 