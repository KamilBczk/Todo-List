function append() {
    var nbofli = $('.todolist li').length;
    for (let index = 1; index <= nbofli; index++) {
        if(!($('.todolist li:nth-child(' + index + ')').hasClass('hasdelete')))
        {
            $('.todolist li:nth-child(' + index + ')').append('<div class="delete">delete</div>');
            $('.todolist li:nth-child(' + index + ')').addClass('hasdelete');
        }
    }
}
append();
$('.todolist').delegate('li', 'click', function() {
    $(this).toggleClass('active');
});
$('.add_to_do p').click(function() {
    var addToDo = $('.add_to_do input').val();
    $('.todolist').append('<li>' + addToDo + '</li>');
    $('.add_to_do input').val("");
    append();
});
$('.delete').click(function () {
    
})