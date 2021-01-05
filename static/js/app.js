





//Initialization funcation to insert dropdown options
function initialization() {
    // Selecting tag in index.html
    var dropdown = d3.select("#selDataset");
    // Reading data from samples.json
    d3.json("./samples.json").then((importedData) => {
        console.log(importedData)
        //
        importedData.names.forEach((name) => {
                dropdown.append("option").text(name).property("value");
            });

        //Callback functions for plots and demographic info

    });
}

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

