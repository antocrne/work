$('#toggle').click(function() {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
    $('.ol').toggleClass('is-active');
    $('.jp__brand').toggleClass('is-active');
});



var rellax = new Rellax('.title__rellax');