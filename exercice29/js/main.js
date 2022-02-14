$('.btn').click(function(){
    textLength = $('input').val().length

    if(textLength > 6){
        $('input').addClass('is-valid')
        $('input').removeClass('is-invalid')
    }else{
        $('input').addClass('is-invalid')
    }
})