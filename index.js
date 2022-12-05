
let indexValue = 0;


function slideShow() {
    setTimeout(slideShow, 2000)
    let x;
    const img = document.querySelectorAll("img.cards_img_inner")
    const hr = document.querySelector(".preloader")
    for (x = 0; x < img.length; x++) {
        img[x].style.display = "none";
        hr.style.transform = `translateX(${x}00%)`
    }

    indexValue++
    if (indexValue > img.length) {
        indexValue = 1;
       // hr[0].style.transform = "translate(100%)"
       console.log(hr)
    }

    img[indexValue - 1].style.display = "block";
    hr.style.transform = `translateX(${indexValue - 1}00%)`
}

slideShow()
