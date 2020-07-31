/* reference: https://www.w3schools.com/css/css_navbar_horizontal.asp */

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function handleClicked() {
  const elem = document.getElementById("myTopnav");
  /* first click: add reponsive class */
  if (elem.className === "topnav") {
    elem.className += " responsive";
  } else {
    /* second click: remove responsive class */
    elem.className = "topnav";
  }
}


function handleScrolled(){
  const navbarContainer = document.getElementById("nav-container")
  const header = document.querySelector("header")
  const breakPoint = header.offsetHeight - navbarContainer.offsetHeight - 50
  if (window.pageYOffset >= breakPoint){
    navbarContainer.classList.add("fixed");
  }else{
    navbarContainer.classList.remove("fixed");
  }

}


window.addEventListener('scroll',handleScrolled)