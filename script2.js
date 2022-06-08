$(document).ready(function() {

    var num1 = -1;
    var num2 = -1;
    var number = 0;
    var operator = -1;
    
    //숫자 버튼 클릭시
    $(".number").on("click", function() {
        if (operator != -1) {
            //.attr() : Element의 속성 값을 가져옴
            var digit = $(this).attr("value");
            //parseInt() : 문자열을 정수로 바꾸는 함수
            number = number * 10 + parseInt(digit);
            num2 = number;
            //연산자 이후 오는 숫자
            $("#second-number").append(digit);
        }
        else {
            var digit = $(this).attr("value");
            number = number * 10 + parseInt(digit);
            num1 = number;
            //연산자 전에 오는 숫자
            $("#first-number").append(digit);
        }        
    });
    
    //switch문에서 각각의 연산자 클릭시 추가됨
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
    
    //'c' 버튼 클릭시 모두 삭제
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
    
    //'=' 버튼 클릭시 결과값 보여줌
    $(".equal").on("click", function() {
        var results = eval(num1 + operator + num2);
    
        $("#operator").html("");
        $("#first-number").html("");
        $("#second-number").html("");
        $("#result").html(results);
    });
    
});