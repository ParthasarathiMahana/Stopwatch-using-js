var start_btn = document.getElementById("start-stop");
var start_counter=0;
var reset_btn = document.getElementById("reset");
var hour = document.getElementById("hour");
var hour_count = 1;
var hourIncreament;
var min = document.getElementById("min");
var min_count = 1;
var minIncreament;
var sec = document.getElementById("sec");
var sec_count = 1;
var secIncreament;

start_btn.addEventListener("click",()=>{
    if(start_counter == 0 || start_counter%2 == 0)
    {
        start_btn.innerHTML = "stop";
        start_counter +=1;
        secIncreament = setInterval(() => {
            if(sec_count <= 9)
            {
                sec.innerHTML = "0"+sec_count;
            }
            else{
                sec.innerHTML = sec_count;
            }
            sec_count+=1;

            if(sec_count > 60)
            {
                sec_count = 1;
                if(min_count <= 9)
                {
                    min.innerHTML = "0"+min_count;
                }
                else{
                    min.innerHTML = min_count;
                }
                min_count+=1;

                    if(min_count > 60)
                    {
                        min_count = 1;
                        if(hour_count <= 9)
                        {
                            hour.innerHTML = "0"+hour_count;
                        }
                        else{
                            hour.innerHTML = hour_count;
                        }
                        hour_count+=1;
                    }
            }
        }, 1000);
    }
    else
    {
        start_btn.innerHTML = "start";
        start_counter +=1;
        clearInterval(secIncreament);
    }
});

reset_btn.addEventListener("click",()=>{
        start_btn.innerHTML = "start";
    clearInterval(secIncreament);
    start_counter =0;
    hour.innerHTML = "00";
    hour_count = 1;
    min.innerHTML = "00";
    min_count =1;
    sec.innerHTML = "00";
    sec_count =1;
})