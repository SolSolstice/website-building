// make a basic trace 
// define a JS object (value - key pairs) for trace information
// trace = plot of information 
// JSON = JavaScript Object Notation .. which looks like a dictionary.. which is what we're making here 
var trace = {
    x: xData,
    y: yData
};

//data array that contains our trace info 

var data = [trace]; 

// specify layout attributes 
var layout = {
    title: "A Plotly Plot for ya bad self"
}; 

// call Plotly.newPlot()
//takes in 3 args: 
    // destination -> an id in the html 
    // data arry
    // layout attribute object 
Plotly.newPlot("plot",data,layout);