
$(document).ready(function () {
    /*let hour = Number(document.getElementById("hour").innerText);
    let minute = Number(document.getElementById("minute").innerText);
    let second = Number(document.getElementById("second").innerText);
    let milisecond = Number(document.getElementById("milisecond").innerText);*/
    var hour=00;
    var minute = 00;
    var second =00;
    var milisecond=00;
    $(".reset").click(function () {
        $("#hour,#minute,#second,#milisecond").text("00");
    })
    $(".start").click(function () {
        if (hour == 0 && minute == 0 && second == 0 && milisecond == 0) {
            setInterval(startFunc, 10);
        }
        

    })
    function startFunc() {
        if(milisecond<100){
            milisecond++;
        $("#milisecond").text(milisecond);
        }
        
        if(milisecond==100){
            second++;
            $("#second").text(second);
            milisecond=0;
            if(second==60){
                minute++;
            $("#minute").text(minute);
            second=0;
            }
        }

    }
    console.log(typeof hour, minute, second, milisecond);

})
