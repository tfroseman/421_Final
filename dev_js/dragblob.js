$(function() {
    $("#draggable").click(function() {

        var input = $(document.createElement('input'));
        input.attr("type", "file");
        input.trigger('click');
        return false;
    });
});