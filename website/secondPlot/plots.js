// create traces

//an array of names of books

let goosebumpsBooks = ["Monster Blood","It Came from Beneath the Sink", "Why I am afraid of Bees"];

// array of the # of times I read each book 

let timesRead = [3,4,1]

let trace1 = {
    x: goosebumpsBooks,
    y:timesRead,
    type: "bar"
}

// make the array that holsd the trace
 
var data = [trace1]

// set the layout information 

var layout = {
    title: "Dr. A's Goosebumps Series Books"
}

// call plotly to plot the chart in the id named: 'plot1' 

Plotly.newPlot('plot1',data,layout);

let timesRead2 = [5,10,3];

let trace2 = {
    x: goosebumpsBooks,
    y:timesRead2,
    type: "bar"
};

var data2 = [trace1,trace2];



//update the layout 
var layout2 = {
    title: "Dr. A and the other user's GooseBumps Readings"
}

Plotly.newPlot('plot2',data2,layout2);
