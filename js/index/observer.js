$(function () {
    const option = {
        root: null,
        rootMargin: "10px 20px 0px 40px",
        threshold: [0, 0.25],
    };
    $("#Client-Logo-inner").animate({ opacity: 0 });
    $("#Contact").animate({ opacity: 0 });

     // set up callback function for observer

    let callback_anim = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                $(entry.target).css("animation-play-state", "running");
                if (entry.target.id === "project-header") {
                    $("#project-content").css(
                        "animation-play-state",
                        "running"
                    );
                }
                if (entry.target.id === "Blog-header") {
                    $("#Blog-list > .Blog-card:nth-child(2n)").css(
                        "animation-play-state",
                        "running"
                    );
                    $("#Blog-list > .Blog-card:nth-child(2n+1)").css(
                        "animation-play-state",
                        "running"
                    );
                }
                observer_anim.unobserve(entry.target);
            }
        });
    };
    let callback_JQuery_anim = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                $(entry.target).animate(
                    { opacity: 1 },
                    { duration: "slow", easing: "easeInBack" }
                );
            }
        });
    };

    // create observer

    let observer_JQuery_anim = new IntersectionObserver(
        callback_JQuery_anim,
        option
    );
    let observer_anim = new IntersectionObserver(callback_anim, option);

    // Get Element

    const workSection = document.getElementById("work-container");
    const aboutUSContentSection = document.getElementById("aboutUS-content");
    const aboutUSImageSection = document.getElementById("aboutUS-image");
    const testimonialSection = document.getElementById("Testimonial");
    const clientLogoSection = document.getElementById("Client-Logo-inner");
    const projectHeaderSection = document.getElementById("project-header");
    const blogHeaderSection = document.getElementById("Blog-header");
    const contactSection = document.getElementById("Contact");

    // Observe Element

    observer_anim.observe(workSection);
    observer_anim.observe(aboutUSContentSection);
    observer_anim.observe(aboutUSImageSection);
    observer_anim.observe(testimonialSection);
    observer_anim.observe(projectHeaderSection);
    observer_anim.observe(blogHeaderSection);
    observer_JQuery_anim.observe(clientLogoSection);
    observer_JQuery_anim.observe(contactSection);
});
