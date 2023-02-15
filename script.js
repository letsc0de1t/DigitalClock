var hour = document.getElementById("hrValue")
var min = document.getElementById("minValue")
var sec = document.getElementById("secValue")
var ampm = document.getElementById("ampm")

const updateTime = () =>{
    var time = new Date()
    var h = time.getHours()
    var m = time.getMinutes()
    var s = time.getSeconds()

    min.innerText = m<10?"0"+m:m
    sec.innerText = s<10?"0"+s:s

    if(h<12){
    ampm.innerText = "AM"
    }
    else{
    ampm.innerText="PM"
    h=h%12
    }

    hour.innerText = h<10?"0"+h:h

    setInterval(updateTime,1000)
}

updateTime()