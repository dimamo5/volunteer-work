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

/*document.getElementById("read_more").addEventListener("click", function( event ) {
    // display the current click count inside the clicked div
    event.target.in nerHTML = "<i class=\"fa fa-chevron-up\" aria-hidden=\"true\"></i>";

    //document.getElementById("read_more").innerHTML.replace("<i class=\"fa fa-chevron-down\" aria-hidden=\"true\"></i>","<i class=\"fa fa-chevron-up\" aria-hidden=\"true\"></i>")
  }, false);
*/
 /* document.getElementsByClassName("center_vertically_right")[0].classList.add("load");*/
