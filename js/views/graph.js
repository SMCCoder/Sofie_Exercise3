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

      draw_tooltip: function (){

      },

      chart: function(){
          /*var tip = d3.tip()
              .attr('class', 'd3-tip')
              .offset([-10, 0])
              .html(function(d) {
                return "<strong>Frequency:</strong> <span style='color:red'>" + d.frequency + "</span>";
            })*/

        this.chart = d3.select(".chart")
            .attr("width", width + this.margin.left + this.margin.right)
            .attr("height", height + this.margin.top + this.margin.bottom)
            .append("g")
            .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");

            this.x.domain(this.model.get("data").map(function(d) { return d.name; }));
            this.y.domain([0, d3.max(this.model.get("data"), function(d) { return d.value; })]);

        //this.chart.call(tip);
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

      },

      type: function(d) {
        d.value = +d.value; // coerce to number
        return d;
      },

      bar_color: function() {

        this.color_button = $("<div>")
              .attr("style", "width: 60; height: 60; background-color: gray;");

        //$('.colorpicker').colorpicker();

        $('#redButton').click(function() {
          d3.selectAll(".bar").transition()
              .style("fill", "red");
        });

        $('#blueButton').click(function() {
          d3.selectAll(".bar").transition()
              .style("fill", "steelblue");
        });

        $('#greenButton').click(function() {
          d3.selectAll(".bar").transition()
              .style("fill", "green");
        });

        $('#yellowButton').click(function() {
          d3.selectAll(".bar").transition()
              .style("fill", "yellow");
        });
        /*$("[data-toggle='popover']").popover('show');
        $('.bar').hover(function() {
          d3.select(this).transition()
              .each("start", function() { d3.selectAll('.bar'); })
              .attr("data-toggle","popover")
              .attr("title","Popover title")
              .attr("data-content", "And here's some amazing content.");
        });*/
      },

      values: function() {

        var scope = this;

        // Method is passed in for barUpdate
        var random_values = function(d) {
          for(var i = 0; i < d.length; i++){
            n =  Math.random()*.1
            d[i].value = Number(n.toFixed(5));
          };
          //console.log(d);
          //scope.tableChart(d);
          return d;
        }

      $('#test_button').click(random_values(scope.model.get("data")), function() {
          //var newData = random_values(scope.model.get("data"));
          console.log(random_values(scope.model.get("data")));
          var barUpdate = scope.chart.data(random_values(scope.model.get("data")))
            .transition()
            .duration(2000)
            .attr("transform", function(d) { return "translate(" + scope.x(d.name) + ",0)"; })
            .attr("transform", function(d) { return "translate(40,20)"; });

          barUpdate.selectAll("rect")
            .attr("y", function(d) { return scope.y(d.value); })
            .attr("height", function(d) { return height - scope.y(d.value); })
            .attr("width", scope.x.rangeBand())

          var tableUpdate = scope.chart.data(random_values(scope.model.get("data")))
            .transition();

          tableUpdate.selectAll("td")
            .attr("value", "r");

          /*barUpdate.selectAll(".bar")
            .attr("fill", "green");*/

          //scope.tableChart(random_values(scope.model.get("data")));

          //scope.table_update(random_values(scope.model.get("data")));
      });

      //random_values(this.model.get("data"));

    /*},

    tableChart: function(d){*/

      //var scope = this;

        // Create dataMenu object for dropdown menu.
        var dataMenu = function(newData) {}
        //console.log(newData);

        dataMenu.prototype.add_element = function(element, values) {
            //
            //Create an element in dropdown.
            //
            //console.log(values +1);
            //values = 2;

            console.log(values);

            $("#test_button").click(function() {
                //console.log(label);
            });

            this.valueInput = $("<input>").attr("type", "text")
                                .attr("id", "input" + values)
                                .attr("value", values)
                                .attr("style", "border: none; background-color: rgba(255, 255, 255, 0.0)");

            this.elementInput = $("<input>").attr("type", "text")
                                .attr("id", "input" + element)
                                .attr("value", element)
                                .attr("style", "border: none; background-color: rgba(255, 255, 255, 0.0)");

            this.testInput = $("<p>")//.attr("type", "text")
                                .attr("id", "inputtest" + values)
                                //.attr("value", values)
                                .attr("style", "border: none; width: 100px; background-color: rgba(255, 255, 255, 0.0)");

            // Construct dropdown label.
            label = $("<td>").attr("id", "tablerow-" + element).append(this.elementInput);
            //.text(element);

            value = $("<td>").attr("id", "tablerow-" + values).append(this.valueInput);

            test = $("<td>").attr("id", "test-" + values).append(this.testInput);

            // Construct html element here
            html_el = $("<tr>").append(label).append(value).append(test)
            return html_el;
        }

        dataMenu.prototype.append_to_graph = function(elements, values) {
          console.log(elements[0]);
          this.vsave = [];
          for (var i = 0; i < elements.length; i++) {
            this.vsave.push("input"+values[i]);

            console.log("#input"+values[i]);
            //var vsave = values[i];

          //console.log(this.vsave[0]);
          //return vsave;


            $("#"+values[i]).keyup(function(){
              console.log(values[i]);
              //var value = $( this ).val();
              console.log("help")
              //$( "#inputtest"+values[i] ).text( "s" );

            });

            //return vsave;
          }

        }

        dataMenu.prototype.build_list = function(parent, elements, values){
            //
            //Append html list elements to parent html element.
            //
            console.log(values);

            for (var e = 0; e < elements.length; e++) {
                //console.log(random_values(scope.model.get("data")));
                dropdown = this.add_element(elements[e], values[e]);
                $(parent).append(dropdown);
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
            }
            return refs;
        }

        var get_values = function(key){
            //
            //Get dataset's refs.
            //
            var datasets = scope.model.get("data");
            var refs = [];

            for (var i = 0; i < datasets.length; i++) {
                refs.push(datasets[i].value);

                $("#test_button").click(function(){
                    refs.push(3);
                });
            }

            return refs;
        }

            var datasets = scope.model.get("data");

            this.refs = get_refs(datasets);
            this.values = get_values(datasets);
            //console.log(values);

            var drops = new dataMenu();
            drops.build_list("#tablebody", this.refs, this.values);

            var toGraph = new dataMenu();
            toGraph.append_to_graph(this.refs, this.values);

            $( "#text" )
            .keyup(function() {
              var valu = $( this ).val();
              console.log(valu);
              $( "#ptext" ).text( valu );
            })
            .keyup();

    },

    table_update: function() {
         console.log("update");
    },

    modal: function() {

        /*var Modal = function() {}

          Modal.prototype.add_element = function() {

          this.settings = $("<button>").addClass("btn btn-primary btn-lg")
                                       .attr("type","button")
                                       .attr("data-toggle","modal")
                                       .attr("data-target","#basicModal")
                                       .attr("id","b")
                                       .append(this.icon)
                                       .after(this.window);

          this.modal_dialog = $("<div>").addClass("modal-dialog")
                                        .append(this.modal_content);

          this.modal_content = $("<div>").addClass("modal-content")
                                         .append(this.modal_header);

          this.modal_header = $("<div>").addClass("modal-header")
                                        .after(this.modal_body)
                                        .append(this.close);

          // This is the close button for the modal window
          this.close = $("<button>").addClass("close")
                                    .attr("data-dismiss","modal")
                                    .attr("aria-hidden","true")
                                    .text("x")
                                    .after(this.modal_title);

          this.modal_title = $("<h4>").addClass("modal-title")
                                      .attr("id","myModalLabel")
                                      .text("Title");

          this.modal_body = $("<div>").addClass("modal-body")
                                      .after(this.modal_footer)
                                      .text("Body");

          this.modal_footer = $("<div>").addClass("modal-footer")
                                        .append(this.close_button);

          this.close_button = $("<button>").addClass("btn btn-default")
                                           .attr("type","button")
                                           .attr("data-dismiss","modal")
                                           .after(this.change_color);

          this.change_color = $("<button>").addClass("btn btn-primary")
                                          .attr("id", "test_button")
                                           .attr("type","button")
                                           .text("Close");

          this.icon = $("<span>").addClass("glyphicon glyphicon-cog")
                                 .attr("aria-hidden","true")
                                 .text("Open");

         this.window = $("<div>").addClass("modal fade")
                                 .attr("id","basicModal")
                                 .attr("tabindex","-1")
                                 .attr("role","dialog")
                                 .attr("aria-labelledby","basicModal")
                                 .attr("aria-hidden","true")
                                 .append(this.modal_dialog);

         return this.window;

        }

        Modal.prototype.build_modal = function(element){

          $(element).append(this.element);
        }

        var my_modal = new Modal();
        my_modal.build_modal(".page_header");*/
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
      this.modal();
      //this.table();
      //this.tableChart();
    },

});

  return GraphView;

});
