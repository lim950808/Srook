$(document).ready(function() {

    // Your code here...
    var num1 = -1;
    var num2 = -1;
    var number = 0;
    var operator = -1;
    
    // on clicks 
    $(".number").on("click", function() {
        if (operator != -1) {
            var digit = $(this).attr("value");
            number = number * 10 + parseInt(digit);
            num2 = number;

            $("#second-number").append(digit);
        }
        else {
            var digit = $(this).attr("value");
            number = number * 10 + parseInt(digit);
            num1 = number;

        // print to page results
            $("#first-number").append(digit);
        }        
    });
    
    $(".operator").on("click", function() {
        number = 0;
        var op = $(this).attr("value");
        switch (op) {
            case "plus":
            operator = "+";
                $("#operator").append(operator);
            break;
            case "minus":
            operator = "-";
                $("#operator").append(operator);
            break;
            case "divide":
            operator = "/";
                $("#operator").append(operator);
            break;
            case "times":
            operator = "*";
                $("#operator").append(operator);
            break;
            case "power":
            operator = "^";
                $("#operator").append(operator);
            break;    
        }
    });
    
    $(".clear").on("click", function() {
        var cleared = $(this).attr("value");
        clear = cleared;
    
        $("#operator").html("");
        $("#result").html("");
        $("#first-number").html("");
        $("#second-number").html("");

        num1 = -1;
        num2 = -1;
        number = 0;
        operator = -1;
    });
    
    $(".equal").on("click", function() {
        var results = eval(num1 + operator + num2);
    
        $("#operator").html("");
        $("#first-number").html("");
        $("#second-number").html("");
        $("#result").html(results);
    });
    
});