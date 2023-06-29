$(function () {

    // --------------------SLIDEBAR ANIMATE-------------------------

    function handleOpenSlideBar() {
        $("#slidebar-container").fadeIn().show();
        $("html").css("overflow", "hidden");
        $("#slide-bar").animate(
            { right: "0px", opacity: "1" },
            { duration: "slow" }
        );
    }
    function handleCloseSlideBar() {
        $("html").css("overflow", "auto");
        $("#slidebar-container").fadeOut(300).hide(300);
        $("#slide-bar").animate(
            { right: "-370px", opacity: "1" },
            { duration: "slow", easing: "easeOutBack" }
        );
    }

    $("#close-button").click(handleCloseSlideBar);
    $("#min-nav>a").click(handleOpenSlideBar);
    $("#slidebar-background").click(handleCloseSlideBar);

});


