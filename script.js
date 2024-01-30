function getTime(){
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes().toString().padStart(2,0);
    let seconds = now.getSeconds().toString().padStart(2,0);
    let meridiem = "AM";
    if(hours>=12){
        hours = hours%12;
        meridiem = "PM";
    }
    else if(hours === 0){
            hours = 12;
    }
    hours = hours.toString().padStart(2,0);
    let timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;

    document.getElementById("clock-container").textContent = timeString;
}


setBackground('url("background2.jpg")');
setInterval(getTime, 1000);


function setBackground(url){
    document.body.style.backgroundImage = url;
}
function changeBackground(){
    if(document.body.style.backgroundImage == 'url("background.jpg")'){
        document.body.style.backgroundImage = 'url("background2.jpg")';
        document.getElementById("clock-container").style.color = "palevioletred";
        document.getElementById("clock-container").style.backgroundColor = "rgba(245, 245, 245, 0.7)";
    }
    else{
        document.body.style.backgroundImage = 'url("background.jpg")';
        document.getElementById("clock-container").style.color = "white";
        document.getElementById("clock-container").style.backgroundColor = "transparent";
    }
}