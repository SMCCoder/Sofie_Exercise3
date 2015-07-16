/*
  The view uses the data in the model
*/
define([
  "jquery",
  "d3",
  "backbone"

], function($, d3, backbone) {

    var GraphView = backbone.View.extend({

      // Initialize starts it - the code will not run without it
      initialize: function(){
        this.draw();
      },

      sizeChart: function(){
        this.margin = {top: 20, right: 30, bottom: 30, left: 40},
            width = 960 - this.margin.left - this.margin.right,
            height = 500 - this.margin.top - this.margin.bottom;
      },

      axis: function(){
        var xAxis = d3.svg.axis()
            .scale(this.x)
            .orient("bottom");

        var yAxis = d3.svg.axis()
            .scale(this.y)
            .orient("left");
      },

      scale: function(){
        this.x = d3.scale.ordinal()
            .rangeRoundBands([0, width], .1);

        this.y = d3.scale.linear()
            .range([height, 0]);
      },

      chart: function(){
        this.chart = d3.select(".chart")
            .attr("width", width + this.margin.left + this.margin.right)
            .attr("height", height + this.margin.top + this.margin.bottom)
            .append("g")
            .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");

            this.x.domain(this.model.get("data").map(function(d) { return d.name; }));
            this.y.domain([0, d3.max(this.model.get("data"), function(d) { return d.value; })]);
      },

      bar_width: function(){
        var barWidth = this.width / this.model.get("data").length;
      },

      draw_bars: function() {
        // Varible is needed to fix the scope
        var scope = this;

        this.bar = this.chart.selectAll("g")
            .data(this.model.get("data"))
          .enter().append("g")
            .attr("transform", function(d) { return "translate(" + scope.x(d.name) + ",0)"; });

          this.bar.append("rect")
              .attr("y", function(d) { return scope.y(d.value); })
              .attr("height", function(d) { return height - scope.y(d.value); })
              .attr("width", scope.x.rangeBand());


          this.bar.append("text")
              .attr("x", scope.x.rangeBand() / 2)
              .attr("y", function(d) { return scope.y(d.value) + 3; })
              .attr("dy", ".75em")
              .text(function(d) { return d.value; });
      },

      type: function(d) {
        d.value = +d.value; // coerce to number
        return d;
      },

      bar_color: function() {
        $('.chart rect').hover(function() {
        d3.select(this).transition()
            .each("start", function() { d3.selectAll('.chart rect').style("fill", "steelblue"); })
            .style("fill", "red");
        });
      },

      values: function() {

        // Method is passed in for barUpdate
        var random_values = function(d) {
          for(var i = 0; i < d.length; i++){
            n =  Math.random()*.1
            d[i].value = Number(n.toFixed(5));
          };
          return d;
        }

      var scope = this;

      $('#test_button').click(function() {
          var barUpdate = scope.bar.data(random_values(scope.model.get("data")))
            .transition()
            .duration(2000)
            .attr("transform", function(d) { return "translate(" + scope.x(d.name) + ",0)"; });

          barUpdate.select("rect")
            .attr("y", function(d) { return scope.y(d.value); })
            .attr("height", function(d) { return height - scope.y(d.value); })
            .attr("width", scope.x.rangeBand());

          barUpdate.select("text")
            .attr("x", scope.x.rangeBand() / 2)
            .attr("y", function(d) { return scope.y(d.value) + 3; })
            .attr("dy", ".75em")
            .text(function(d) { return d.value; });
      });

    },

    chartHeader: function(){

      
    },

    draw: function(){
      this.sizeChart();
      this.axis();
      this.scale();
      this.chart();
      this.bar_width();
      this.draw_bars();
      this.model.set(this.type(this.model.get("data")));
      this.bar_color();
      this.values();
      this.chartHeader();
    },

});

  return GraphView;

});
