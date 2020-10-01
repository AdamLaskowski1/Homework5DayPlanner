$(document).ready(function(){
    checkTime();

    function saveToLocal(){
        var textInput = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, textInput);
    }

    function checkTime(){
        var timeM = 11; //moment().hours();
        console.log(timeM);
        $(".time-block").each(function(){
            var id = $(this).attr("id");
            console.log(id);
            if(id == timeM){
                $(this).addClass("present")
            }
            else if(id < timeM){
                $(this).addClass("past")
            }
            else{
                $(this).addClass("future")
        }
    }
    )
}

checkTime();

$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

$("#9 ,description").val(localStorage.getItem("9"))
$("#10 ,description").val(localStorage.getItem("10"))
$("#11 ,description").val(localStorage.getItem("11"))
$("#12 ,description").val(localStorage.getItem("12"))
$("#13 ,description").val(localStorage.getItem("13"))
$("#14 ,description").val(localStorage.getItem("14"))
$("#15 ,description").val(localStorage.getItem("15"))
$("#16 ,description").val(localStorage.getItem("16"))
$("#17 ,description").val(localStorage.getItem("17"))

$(".saveBtn").on("click", saveToLocal);
    })