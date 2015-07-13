define([
  "jquery",
  "d3",
  "backbone"
], function($, d3, backbone) {

    var NetworkView = backbone.View.extend({

      initialize: function(){
        this.draw();
      },

      axis: function(){
        var xAxis = d3.svg.axis()
            .scale(this.x)
            .orient("bottom");

        var yAxis = d3.svg.axis()
            .scale(this.y)
            .orient("left");
      },

      bar_width: function(){
        var barWidth = this.width / this.model.get("data").length;
      },

      draw_bars: function() {
        var margin = {top: 20, right: 30, bottom: 30, left: 40},
            width = 960 - margin.left - margin.right,
            height = 500 - margin.top - margin.bottom;

        var x = d3.scale.ordinal()
            .rangeRoundBands([0, width], .1);

        var y = d3.scale.linear()
            .range([height, 0]);

            x.domain(this.model.get("data").map(function(d) { return d.name; }));
            y.domain([0, d3.max(this.model.get("data"), function(d) { return d.value; })]);

        var chart = d3.select(".chart")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        this.bar = chart.selectAll("g")
            .data(this.model.get("data"))
          .enter().append("g")
            .attr("transform", function(d) { return "translate(" + x(d.name) + ",0)"; });

          this.bar.append("rect")
              .attr("y", function(d) { return y(d.value); })
              .attr("height", function(d) { return height - y(d.value); })
              .attr("width", x.rangeBand());


          this.bar.append("text")
              .attr("x", x.rangeBand() / 2)
              .attr("y", function(d) { return y(d.value) + 3; })
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

        var random_values = function(d) {
          for(var i = 0; i < d.length; i++){
            d[i].value = Math.random()*.1;
          };
          return d;
        }

      $('#test_button').click(function() {
          var barUpdate = this.bar.data(random_values(this.model.get("data")))
            .transition()
            .duration(3000)
            .attr("transform", function(d) { return "translate(" + x(d.name) + ",0)"; });

          barUpdate.select("rect")
            .attr("y", function(d) { return y(d.value); })
            .attr("height", function(d) { return height - y(d.value); })
            .attr("width", x.rangeBand());

          barUpdate.select("text")
            .attr("x", x.rangeBand() / 2)
            .attr("y", function(d) { return y(d.value) + 3; })
            .attr("dy", ".75em")
            .text(function(d) { return d.value; });
      });

    },

    draw: function(){
      this.axis();
      this.bar_width();
      this.draw_bars();
      this.model.set(this.type(this.model.get("data")));
      this.bar_color();
      //this.values();
      this.model.set(this.values(this.model.get("random_values(data)")));
    },

});

  return NetworkView;

});
