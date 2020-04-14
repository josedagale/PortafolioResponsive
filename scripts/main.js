const nav = document.querySelector(".nav");
const ipad = window.matchMedia("screen and (max-width:767px)")
const burgerbutton = document.querySelector("#burger");

ipad.addListener(validation)

function validation(event){
  if (event.matches) {
    burgerbutton.addEventListener("click", showHide)
  }
  else{
    burgerbutton.removeEventListener("click", showHide)
  }
}

validation(ipad)

function showHide()
{
  if (nav.classList.contains("activate")) {
    nav.classList.remove("activate");
  }
  else{
    nav.classList.add("activate");
  }
}
