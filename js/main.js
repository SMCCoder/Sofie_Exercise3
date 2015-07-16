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
    'js/modal',
    'js/chart',
    'js/model/graph',
    'js/views/graph'
],function($, d3, bootstrap, Modal, Organize, GraphModel, GraphView) {

//Calls the modal
var my_modal = new Modal("Bar Graph", "Button", " ", "length","Settings","Change the length.","Close","Length");
my_modal.add_modal($(".container"));

this.chart = $("<svg>").addClass("chart");

//Calls the model
var graph_model = new GraphModel();

//Calls the view
var graph_view = new GraphView({ model: graph_model });

});
