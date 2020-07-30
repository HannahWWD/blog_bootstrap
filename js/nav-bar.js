/* reference: https://www.w3schools.com/css/css_navbar_horizontal.asp */

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function handleClicked() {
  var elem = document.getElementById("myTopnav");
  /* first click: add reponsive class */
  if (elem.className === "topnav") {
    elem.className += " responsive";
  } else {
    /* second click: remove responsive class */
    elem.className = "topnav";
  }
}