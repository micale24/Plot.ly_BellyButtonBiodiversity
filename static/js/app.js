//Read in json sample data
d3.json("./samples.json").then((importedData) => {
     console.log(importedData);
     var data = importedData

     data.forEach((ID) => {
         var selectTag = d3.select("#selDataset");
         Object.defineProperties(ID).forEach(([value])=> {
             var option = selectTag.append("option");
             option.text(value);
         });
         
     });






})

//Drop down list


//select the html of the drop down list

//append the "option" tag with the name from the json 

