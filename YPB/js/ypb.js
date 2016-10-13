var added = false;
var exit = '<section class="myModal text-right"><i id="exit" class="fa fa-times fa-fw fa-3x" aria-hidden="true"></i>';

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

document.querySelector("#first").onclick = function () {
    var description = '<div id="firstDescription"class="description text-justify"> <p> Mr. Rashid Zuberu is a Youth, Peace and Security Expert and the founder of Young Peace Brigades. Mr. Rashid develops comprehensive peace programme for communities affected by conflicts in West Africa using tools such as preventive diplomacy and prev entive deployment. He explores related challenges, and attempts to distill best practices, and considers the impact of recent normative developments on conflict prevention in fragile societies. He is a trainer on conflict transformation, peacebuilding and human rights. Mr. Rashid Zuberu also serves on UNOY Peacebuilders International Steering Group representing West and Central Africa. He was a leading part of the UNOY Peacebuilders Youth Advocacy Team (YAT) that led a successful Global civil society effort for the adoption of a United Nations Security Council Resolution scr2250 on Youth Peace and Security. He has expertise in International relations, Development, Health, youth engagement and security issues. He has traveled extensively across the world and also lived and worked in East and West Africa as well as Canada. Mr. Rashid Zuberu has served on numerous international speaking panels on the issue of youth, peace, security and International development. Over the years has facilitated workshops and trainings for youths around the world and from post conflict areas in Africa. </p> </div> </section>';
    document.querySelector("#firstPerson").insertAdjacentHTML('afterend', exit + description);


    document.querySelector("#exit").onclick = function () {
        document.querySelector(".myModal").remove();
    }
}
