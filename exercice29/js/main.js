$('.btn').click(function(){
    textLength = ($('input').val().length)

    if(textLength > 6){
        $('input').addClass('is-valid')
    }else{
        $('input').addClass('is-invalid')
    }
})