//start code
$(document).ready(function () {
    /*let hour = Number(document.getElementById("hour").innerText);
    let minute = Number(document.getElementById("minute").innerText);
    let second = Number(document.getElementById("second").innerText);
    let milisecond = Number(document.getElementById("milisecond").innerText);*/
    var hour = 00;
    var minute = 00;
    var second = 00;
    var milisecond = 00;
    var stFunc;
    $(".reset").click(function () {
        clearInterval(stFunc);
        $("#hour,#minute,#second,#milisecond").text("00");
        hour = 00;
        minute = 00;
        second = 00;
        milisecond = 00;
    })
    $(".start").click(function () {
        stFunc = setInterval(startFunc, 10);
    })
    $(".end").click(function () {
        clearInterval(stFunc);
    })
    function startFunc() {
        if (milisecond < 100) {
            milisecond++;
            $("#milisecond").text(milisecond);
            if (milisecond == 100) {
                second++;
                $("#second").text(second);
                milisecond = 0;
                if (second == 60) {
                    minute++;
                    $("#minute").text(minute);
                    second = 0;
                    if (minute == 60) {
                        hour++;
                        minute = 0;
                        $("#hour").text(hour);
                        $("#minute").text(minute);
                        $("#second").text(second);
                    }
                }
            }
        }

    }
    console.log(typeof hour, minute, second, milisecond);
})
//Fatemeh Madihi
alert("thank you to try it");
