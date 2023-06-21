$(function () {
    $("#close-button").click(function () {
        $("html").css("overflow", "auto");
        $("#slidebar-container").css("display", "none");
    });
    $("#min-nav>a").click(function () {
        $("#slidebar-container").css("display", "block");
        $("html").css("overflow", "hidden");
    });
    $("#slidebar-container").click(function () {
        $("html").css("overflow", "auto");
        $("#slidebar-container").css("display", "none");
    });
});
