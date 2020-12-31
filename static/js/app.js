//Read in data
d3.json("./static/samples.json").then((samples) => {
        console.log(samples)
});
//Horizonatal Bar Chart with drop down menu to display the top 10 OTUs
        // Use sample_value for bar chart--otu_ids for lables-- otu_labels for hover text
 
d3.selectAll("#selDataset").on("change", optionChanged);

// This function is called when a dropdown menu item is selected
function optionChanged() {
        // Use D3 to select the dropdown menu
        var dropdownMenu = d3.select("#selDataset");
        // Assign the value of the dropdown menu option to a variable
        var dataset = dropdownMenu.property("value");
        console.log(dataset);
}

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
      
 