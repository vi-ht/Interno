$(function () {

    // ---------------------ALL PAGE ANIMATE---------------------

    $(this).scroll(function () {
        if (scrollY > 0) {
            $("header").css({
                position: "fixed",
                boxShadow: "2px 2px 20px 2px lightgray",
                zIndex: 10,
                height: "100px",
            });
        } else {
            $("header").css({
                height: "initial",
                position: "initial",
                boxShadow: "none",
            });
        }
    });
});
