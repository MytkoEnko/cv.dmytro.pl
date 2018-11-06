/* ---  Cookies handling  ---  */
// Function to check if cookies is accepted and show popup if not.
function termsAcceptance() {
  if (!window.localStorage.getItem('acceptance')) {
    document.getElementById('terms').style.display = "block";
    document.body.style.overflow = "hidden";
    }
  }
// Call function on every window load
window.onload = termsAcceptance;
// Function to set storage cookies (Accept Terms button),
// hide Terms popup, enable page overflow
function acceptTerms() {
  window.localStorage.setItem('acceptance', 'yes');
  document.getElementById('terms').style.display = "none";
  document.body.style.overflow = "visible";
}
// Function to handle Terms declination
function declineTerms() {
    window.location.href = "terms-refused.html";
}

// Menu toggle Function
/*
  If menu icon is clicked add "visible" class, than with the next
  click remove it.
*/
document.getElementById("menu-toggle").onclick = function() {
  let menu = document.getElementsByClassName("menu")[0];
  menu.classList.add("visible");
  setTimeout(closeMenu, 10);
function closeMenu(){
  if (menu.classList.contains("visible")){
    document.addEventListener('click',function removeMenu(event){
      menu.classList.remove("visible");
      document.removeEventListener('click',removeMenu);
      } );
    }
  }
};
//
