
//Globalization of variables commonly in functions 
d3.json("./samples.json").then((data) => {
    globalThis;{  
        metadata = data.metadata
        nameID = data.names
        samples = data.samples
    };
    
});

function demographicPanel(id) {
    
    var result = metadata.filter(meta => meta.id.toString() === id)[0];

    var demographicPanel = d3.select("#sample-metadata");    

    demographicPanel.html("");

    Object.entries(result).forEach((key) =>{
        demographicPanel.append("h5").text(key[0].toLowerCase() + ":" + key[1] + "\n");
    });
};


function Charts(id){
    // Build a Bubble Chart
    var bubbleLayout = {
        margin: {t: 0},
        hovermode: "closest",
        xaxis: {title: "OTU ID"}
      };
      var bubbleData = [
        {
          x: samples[0].otu_ids,
          y: samples[0].sample_values,
          text: samples[0].otu_labels,
          mode: "markers",
          marker: {
            size: samples[0].sample_values,
            color: samples[0].otu_ids,
            colorscale: "Earth"
            //Look up different color scales 
          }
        }
      ];
      Plotly.plot("bubble", bubbleData, bubbleLayout);
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
        demographicPanel(nameID[0]);
        console.log(samples);
        // console.log(samples[0].otu_ids);
        // console.log(samples[0].otu_labels);
        // console.log(samples[0].sample_values);
        Charts()
    });
    
};

//Webpage rest to an inital value in dataset
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

