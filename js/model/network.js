define ([
  "jquery",
  "d3",
  "backbone"
], function($, d3, backbone) {

  var NetworkModel = Backbone.Model.extend({

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
      })
    }

  });

  return NetworkModel;
});
