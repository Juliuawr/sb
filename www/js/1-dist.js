$((function(){$(window).scroll((function(){$(this).scrollTop()>200?($(".to-up").fadeIn(),$(".to-upSmall").fadeIn()):($(".to-up").fadeOut(),$(".to-upSmall").fadeOut())})),$(".to-up").click((function(){return $("body,html").animate({scrollTop:0},800),!1})),$(".to-upSmall").click((function(){return $("body,html").animate({scrollTop:0},800),!1}))}));var i,faq=document.getElementsByClassName("AQP");for(i=0;i<faq.length;i++)faq[i].addEventListener("click",(function(){this.classList.toggle("active");var e=this.nextElementSibling;"block"===e.style.display?e.style.display="none":e.style.display="block"}));var deg=0;$(".arrow3").click((function(){deg+=180,$(this).css({transform:"rotate(+"+deg+"deg)"})}));var deg1=0;$(".arrow1").click((function(){deg1+=180,$(this).css({transform:"rotate(+"+deg1+"deg)"})}));var deg2=0;$(".arrow2").click((function(){deg2+=180,$(this).css({transform:"rotate(+"+deg2+"deg)"})})),$(".expose").click((function(e){$(this).css("z-index","1"),$("#overlay").fadeIn(500)})),$("#overlay").click((function(e){$("#overlay").fadeOut(500,(function(){$(".expose").css("z-index","1")}))}));var slideIndex=1;function plusSlides(e){showSlides(slideIndex+=e)}function currentSlide(e){showSlides(slideIndex=e)}function showSlides(e){var t,l=document.getElementsByClassName("mySlides"),n=document.getElementsByClassName("demo"),s=document.getElementById("caption");for(e>l.length&&(slideIndex=1),e<1&&(slideIndex=l.length),t=0;t<l.length;t++)l[t].style.display="none";for(t=0;t<n.length;t++)n[t].className=n[t].className.replace(" active","");l[slideIndex-1].style.display="block",n[slideIndex-1].className+=" active",s.innerHTML=n[slideIndex-1].alt}showSlides(slideIndex);