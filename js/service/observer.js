$(function () {
    const options = {
        root: null,
        rootMargin: "10px 20px 0px 40px",
        threshold: [0.25],
    };

    let callback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                $(entry.target).css("animation-play-state", "running");
                if (entry.target.id === "hww-header") {
                    // console.log("ggp",entry)
                    $("#hww-header-title").css(
                        "animation-play-state",
                        "running"
                    );
                    $("#hww-header-des").css("animation-play-state", "running");
                }
                if(entry.target.className === "hww-step-container"){
                    console.log("p",entry)
                    $(entry.target.children[0]).css("animation-play-state", "running");
                    $(entry.target.children[1]).css("animation-play-state", "running");               
                }
            }
        });
    };
    const observer = new IntersectionObserver(callback, options);
    //get element
    const workContainer = document.querySelector(
        "#work-container>div:nth-child(5)"
    );
    const howWeWorkContainer = document.getElementById("hww-header");
    const stepList = document.getElementsByClassName("hww-step-container");
    const noList = document.getElementsByClassName("hww-step-no");
    const contactContent = document.getElementById("Contact-content");
    const contactButton = document.querySelector("#Contact>button");
    //observer element
    observer.observe(workContainer);
    observer.observe(howWeWorkContainer);
    observer.observe(contactContent);
    observer.observe(contactButton);
    for (let index = 0; index < stepList.length; index++) {
        observer.observe(stepList[index]);  
    }
    for (let index = 0; index < noList.length; index++) {
        observer.observe(noList[index]);  
    }
});
