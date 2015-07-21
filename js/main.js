/*
/ Main script that acts as the entry point for the application
*/

requirejs.config({
    baseUrl:'',
    paths: {
        backbone: 'lib/backbone/backbone-min',
        bootstrap: 'lib/bootstrap/js/bootstrap.min',
        d3: 'lib/d3/d3.min',
        jquery: 'lib/jquery/jquery.min',
        jqueryui: 'lib/jquery-ui/jquery-ui.min',
        underscore: 'lib/underscore/underscore-min'
    }
})

// Main application single entry point
requirejs([
    'jquery',
    'd3',
    'bootstrap',
    'js/views/modal',
    'js/model/graph',
    'js/views/graph'
],function($, d3, bootstrap, Modal, GraphModel, GraphView) {

//Calls the modal
//var my_modal = new Modal("Bar Graph","Button", " ", "length", "Settings","Change the length.", "Close","Length");
//my_modal.add_modal($(".page-header"));

/*var charting = function(headerText){
  this.headerText = headerText;

  this.chart = $("<svg>").addClass("chart");
}

charting.prototype.add_charting = function(element){
  element.append(this.chart);
}

return charting;

var my_chart = new charting();
my_chart.add_charting($(".container"));*/

//Calls the model
var graph_model = new GraphModel(Modal);

//Calls the view
var graph_view = new GraphView({ model: graph_model });

});
