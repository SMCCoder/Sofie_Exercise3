/*define([
    'jquery',
    'd3',
    'bootstrap'
],function($, d3, bootstrap) {

  var Organize = function(/*titleChart*closeText, titleText, bodyText, closeButtonText, changeText){
    this.window = $("<div>").addClass("modal fade")
                            .attr("id","basicModal")
                            .attr("tabindex","-1")
                            .attr("role","dialog")
                            .attr("aria-labelledby","basicModal")
                            .attr("aria-hidden","true");

    this.modal_dialog = $("<div>").addClass("modal-dialog");

    this.modal_content = $("<div>").addClass("modal-content");

    this.modal_header = $("<div>").addClass("modal-header");

    // This is the close button for the modal window
    this.close = $("<button>").addClass("close")
                              .attr("data-dismiss","modal")
                              .attr("aria-hidden","true");

    this.modal_title = $("<h4>").addClass("modal-title")
                                .attr("id","myModalLabel");

    this.modal_body = $("<div>").addClass("modal-body");

    this.h3 = $("<h3>");

    this.modal_footer = $("<div>").addClass("modal-footer");

    this.close_button = $("<button>").addClass("btn btn-default")
                                     .attr("type","button")
                                     .attr("data-dismiss","modal");

    this.change_color = $("<button>").addClass("btn btn-primary")
                                    .attr("id", "test_button")
                                     .attr("type","button");

    this.icon = $("<span>").addClass("glyphicon glyphicon-cog")
                           .attr("aria-hidden","true");

    /*this.titleChart = titleChart;

    this.window = $("<div>").addClass("modal fade")
                            .attr("id","basicModal")
                            .attr("tabindex","-1")
                            .attr("role","dialog")
                            .attr("aria-labelledby","basicModal")
                            .attr("aria-hidden","true");

    this.chart_dialog = $("<div>").addClass("modal-dialog");

    this.chart_content = $("<div>").addClass("modal-content");

    this.chart_header = $("<div>").addClass("model-header");

    this.chart_title = $("<h4>").addClass("modal-title")
                                .attr("id","myModalLabel");*
  };

  Organize.prototype.add_organize = function(element) {
    this.window.append(this.modal_dialog);
    this.modal_dialog.append(this.modal_content);

    this.modal_content.append(this.modal_header);
    this.modal_header.after(this.modal_body);
    this.modal_body.after(this.modal_footer);

    this.modal_header.append(this.close);
    this.close.text(this.closeText);

    this.close.after(this.modal_title);
    this.modal_title.text(this.titleText);

    this.modal_body.append(this.h3);
    this.h3.text(this.bodyText);

    this.modal_footer.append(this.close_button);
    this.close_button.after(this.change_color);

    this.close_button.text(this.closeButtonText);
    this.change_color.text(this.changeText);
    /*element.append(this.window);

    this.window.append(this.chart_dialog);
    this.chart_dialog.append(this.chart_content);
    this.chart_content.append(this.chart_header);
    this.chart_title.text(this.titleChart);*
  };

  return Organize;

});*/
