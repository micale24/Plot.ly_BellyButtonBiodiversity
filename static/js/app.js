
//Globalization of variables commonly in functions 
d3.json("./samples.json").then((data) => {
    globalThis;{  
        metadata = data.metadata
        nameID = data.names
        samples = data.samples
        out_ids = samples.out_ids
        out_lables = samples.out_lables
        sample_values = samples.sample_values
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


function Charts(sample){
    var bubbleLayout = {
        margin: { t:0}, hovermode: "closest", xaxis: { title: "OTU ID"}
    };
    var bubbleData = [{
        x:otu_ids,
        y: sample_value,
        text: otu_labels,
        mode: "markers",
        marker: {
            size: sample_values,
            color: otu_ids,
            colorscale: "Earth"
        }
    }]
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

