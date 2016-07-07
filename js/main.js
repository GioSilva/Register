$(document).ready(function() {

$("#entry").on("submit", function(evt){
    evt.preventDefault()
    var amount = $("#newEntry").val()
    var floatAmount = parseFloat(amount).toFixed(2)
    console.log(floatAmount);

    var floatAmount2 = parseFloat(floatAmount);
    console.log(floatAmount2)
    var newRow = $("<tr></tr>")
    newRow.append($("<td></td>"))
    newRow.append($("<td>" + floatAmount2 + "</td>"))
    $("#entries").append("newRow")

    var total = $("#total").html()
    var numericTotal = parseFloat(total.split("$")[1])
    var actualTotal = floatAmount2 + numericTotal
    console.log();
    $("input#newEntry").val("")

  })
})
