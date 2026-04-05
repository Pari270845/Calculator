const display=document.getElementById("display");
function appendToDisplay(input){
    display.value+=input;

}
function clearDisplay(){
   display.value= "";
}
function calculate(){
    try{
        display.value=eval(display.value);
    }
   catch(error){
     display.value="Error";
   }

}

const toggle = document.getElementById("themeToggle");

if(localStorage.getItem("theme") === "light"){
    document.body.classList.add("light");
    toggle.textContent = "☀️";
}

toggle.addEventListener("click", () => {
    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){
        toggle.textContent = "☀️";
        localStorage.setItem("theme","light");
    } else {
        toggle.textContent = "🌙";
        localStorage.setItem("theme","dark");
    }
});

let x = 0, y = 0;

document.addEventListener("mousemove", (e) => {
    x = (e.clientX / window.innerWidth - 0.5) * 40;
    y = (e.clientY / window.innerHeight - 0.5) * 40;
});

function animateStars(){
    document.querySelector(".stars").style.transform =
        `translate(${x}px, ${y}px)`;
    requestAnimationFrame(animateStars);
}

animateStars();