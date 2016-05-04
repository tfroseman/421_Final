
    $(document).on('click','#add_text', function(){
        console.log("Adding Text");
        $('#droptarget').append('<p class="dragging_element">'+$('#text_input').val() +'</p>');
    });

    $('#delete').bind('click', function(){
        console.log('Delete an element');
    });

    $('#add_b_text').bind('click', function(){
        $('#droptarget').append('<ul class="dragging_element"><li>Part 1</li><li>Part 2</li></ul>');
    });

    $(document).bind('click', 'p.dragging_element', function(){
        this.css('border-style', 'solid' );
    });

    $(document).bind('click', 'ul.dragging_element', function(){
        this.css('border-style', 'solid' );
    });
