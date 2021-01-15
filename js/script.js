$(document).ready(function() {
    $('#toggle').click(function() {
        $(this).toggleClass('active');
        $('#overlay').toggleClass('open');
        gsap.to(".ol", {delay: 0.5, opacity: 1, top: 0, duration: 0.5, ease: "power2"});
        gsap.to(".jp__brand", {delay: 1, opacity: 1, duration: 1});
    });
}); 


