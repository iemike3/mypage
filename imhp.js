
window.onload = function() {
    window.addEventListener('scroll', function() {
        if (1 <  window.scrollY) {
            console.log("yes")
            document.getElementsByClassName("header")[0].classList.add("scroll")
        } else {
            document.getElementsByClassName("header")[0].classList.remove("scroll")
        }
        console.log("縦スクロール：" + window.scrollY);
    });
}