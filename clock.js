const clock=document.getElementById("clock");
setInterval(() => {
    let date =(new Date().toLocaleTimeString());
    clock.innerHTML=date;
}, 1000);