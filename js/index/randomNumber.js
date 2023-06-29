$(function () {
    const option = {
        root: null,
        rootMargin: "10px 20px 0px 40px",
        threshold: [0, 0.25],
    };
    var timeout;
    let yearOfExperience = [];
    let successProject = [];
    let activeProject = [];
    let happyCustomers = [];
    let fixedLength = 15;
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
    function autoChangeValue(array, selector, duration) {
        if (array.length > 0) {
            array.length === 1
                ? (document.getElementById(selector).style.color = "#CDA274")
                : (document.getElementById(selector).style.color = "#292F36");

            document.getElementById(selector).innerHTML = array[0];
            array.shift();
            if ([...array].length + 1 > 0) {
                timeout = setTimeout(() => {
                    autoChangeValue([...array], selector, duration - 20);
                }, duration);
            } else {
                clearTimeout(timeout);
            }
        }
    }
    let randomFunc = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                if (entry.target.id === "Counter") {
                    autoChangeValue(yearOfExperience, "YOE", 450);
                    setTimeout(() => {
                        autoChangeValue(successProject, "SP", 450);
                    }, 250);
                    autoChangeValue(activeProject, "AP", 450)
                    setTimeout(() => {
                        autoChangeValue(happyCustomers, "HC", 450);
                    }, 250);
                    observer.unobserve(entry.target);
                }
            }
        });
    };
    let observer = new IntersectionObserver(randomFunc, option);
    // Get Element
    const counterSection = document.getElementById("Counter");
    // Observe Element
    observer.observe(counterSection);
});
