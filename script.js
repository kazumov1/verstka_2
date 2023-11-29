$(document).ready(function() {
    $(function() {
        $('#header_burger_menu').click(function(){
            $(this).toggleClass('open');
        });
        $('#header_burger_menu').click(function(){
            $('#menu').css({'visibility' : 'visible'});
            $('#menu').slideToggle();
        });
    });
});