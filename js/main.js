let progressDiv = document.getElementById('progressDiv'),
    progressBars = document.querySelectorAll('.progress-bar'),
    counterDiv = document.querySelector('.counter-div'),
    countTags = document.querySelectorAll('.counter-div h3');


ScrollOut({
    targets: ".progress-div, .counter-div"
})

window.addEventListener("scroll", function () {

    // Progress bar

    if (progressDiv.dataset.scroll == "in") {

        progressBars.forEach(el => {

            let currentValue = el.getAttribute("data-valuenow");
            el.style.width = currentValue + "%";
            let spanCounter = el.parentElement.parentElement.querySelector("span#mySpan")
            let timer = setInterval(function () {

                if (Number(spanCounter.textContent) < currentValue) {

                    spanCounter.textContent = Number(spanCounter.textContent) + 1;

                } else {
                    clearInterval(timer)
                }

            }, 500)
        })

    } else {

        progressBars.forEach(el => {

            el.style.width = "0%";
            el.parentElement.parentElement.querySelector("span#mySpan").textContent = 0;

        })

    }

    // Counters

    if (counterDiv.dataset.scroll == "in") {

        countTags.forEach(el => {

            let time = setInterval(function () {

                if (Number(el.textContent) < el.getAttribute('data-counter')) {

                    el.textContent = Number(el.textContent) + 1;

                } else {
                    clearInterval(time)
                }

            }, 1000)

        })

    } else {
        countTags.forEach(el => {

            el.textContent = 0;

        })
    }

})

// filter

let listItems = document.querySelectorAll('.list-group li');
let filteredItems = document.querySelectorAll('.filter-items a');

listItems.forEach(li => {
    li.addEventListener("click", () => {
        document.querySelector('.list-group li.active').classList.remove('active');
        li.classList.add('active');
        let filteredItem = li.dataset.filter;
        filteredItems.forEach(item => {
            if (item.classList.contains(filteredItem)) {
                item.classList.remove('hidden')
                item.classList.add('active')
            } else {
                item.classList.remove('active')
                item.classList.add('hidden')
            }
        })
    })
})

// Start lightgallery


lightGallery(document.getElementById('lightgallery'), {
});