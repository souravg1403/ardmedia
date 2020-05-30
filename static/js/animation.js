//LARGE SCREEN VIEW ANIMATION OF PROMISE SECTION
const active = () => {
    const btn=document.querySelector(".a1");

    btn.addEventListener('click', () => {
        document.getElementById("a1").style.color='teal';
        document.getElementById("a11").style.backgroundColor="teal";
        document.getElementById("a2").style.color='#5353534f';
        document.getElementById("a12").style.backgroundColor="#3f3f3f6e";
        document.getElementById("a3").style.color='#5353534f';
        document.getElementById("a13").style.backgroundColor="#3f3f3f6e";
        
    });
}
const active2 = () => {
    const btn=document.querySelector(".a2");

    btn.addEventListener('click', () => {
        document.getElementById("a2").style.color='teal';
        document.getElementById("a12").style.backgroundColor="teal";
        document.getElementById("a1").style.color='#5353534f';
        document.getElementById("a11").style.backgroundColor="#3f3f3f6e";
        document.getElementById("a3").style.color='#5353534f';
        document.getElementById("a13").style.backgroundColor="#3f3f3f6e";
        
    });
}
const active3 = () => {
    const btn=document.querySelector(".a3");

    btn.addEventListener('click', () => {
        document.getElementById("a3").style.color='teal';
        document.getElementById("a13").style.backgroundColor="teal";
        document.getElementById("a1").style.color='#5353534f';
        document.getElementById("a11").style.backgroundColor="#3f3f3f6e";
        document.getElementById("a2").style.color='#5353534f';
        document.getElementById("a12").style.backgroundColor="#3f3f3f6e";
        
    });
}
active();
active2();
active3();
//END LARGE SCREEN VIEW

//MOBILE VIEW NAV SLIDE IN
const slider = () => {
    const hamburger=document.querySelector('.hamburger');
    const navSlide=document.querySelector('.slider-main');
    hamburger.addEventListener('click', () => {
        navSlide.classList.toggle('active');
        scrollDisable();
    });
}
const sliderOut = () =>{
    const arrow=document.querySelector('.arrow');
    const navSlide=document.querySelector('.slider-main');
    arrow.addEventListener('click', () => {
        navSlide.classList.toggle('active');
        scrollActive();
    });
}
function scrollDisable(){
    document.querySelector('html').style.position='fixed';
}
function scrollActive(){
    document.querySelector('html').style.position='static';
}
function sliderOutOnBodyTouch(){
    const doc=document.querySelector('body');
    const navSlide=document.querySelector('.slider-main');
    doc.addEventListener('touchend', () => {
        if(navSlide.classList.contains('active')){
            navSlide.classList.remove('active');
        }
    });
}

//SERVICE CARDS HOVER
slider();
sliderOut();
sliderOutOnBodyTouch();
//END MOBILE VIEW NAV SLIDE IN