$(document).ready(function() {

  // show the finished length calculator
  $(".btn-block-length").click(function() {
    $("#block-length-form").show();
    $(".btn-primary").hide();
  });

  // calculate based on finished length
  $(".btn-block-length-calculate").click(function() {
    var block_length = parseFloat($("input[name='block-length']").val());

    var cut_length = .5 + block_length;
    var cut_width = block_length/2 + .5;

    var result_text = 'Size of rectangle to cut: ' + cut_length + ' x ' + cut_width;
    result_text = result_text + '<p>';
    result_text = result_text + 'Size of squares to cut: ' + cut_width + ' x ' + cut_width;
    $("#result").append(result_text);

    $(".btn-restart").show();
  });

  // show the finished wdith calculator
  $(".btn-block-width").click(function() {
    $("#block-width-form").show();
    $(".btn-primary").hide();
  });

  // calculate based on finished width
  $(".btn-block-width-calculate").click(function() {
    var block_width = parseFloat($("input[name='block-width']").val());

    var cut_length = block_width * 2 + .5;
    var cut_width = block_width + .5;

    var result_text = 'Size of rectangle to cut: ' + cut_length + ' x ' + cut_width;
    result_text = result_text + '<p>';
    result_text = result_text + 'Size of squares to cut: ' + cut_width + ' x ' + cut_width;
    $("#result").append(result_text);

    $(".btn-restart").show();
  });

  // show the cut length calculator
  $(".btn-cut-length").click(function() {
    $("#cut-length-form").show();
    $(".btn-primary").hide();
  });

  // calculate based on cut length
  $(".btn-cut-length-calculate").click(function() {
    var cut_length = parseFloat($("input[name='cut-length']").val());
    var cut_width = (cut_length - .5)/2 + .5;

    var result_text = 'Size of rectangle to cut: ' + cut_length + ' x ' + cut_width;
    result_text = result_text + '<p>';
    result_text = result_text + 'Size of squares to cut: ' + cut_width + ' x ' + cut_width;
    $("#result").append(result_text);

    $(".btn-restart").show();
  });

  // show the cut width calculator
  $(".btn-cut-width").click(function() {
    $("#cut-width-form").show();
    $(".btn-primary").hide();
  });

  // calculate based on cut width
  $(".btn-cut-width-calculate").click(function() {
    var cut_width = parseFloat($("input[name='cut-width']").val());
    var cut_length = (cut_width - .5) * 2 + .5;

    var result_text = 'Size of rectangle to cut: ' + cut_length + ' x ' + cut_width;
    result_text = result_text + '<p>';
    result_text = result_text + 'Size of squares to cut: ' + cut_width + ' x ' + cut_width;
    $("#result").append(result_text);

    $(".btn-restart").show();
  });

  // restart
  $(".btn-restart").click(function() {
    $("input").val("");
    $("#result").text("");
    $(".btn-primary").show();
    $(".btn-restart").hide();
    $(".block-form").hide();
  });

});
