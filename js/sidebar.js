$(document).ready(function () {
    var menu_btn = $("#menu-btn");
    var sidebar = $("#sidebar");
    var container = $(".my-container");

    menu_btn.on("click", function () {
        sidebar.toggleClass("active-nav");
        container.toggleClass("active-cont");
    });
});