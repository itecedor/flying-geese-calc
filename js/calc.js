$(document).ready(function() {

  // show the finished length calculator
  $(".btn-block-length").click(function() {
    $("#block-length-form").show();
    $(".btn-block-length").hide();
  });

  // calculate based on finished length
  $(".btn-block-length-calculate").click(function() {
    var block_length = parseInt($("input[name='block-length']").val());

    var cut_length = .5 + block_length;
    var cut_width = block_length/2 + .5;

    $(".btn-block-length-calculate").hide();

    var result_text = 'Size of rectangle to cut: ' + cut_length + ' x ' + cut_width;
    result_text = result_text + '<p>';
    result_text = result_text + 'Size of squares to cut: ' + cut_width + ' x ' + cut_width;
    $("#result").append(result_text);

    $(".btn-restart").show();
  });

  // restart
  $(".btn-restart").click(function() {
    $("input[name='block-length']").val("");
    $("#result").text("");
    $(".btn-block-length-calculate").show();
    $(".btn-restart").hide();
    $("#block-length-form").hide();
    $(".btn-block-length").show();
  });

});
