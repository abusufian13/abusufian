/*============toggle style switcher============*/
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
});

//Hide style - switcher on scrool
window.addEventListener("scroll", () => {
   if(document.querySelector(".style-switcher").classList.contains("open"))
   {
    document.querySelector(".style-switcher").classList.remove("open");
   }
});
/*============Theme Color============*/
const alternateStyles = document.querySelectorAll(".alternate-style");

function setActivestyle(color) {
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    });
}

/*============Theme Light and dark Mode Color============*/
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () => {
    if(document.body.classList.contains("dark"))
    {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else 
    {
        dayNight.querySelector("i").classList.add("fa-moon");

    }
})

