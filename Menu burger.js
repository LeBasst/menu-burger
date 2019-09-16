$(document).ready(function(){
    $('btn-navigation').click(function(){
        $(this).find('.barre').toggleClass('isOpen');
        $('.navigation').toggleClass('isOpen');

    });
});
