/*
  The model holds the data for the view
*/

define ([
  "jquery",
  "d3",
  "backbone"
], function($, d3, backbone) {

  var GraphModel = Backbone.Model.extend({

    defaults: {
        "data": [],
        "bar_color": "steelblue"
    },


    initialize: function(){
      this.set({"data":[
        {name: "A",	       value: .08167},
        {name: "B",	       value: .01492},
        {name: "C",      	 value: .02782},
        {name: "D",	       value: .04253},
        {name: "E",	       value: .12702},
        {name: "F",      	 value: .02288},
        {name: "G",	       value: .02015},
        {name: "H",	       value: .06094},
        {name: "I",    	   value: .06966},
        {name: "J",	       value: .00153},
        {name: "K",    	   value: .00772},
        {name: "L",  	     value: .04025},
        {name: "M",      	 value: .02406},
        {name: "N",    	   value: .06749},
        {name: "O",	       value: .07507},
        {name: "P",	       value: .01929},
        {name: "Q",	       value: .00095},
        {name: "R",      	 value: .05987},
        {name: "S",	       value: .06327},
        {name: "T",	       value: .09056},
        {name: "U",      	 value: .02758},
        {name: "V",	       value: .00978},
        {name: "W",	       value: .02360},
        {name: "X",	       value: .00150},
        {name: "Y",      	 value: .01974},
        {name: "Z",	       value: .00074}]
      },
      {"data2": [
        {name: "A",	       value: .432},
        {name: "B",	       value: .0592},
        {name: "C",      	 value: .08782},
        {name: "D",	       value: .09253},
        {name: "E",	       value: .0702},
        {name: "F",      	 value: .07428},
        {name: "G",	       value: .04015},
        {name: "H",	       value: .08094},
        {name: "I",    	   value: .01966},
        {name: "J",	       value: .05153},
        {name: "K",    	   value: .02772},
        {name: "L",  	     value: .06025},
        {name: "M",      	 value: .08406},
        {name: "N",    	   value: .09749},
        {name: "O",	       value: .02507},
        {name: "P",	       value: .07929},
        {name: "Q",	       value: .02095},
        {name: "R",      	 value: .09987},
        {name: "S",	       value: .06327},
        {name: "T",	       value: .04056},
        {name: "U",      	 value: .05758},
        {name: "V",	       value: .07978},
        {name: "W",	       value: .08360},
        {name: "X",	       value: .00150},
        {name: "Y",      	 value: .01974},
        {name: "Z",	       value: .02074}]
      }

    )}

  });

  return GraphModel;
});
