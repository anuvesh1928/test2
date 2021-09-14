

function toggle()
{
    var header = document.getElementById("header")
    header.classList.toggle("active")
}





const toTop = document.querySelector('.scroll');

window.addEventListener('scroll', () => {
    if(window.scrollY > 40){
        toTop.style.opacity = "1"
    }else{
        toTop.style.opacity = "0"
    }
})

toTop.addEventListener('click', () => {
    window.scrollTo(0,0);
    
})