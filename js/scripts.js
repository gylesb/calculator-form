var add = function(number1, number2) {
return number1 + number2;
};

var subtract = function(number1, number2) {
return number1 - number2;
};

var multiply = function(number1, number2) {
return number1 * number2;
};

var divide = function(number1, number2) {
return number1 / number2;
};


$(document).ready(function() {
  // $("#calcInput").submit(function(event) {
  //
  //   var number1 = parseInt($("#valInput").val());
  //   var number2 = parseInt($("#valInput2").val());
  //   $("#btnAdd").click(function() {
  //     var result = add(number1, number2);
  //     $("#output").text(result);
  //   });
  //   $("#btnSubtract").click(function() {
  //     var result = subtract(number1, number2);
  //     $("#output2").text(result);
  //   });
  //   $("#btnMultiply").click(function() {
  //     var result = multiply(number1, number2);
  //     $("#output3").text(result);
  //   });
  //   $("#btnDivide").click(function() {
  //     var result = divide(number1, number2);
  //     $("#output4").text(result);
  //   });
  //   event.preventDefault();
  // });
  $("#btnAdd").click(function() {
    $("#calcInput").submit(function(event) {
      var number1 = parseInt($("#valInput").val());
      var number2 = parseInt($("#valInput2").val());
      var result = add(number1, number2);
      $("#output").text(result);
      event.preventDefault();
    });
  });
  $("#btnSubtract").click(function() {
    $("#calcInput").submit(function(event) {
      var number1 = parseInt($("#valInput").val());
      var number2 = parseInt($("#valInput2").val());
      var result = subtract(number1, number2);
      $("#output2").text(result);
      event.preventDefault();
    });
  });
  $("#btnMultiply").click(function() {
    $("#calcInput").submit(function(event) {
      var number1 = parseInt($("#valInput").val());
      var number2 = parseInt($("#valInput2").val());
      var result = multiply(number1, number2);
      $("#output3").text(result);
      event.preventDefault();
    });
  });
  $("#btnDivide").click(function() {
    $("#calcInput").submit(function(event) {
      var number1 = parseInt($("#valInput").val());
      var number2 = parseInt($("#valInput2").val());
      var result = divide(number1, number2);
      $("#output4").text(result);
      event.preventDefault();
    });
  });
});

  // var number1 = parseInt(prompt("Enter a number:"));
  // var number2 = parseInt(prompt("Enter another number"));
  //
  // alert(subtract(number1, number2));
  //
  // var number1 = parseInt(prompt("Enter a number:"));
  // var number2 = parseInt(prompt("Enter another number"));
  //
  // alert(multiply(number1, number2));
  //
  //
  // var number1 = parseInt(prompt("Enter a number:"));
  // var number2 = parseInt(prompt("Enter another number"));
  //
  // alert(divide(number1, number2));
// })
