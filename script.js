function updateSystemClock() {
    const now=new Date();
    const timeString=now.toLocaleString('en-US', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });
    const timeElement = document.querySelector("#timeElement");
    if (timeElement) {
        timeElement.innerHTML = timeString;
    }
}
updateSystemClock();
setInterval(updateSystemClock, 1000);
//window closer opening code
var welcomeScreen = document.querySelector("#welcome");
var welcomeScreenClose = document.querySelector("#welcomeclose");
var welcomeScreenOpen = document.querySelector("#welcomeopen");
function closeWindow(element) {
    if (element) element.style.display = "none";
}
function openWindow(element) {
    if (element) element.style.display = "flex";
}
if (welcomeScreenClose) {
    welcomeScreenClose.addEventListener("click",function(){
        closeWindow(welcomeScreen);
    });
}
if (welcomeScreenOpen) {
    welcomeScreenOpen.addEventListener("click", function(){
        openWindow(welcomeScreen);
    })
}

DragEvent(document.getElementById("welcome"));
function dragElement(element) {
    if(!element) return;
    var initialX=0, initialY=0, currentX=0, currentY=0;
    if (document.getElementById(element.id+"header")) {
        document.getElementById(element.id+"header").onmousedown=startDragging;
    } else {
        element.onmousedown=startDragging;
    }
    function startDragging(e) {
        e=e || window.event;
        if (e.target.id==="welcomeclose" || e.target.closest("#welcomeclose")) return;
        e.preventDefault();
        initialX=e.clientX
        initialy=e.clientY;
        document.onmouseup=stopDragging;
        document.onmousemove=processDrag;
    }
    function processDrag(e) {
        e=e || window.event;
        e.preventDefault();
        currentX=initialX-e.clientX;
        currentY=initialY-e.clientY;
        initialX=e.clientX;
        initialY=e.clientY;
        element.style.top = (element.offsetTop - currentY) + "px";
        element.style.left = (element.offsetLeft - currentX) + "px";
    }
    function stopDragging(){
        document.onmouseup=null;
        document.onmousemove=null;
    }
}