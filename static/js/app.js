
//Globalization of variables commonly used data in functions 
d3.json("./samples.json").then((data) => {
    globalThis;{  
        metadata = data.metadata
        nameID = data.names
        samples = data.samples
    };
    
});

function demographicPanel() {
    //variable for metaData info
    
    //if function to match metaData info id

    //Append to the index.html #sample-metadata h5
}






//Initialization funcation to insert dropdown options and plot data and demographic info
function initialization() {
    // Selecting tag in index.html for dropdown menu
    var dropdown = d3.select("#selDataset");
    // Reading data from samples.json
    d3.json("./samples.json").then((importedData) => {
        console.log(importedData);
        //
        importedData.names.forEach((name) => {
                dropdown.append("option").text(name).property("value");
            });

        //Callback functions for plots and demographic info
        
        demographicPanel()
        // console.log(metadata[0].id)
        // console.log(nameID[0])
        // console.log(samples[0].id)
    });
    
};

initialization();

























//Read in json sample data
// d3.json("./samples.json").then((importedData) => {
//      console.log(importedData);
//      var data = importedData
//      var option = d3.select("#selDataset");
//      var names = data.names;
//      console.log(names)
         
// });
    
     
     
     
    

//Drop down list


//select the html of the drop down list

//append the "option" tag with the name from the json 

