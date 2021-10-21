// slider__css-image
var index =0;
run();
function run(){
    var Sliders= document.getElementsByClassName("js-img__sliders")
    for(var i = 0;i<Sliders.length;i++)
    {
        Sliders[i].style.display = "none";
    }
    index++;
    if(index > Sliders.length)
    {
        index=1;
    }
    Sliders[index-1].style.display="flex";
    setTimeout(run,5000)
}
//cart__product-CSS
// var cart = document.querySelector(".icon")
// var productCart = document.querySelector(".product__cart")
// cart.addEventListener('mouseover', function(){
//     productCart.classList.add('open')
// })
// cart.addEventListener('mouseleave', function(){
//     productCart.classList.remove('open')
// })
//mennu__modal
var menuModal= document.querySelector(".js-modal__menu")
var introModal =document.querySelector(".js-modal__intro")
var modalIntroClose = document.querySelector(".js-modal__intro-close")
var modalIntroContainer = document.querySelector(".modal__intro-container")
menuModal.addEventListener('click',function(){
    introModal.classList.add("openBlock")
})
modalIntroClose.addEventListener('click',function(){
    introModal.classList.remove("openBlock")
})
introModal.addEventListener("click",function(){
    introModal.classList.remove("openBlock")
})
modalIntroContainer.addEventListener("click",function(e){
    e.stopPropagation();
})
//scroll header
$( document ).ready(function() {
    $(window).scroll(function(){
        if ($(this).scrollTop()>800){
            $('.header').addClass('sticky')
        }
        else(
            $('.header').removeClass('sticky')
        )
    });
});
//modal-login  
var modalLogin = document.querySelector(".js-modal__account-login")
var modalLoginContainer = document.querySelector(".js-modal__account-container-login")
var iconLogin = document.querySelector(".js-header__login")
var switchRegister = document.querySelector(".js-header-register")
var switchLogin = document.querySelector(".js-login__header-login")
var modalRegister = document.querySelector(".js-modal__account-register")
var modalRegisterContainer = document.querySelector(".js-modal__account-container-register")
//close/open form login
iconLogin.addEventListener("click",function()
{
    modalLogin.classList.add('open')
})
modalLogin.addEventListener("click",function()
{
    modalLogin.classList.remove("open")
})
modalLoginContainer.addEventListener("click",function(e)
{
    e.stopPropagation();
})
//close/open form register
modalRegister.addEventListener("click",function()
{
    modalRegister.classList.remove('open')
})
modalRegisterContainer.addEventListener("click",function(e)
{
    e.stopPropagation();
})
//switch register and login
switchRegister.addEventListener("click",function()
{
    modalLogin.classList.remove("open")
    modalRegister.classList.add("open")
})
switchLogin.addEventListener("click",function()
{
    modalRegister.classList.remove("open")
    modalLogin.classList.add("open")
})
//paralax
var parallax=document.getElementById('parallax')
window.addEventListener("scroll",function(){
    let offset=window.pageYOffset;
     parallax.style.backgroundPositionY = (offset - parallax.offsetTop) * 0.7 + "px";
})
//carousel
var prev = document.querySelector(".prev-btn")
var next = document.querySelector(".next-btn")
var track = document.querySelector(".track")
var carousel = document.querySelector(".carousel-container").offsetWidth;
prev.addEventListener("click",function() {
      track.style.transform =`translateX(-${carousel}px)`
})
next.addEventListener("click",function(){
    track.style.transform ='translateX(0)'
})
//explorer
var btnPre = document.querySelector(".Explorer_prev-btn-icon")
var btnNext = document.querySelector(".Explorer_next-btn-icon")
var contentMan = document.querySelector(".content-man")
var contentGirl = document.querySelector(".content-girl")



btnNext.addEventListener("click",function(){
   contentGirl.classList.remove("openBlock")
     contentMan.classList.add("openBlock")
})

btnPre.addEventListener("click",function(){
    contentMan.classList.remove("openBlock")
    contentGirl.classList.add("openBlock")
})
//back to top
$( document ).ready(function() {
    $(window).scroll(function(){
        if ($(this).scrollTop()>1800){
            $('.back_top').addClass('open')
        }
        else(
            $('.back_top').removeClass('open')
        )
    });
});
