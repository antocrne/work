$('#toggle').click(function() {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
    $('.ol').toggleClass('is-active');
    $('.jp__brand').toggleClass('is-active');
});


var controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
    triggerElement: "#reveal",
    triggerHook: 0.8,
    offset: 50 
})
.setClassToggle("#reveal", "visible")

.addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#enter1",
    triggerHook: 0.7, 
    offset: 50 
})
.setClassToggle("#enter1", "visible")

.addTo(controller);


new ScrollMagic.Scene({
    triggerElement: "#reveal2",
    triggerHook: 0.9, 
    offset: 50 
})
.setClassToggle("#reveal2", "visible") 

.addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#reveal3",
    triggerHook: 0.9,
    offset: 50 
})
.setClassToggle("#reveal3", "visible") 

.addTo(controller);


new ScrollMagic.Scene({
    triggerElement: "#reveal4",
    triggerHook: 0.9,
    offset: 50 
})
.setClassToggle("#reveal4", "visible") 

.addTo(controller);