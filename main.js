$(document).ready(function(){
 $(window).scroll(function(){
     // sticky navbar on scroll script
     if(this.scrollY > 20){
         $('.navbar').addClass("sticky");
     }else{
         $('.navbar').removeClass("sticky");
     }
     
     // scroll-up button show/hide script
     if(this.scrollY > 200){
         $('.scroll-up-btn').addClass("show");
     }else{
         $('.scroll-up-btn').removeClass("show");
     }
 });
 // slide-up script
 $('.scroll-up-btn').click(function(){
  $('html').animate({scrollTop: 0});
  // removing smooth scroll on slide-up button click
  $('html').css("scrollBehavior", "auto");
});

$('.navbar .menu li a').click(function(){
  // applying again smooth scroll on menu items click
  $('html').css("scrollBehavior", "smooth");
});

// toggle menu/navbar script
$('.menu-btn').click(function(){
  $('.navbar .menu').toggleClass("active");
  $('.menu-btn i').toggleClass("active");
});
});
  
/* education */
 
var texts=document.getElementsByClassName("text");
var gradcontents=document.getElementsByClassName("grad-contents");

function opentab(tabname){
 for (text of texts){
  text.classList.remove("active-link");
 }
 for ( gradcontent of gradcontents){
  gradcontent.classList.remove("active-tab");
 }
 event.currentTarget.classList.add("active-link");
 document.getElementById(tabname).classList.add("active-tab");
}

/* contact form */

  const scriptURL = 'https://script.google.com/macros/s/AKfycbxxyHUckuEHxmX_3JVlYg4vwoc_PILJ-_Loc44Pypl0W01e0UhLGGpf70TJ6q7vS95Ufg/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg=document.getElementById("msg")
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML ="***Message sent successfully***"
        setTimeout(function(){
          msg.innerHTML=""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })


