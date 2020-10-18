// alert("Hello World");

var onClick = document.querySelector(".btn");
var onClickSlide = document.querySelector(".when-clicked");
var planeAnim = document.querySelector(".plane");
let header = document.querySelector(".header");

onClick.addEventListener('click', function() {
    onClickSlide.classList.add("when-clicked-anim");
    planeAnim.classList.add("plane-anim");
    // let click = onClick.classList.add("btn-anim");
    // console.log(click);
    setTimeout(() => {
        document.querySelector(".after-anim").classList.add("after-anim-anim");
    }, 1000);
    // alert("jhe")
})

onClick.addEventListener('mouseover', function() {
    header.classList.add('anim-header')
})

onClick.addEventListener('mouseleave', function() {
    header.classList.remove('anim-header')
})