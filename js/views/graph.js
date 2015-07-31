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
            //console.log(document.
            width = 960 - this.margin.left - this.margin.right,
            height = 500 - this.margin.top - this.margin.bottom;
      },

      axis: function(){
        var xAxis = d3.svg.axis()
            .scale(this.x)
            .orient("bottom");

        var yAxis = d3.svg.axis()
            .scale(this.y)
            .orient("left")
            .ticks(10, "%");
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

        var scope = this;

        this.xAxis = d3.svg.axis()
            .scale(this.x)
            .orient("bottom");

        this.yAxis = d3.svg.axis()
            .scale(this.y)
            .orient("left")
            .ticks(10, "%");

        this.chart.selectAll(".bar")
            .data(scope.model.get("data"))
          .enter().append("rect")
            .attr("class", "bar")
            .attr("x", function(d) { return scope.x(d.name); })
            .attr("y", function(d) { return scope.y(d.value); })
            .attr("height", function(d) { return height - scope.y(d.value); })
            .attr("width", scope.x.rangeBand())

        this.chart.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(this.xAxis);

        this.chart.append("g")
            .attr("class", "y axis")
            .call(this.yAxis);

        /*
          // Varible is needed to fix the scope
          var scope = this;

          this.bar = this.chart.selectAll("g")
              .data(this.model.get("data"))
            .enter().append("g")
              .attr("transform", function(d) { return "translate(" + scope.x(d.name) + ",0)"; });

          this.bar.append("rect")
              .attr("y", function(d) { return scope.y(d.value); })
              .attr("height", function(d) { return height - scope.y(d.value); })
              .attr("width", scope.x.rangeBand())

          this.bar.append("text")
              .attr("x", scope.x.rangeBand() / 2)
              .attr("y", function(d) { return scope.y(d.value) + 3; })
              .attr("dy", ".75em")
              .text(function(d) { return d.value; });*/
      },

      type: function(d) {
        d.value = +d.value; // coerce to number
        return d;
      },

      bar_color: function() {
        $("[data-toggle='popover']").popover('show');
        $('.bar').hover(function() {
          d3.select(this).transition()
              .each("start", function() { d3.selectAll('.bar'); })
              .attr("data-toggle","popover")
              .attr("title","Popover title")
              .attr("data-content", "And here's some amazing content.");
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
          var barUpdate = scope.chart.data(random_values(scope.model.get("data")))
            .transition()
            .duration(2000)
            .attr("transform", function(d) { return "translate(" + scope.x(d.name) + ",0)"; })
            .attr("transform", function(d) { return "translate(40,20)"; });

          barUpdate.selectAll("rect")
            .attr("y", function(d) { return scope.y(d.value); })
            .attr("height", function(d) { return height - scope.y(d.value); })
            .attr("width", scope.x.rangeBand());

          /*barUpdate.select("g")
          .attr("class", "x axis")
          .attr("transform", "translate(0," + height + ")");

          barUpdate.select("text")
            .attr("x", scope.x.rangeBand() / 2)
            .attr("y", function(d) { return scope.y(d.value) + 3; })
            .attr("dy", ".75em")
            .text(function(d) { return d.value; });*/
      });

    },

    tableChart: function(){
      /*this.table = $("<table>").addClass("table table-striped");
      this.tableBody = $("<tbody>");
      this.tableHeader = $("<thead>");
      this.tableHeaderText = $("<th>").attr("colspan","2");
      this.tableRow = $("<tr>");
      this.tableRowName = $("<td>").addClass("name");
      this.tableRowValue = $("<td>").addClass("value");

      this.table.append(this.tableBody);
      this.tableBody.append(this.tableHeader);
      this.tableHeader.append(this.tableHeaderText);
      this.tableHeaderText.text("Data");
      this.tableHeaderText.after(this.tableRow);
      this.tableRow.append(this.tableRowName);
      this.tableRowName.text("A");
      this.tableRowName.after(this.tableRowValue);
      this.tableRowValue.text("3");*/

      var scope = this;

        // Create dataMenu object for dropdown menu.
        var dataMenu = function() {}

        dataMenu.prototype.add_element = function(element) {
            //
            //Create an element in dropdown.
            //
            // Construct dropdown label.
            label = $("<tr>").attr("id", "dropdown-" + element)
            //.attr("href","#")
            .text(element);

            // Construct html element here
            html_el = $("<td>").append(label)
            return html_el;
        }

        dataMenu.prototype.build_list = function(parent, elements){
            /*
            Append html list elements to parent html element.

            Args:
            ----
            parent: string
            html-element id for appending list.
            elements: array of strings
            array of text to append html list and make clickable.
            */
            for (var e = 0; e < elements.length; e++) {
                dropdown = this.add_element(elements[e]);
                $(parent).append(dropdown);
                //dropdown.click(e, click_reference);
            }
        }

        var get_refs = function(key){
            //
            //Get dataset's refs.
            //
            var datasets = scope.model.get("data");
            var refs = [];

            for (var i = 0; i < datasets.length; i++) {
                refs.push(datasets[i].name);
                refs.push(datasets[i].value);
            }
            return refs;
        }

            var datasets = scope.model.get("data");
            var refs = get_refs(datasets);

            var drops = new dataMenu();
            drops.build_list("#tablebody", refs);

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
      this.tableChart();
    },

});

  return GraphView;

});
