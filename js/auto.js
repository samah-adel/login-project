

function existUp() {
     window.location.href = "index.html"
}




var userName =localStorage.getItem('emailName');
if (userName) {
     document.getElementById('we').textContent =` أهلاً وسهلاً (${userName})`;
 }

     

