define([
    'jquery',
    'd3',
    'bootstrap',
    'backbone'
],function($, d3, bootstrap, backbone) {

  var ModalView = backbone.View.extend({

    initialize: function(){
      this.draw();
    },

    draw_modal: function(){

  var Modal = function(headerText, buttonText, iconText, closeText,
                       titleText, bodyText, closeButtonText,
                       changeText){

    //glyphicon glyphicon-cog
    this.headerText = headerText
    this.buttonText = buttonText;
    this.closeText = closeText;
    this.titleText = titleText;
    this.bodyText = bodyText;
    this.closeButtonText = closeButtonText;
    this.changeText = changeText;
    this.iconText = iconText;

    this.settings = $("<button>").addClass("btn btn-primary btn-lg")
                                 .attr("type","button")
                                 .attr("data-toggle","modal")
                                 .attr("data-target","#basicModal")
                                 .attr("id","b");

    this.table = $("<table>").addClass("table table-striped")
                             .attr("id","Table");

    this.tableBody = $("<tbody>");

    this.tableHeader = $("<thead>");

    this.tableHeaderText = $("<th>").attr("colspan","2");

    this.tableRow1 = $("<tr>");
    this.tableRow2 = $("<tr>");

    this.tableRowNameA = $("<td>").addClass("name");
    this.tableRowNameB = $("<td>").addClass("name");

    this.tableRowValue1 = $("<td>").addClass("value");
    this.tableRowValue2 = $("<td>").addClass("value");

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

    //this.modal_table = $("<table>").addClass("table table-hover");

    //this.table_content = $(<)

    this.modal_footer = $("<div>").addClass("modal-footer");

    this.close_button = $("<button>").addClass("btn btn-default")
                                     .attr("type","button")
                                     .attr("data-dismiss","modal");

    this.change_color = $("<button>").addClass("btn btn-primary")
                                    .attr("id", "test_button")
                                     .attr("type","button");

    this.icon = $("<span>").addClass("glyphicon glyphicon-cog")
                           .attr("aria-hidden","true");

    //this.page_header = $("<div>").addClass("page-header");

    //this.header_text = $("<h2>");

  };

  Modal.prototype.add_modal = function(element){

    // Add modal to page.
    element.append(this.settings);

    this.settings.append(this.icon);
    this.icon.text(this.iconText);

    /*this.page_header.append(this.settings);
    this.page_header.append(this.header_text);
    this.header_text.text(this.headerText)

    this.page_header.after(this.settings);*/

    this.settings.after(this.window);
    //this.settings.text(this.buttonText);

    this.window.append(this.modal_dialog);
    this.modal_dialog.append(this.modal_content);

    this.modal_content.append(this.modal_header);
    this.modal_header.after(this.modal_body);
    this.modal_body.after(this.modal_footer);

    this.modal_header.append(this.close);
    this.close.text(this.closeText);

    this.close.after(this.modal_title);
    this.modal_title.text(this.titleText);

    this.modal_body.append(this.table);
    this.table.append(this.tableBody);
    this.tableBody.append(this.tableHeader);
    this.tableHeader.append(this.tableHeaderText);
    this.tableHeaderText.text("Data");

    this.tableHeaderText.after(this.tableRow1);
    this.tableRow1.append(this.tableRowNameA);
    this.tableRowNameA.text("A");
    this.tableRowNameA.after(this.tableRowValue1);
    this.tableRowValue1.text("3");

    this.tableRow1.after(this.tableRow2);
    this.tableRow2.append(this.tableRowNameB);
    this.tableRowNameB.text("B");
    this.tableRowNameB.after(this.tableRowValue2);
    this.tableRowValue2.text("5");

    this.modal_footer.append(this.close_button);
    this.close_button.after(this.change_color);

    this.close_button.text(this.closeButtonText);
    this.change_color.text(this.changeText);

  };

  return Modal;

  var my_modal = new Modal("Bar Graph","Button", " ", "length", "Settings","Change the length.", "Close","Length");
  my_modal.add_modal($(".page-header"));

},

draw: function(){
  this.draw_modal();
},

});

return ModalView;

});
