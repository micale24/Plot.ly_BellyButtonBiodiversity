

d3.json("./samples.json").then((sampleId) => {
    var id = sampleId.names;
    console.log(id)
});


function demographicInfo(id){
    //Reading data from metadata from samples.json
    d3.json("./samples.json").then((importedData) => {
        var metaData = importedData.metadata;
        console.log(metaData);

        //Filtering through metadata for id and converting to string
        var demoMetaData = metaData.filter(meta => meta.id.toString() === id)[0];
        console.log(demoMetaData)
        //Selecting tag in index.html for demographic panel
        var demoPanel = d3.select("#sample-metadata");
        
        // demoPanel.html(" ");

        // Object.defineProperties(demoMetaData).forEach((key) => { 
        //     demoPanel
        //     .append("h7")
        //     .text(key[0])
        //     .toUpperCase() + ( ":"+ key[1] + "\n");
        // });

    });
};





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
        demographicInfo();
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

