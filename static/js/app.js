//Read in data


//Horizonatal Bar Chart with drop down menu to display the top 10 OTUs
        // Use sample_value for bar chart--otu_ids for lables-- otu_labels for hover text




//  d3.json("/samples.json", function(samples) {
// //             console.log(samples);
// //         });
 
// const url = ("samples.json") 

// // Fetch the JSON data and console log it
// d3.json(url).then(function(data) {
//     console.log(data);
//  });
        
// // Promise Pending
// const dataPromise = d3.json(url);
//     console.log("Data Promise: ", dataPromise);
        



 d3.json("/samples.json").then(function(data){

    console.log(data[0]);
 });

 