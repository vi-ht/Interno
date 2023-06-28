$(function () {
    let yearOfExperience = [];
    let successProject = [];
    let activeProject = [];
    let happyCustomers = [];
    let fixedLength = 20;
    function createRandomArray(array, fixedValue) {
        for (let i = 0; i < fixedLength + 1; i++) {
            if (i === fixedLength) {
                array[i] = fixedValue;
            } else {
                array[i] = Math.ceil(Math.random() * 100);
            }
        }
    }
    createRandomArray(yearOfExperience, 12);
    createRandomArray(successProject, 85);
    createRandomArray(activeProject, 15);
    createRandomArray(happyCustomers, 95);
    var timeout;
    function autoChangeValue(array, selector) {
        if (array.length > 0) {
            console.log(selector, array[0], array.length);
            document.getElementById(selector).innerHTML = array[0];
            array.shift();
            if ([...array].length > 0) {
                timeout = setTimeout(() => {
                    autoChangeValue([...array], selector);
                }, 300);
            } else {
                clearTimeout(timeout);
            }
        }
    }
    
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

    // ---------------------ALL PAGE ANIMATE---------------------

    $("#Client-Logo-inner").hide();
    $("#Contact").hide();
    // calculate section pos
    let workPos = document.getElementById("work").offsetTop - 800;
    let aboutUSPos = document.getElementById("aboutUS").offsetTop - 800;
    let testimonialPos = document.getElementById("Testimonial").offsetTop - 800;
    let clientLogoPos = document.getElementById("Client-Logo").offsetTop - 800;
    let projectPos = document.getElementById("project-inner").offsetTop - 800;
    let blogPos = document.getElementById("Blog-container").offsetTop - 800;
    let counterPos =
        document.getElementById("Counter-container").offsetTop - 800;
    let contactPos =
        document.getElementById("Contact-container").offsetTop - 800;

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
        // Activate the effect for work section
        if (scrollY > workPos && scrollY < workPos + 100) {
            $("#work-container").css("animation-play-state", "running");
        }
        // Activate the effect for aboutus section
        if (scrollY > aboutUSPos && scrollY < aboutUSPos + 100) {
            $("#aboutUS-content").css("animation-play-state", "running");
            $("#aboutUS-image").css("animation-play-state", "running");
        }
        // Activate the effect for testimonial section
        if (scrollY > testimonialPos && scrollY < testimonialPos + 100) {
            $("#Testimonial").css("animation-play-state", "running");
        }
        // Activate the effect for client logo section
        if (scrollY > clientLogoPos && scrollY < clientLogoPos + 100) {
            $("#Client-Logo-inner").fadeIn("slow");
        }
        // Activate the effect for project section
        if (scrollY > projectPos && scrollY < projectPos + 100) {
            $("#project-header").css("animation-play-state", "running");
            $("#project-content").css("animation-play-state", "running");
        }
        if (scrollY > counterPos) {
            window.addEventListener("scroll", myFunction, { once: true });
        }
        //Activate the effect for blog section
        if (scrollY > blogPos && scrollY < blogPos + 100) {
            // $("#Blog-container").css("height", "auto")
            $(".Blog-header").css("animation-play-state", "running");
            $("#Blog-list > .Blog-card:nth-child(2n)").css(
                "animation-play-state",
                "running"
            );
            $("#Blog-list > .Blog-card:nth-child(2n+1)").css(
                "animation-play-state",
                "running"
            );
        }
        // Activate the effect for contact section
        if (scrollY > contactPos && scrollY < contactPos + 100) {
            $("#Contact").fadeIn("slow");
        }
    });
});

// function animateNumber(finalNumber, delay, startNumber = 0, callback) {
//     let currentNumber = startNumber;
//     const interval = window.setInterval(updateNumber, delay);
//     function updateNumber() {
//         if (currentNumber >= finalNumber) {
//             clearInterval(interval);
//         } else {
//             currentNumber++;
//         }
//         callback(currentNumber);
//     }
// }
// function myFunction() {
//     animateNumber(10, 1000, 0, function (number) {
//         const formattedNumber = number.toLocaleString();
//         document.getElementById("YOE").innerText = formattedNumber;
//     });
//     animateNumber(10, 1000, 0, function (number) {
//         const formattedNumber = number.toLocaleString();
//         document.getElementById("SP").innerText = formattedNumber;
//     });
//     animateNumber(19, 1000, 0, function (number) {
//         const formattedNumber = number.toLocaleString();
//         document.getElementById("AP").innerText = formattedNumber;
//     });
//     // console.log("posssssssssssssssssssssssssssssssssssss", pos);
//     // autoChangeValue(yearOfExperience, "YOE");
//     // autoChangeValue(successProject, "SP");
//     // autoChangeValue(activeProject, "AP");
//     // autoChangeValue(happyCustomers, "HC");
// }
