//Read in json sample data
d3.json("./samples.json").then((importedData) => {
     console.log(importedData);
     var data = importedData
     var option = d3.select("#selDataset");
     var names = data.names;
     console.log(names)

     names.id.forEach(element => {
         
     });
         
});
    
     
     
     
    

//Drop down list


//select the html of the drop down list

//append the "option" tag with the name from the json 

