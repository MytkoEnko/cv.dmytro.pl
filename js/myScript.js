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
  document.body.style.overflow = "unset";
}
// Function to handle Terms declination
function declineTerms() {
    window.location.href = "terms-refused.html";
}
