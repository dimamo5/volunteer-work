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

document.querySelector("#RashidZuberu .modal-dialog .modal-content .modal-body .container-fluid .modal_text .center_vertically_right .show_slow button")
.addEventListener("click", function (event) {
    // display the current click count inside the clicked div
   // console.log('inner ' + event.target.innerHTML);

    if (event.target.innerHTML === "Read More") {
        event.target.innerHTML = "Read Less";
    } else
       event.target.innerHTML = "Read More";
}, false);
    
document.querySelector("#AzoskaSimeone .modal-dialog .modal-content .modal-body .container-fluid .modal_text .center_vertically_right .show_slow button", "#AzoskaSimeone .modal-dialog .modal-content .modal-body .container-fluid .modal_text .center_vertically_right .show_slow button")
.addEventListener("click", function (event) {
    // display the current click count inside the clicked div

    if (event.target.innerHTML === "Read More") {
        event.target.innerHTML = "Read Less";
    } else
       event.target.innerHTML = "Read More";
}, false);
