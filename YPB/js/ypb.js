var added = false;

window.onscroll = function () {
    var y = window.scrollY;
    var navBar = document.querySelectorAll("#mainNav")[0];

    if (y > 150 && !added) {
        navBar.className += " scrollDown";
        added = true;
    } else if (y <= 150) {
        navBar.className = navBar.className.replace(" scrollDown", "");
        added = false;
    }
}