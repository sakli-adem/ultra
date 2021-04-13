$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
 
        
        if(this.scrollY > 5){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
         // sticky navbar on scroll script

         if(this.scrollY > 420 ){
            $('.taswira1').addClass("hid");
            $('.div3ordh').addClass("hid1");
        }else{
            $('.taswira1').removeClass("hid");
            $('.div3ordh').removeClass("hid1");
        }

        if(this.scrollY > 940 || this.scrollY<1|| this.scrollY<420 ){
            $('.taswira1').addClass("hid3");
            $('.div3ordh').addClass("hid4");
        }else{
            $('.taswira1').removeClass("hid3");
            $('.div3ordh').removeClass("hid4");
        }


        if(this.scrollY > 1900 && this.scrollY<2300){
            $('.dw').addClass("ani1");
        }else{
            $('.dw').removeClass("ani1");
        }
        
        if(this.scrollY > 2300 || this.scrollY<1900 ){
            $('.dw').addClass("ani2");
        }else{
            $('.dw').removeClass("ani2");

        }


        if(this.scrollY > 1900 && this.scrollY<2300){
            $('.dw').addClass("ani1");
        }else{
            $('.dw').removeClass("ani1");
        }
        
        if(this.scrollY > 2300 || this.scrollY<1900 ){
            $('.dw').addClass("ani2");
        }else{
            $('.dw').removeClass("ani2");

        }

 
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
            // sticky navbar on scroll script
            if(  (this.scrollY > 680 && this.scrollY < 1900) || (this.scrollY < 2000 && this.scrollY > 1900)  ){
                $('.skil').addClass("ani");
            }else{
                $('.skil').removeClass("ani");
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

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["student","designer","developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["student","designer","developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
   
});
function alia(){
    alert("sorry! I'm still working on this parti , Please try Later")
}