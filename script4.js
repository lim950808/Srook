//.ready() : 모든 HTML페이지가 뿌려지고 나서 이벤트 동작준비
$(document).ready(function(){

    //해당 버튼 클릭시 각각의 value값을 가지고 연산
    $(".clc").click(function() {
      $("#display").val($("#display").val() + $(this).val());
    });

    // 'C' 버튼 클릭시 모두 삭제
    $(".clear").click(function() {
      $("#display").val('');
    }); 

    // '=' 버튼 클릭시 
    $(".result").click(function() {
      $("#display").val(eval($("#display").val()));
    });

});