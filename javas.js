$('ul').on('click', 'li', function () {
    $(this).toggleClass("lis");
});

$('input').keypress(function (e) { 
    if (e.which == 13) {
        var todotxt = $(this).val();
        $(this).val("");
        $('ul').append('<li><span><i class="fa fa-trash" aria-hidden="true"></i></span> ' + todotxt + '</li>');
    }
});

$('ul').on('click', 'span', function (e) {
    $(this).parent().fadeOut(800, function () {
        $(this).remove();
    })
    e.stopPropagation();
});

$('.fa-pencil').on('click', function () {
    $('input').fadeToggle(200);
});