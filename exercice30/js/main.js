$('input').keyup(function(){
    if( $('input').val().length     > 5){
        $('input').addClass('is-valid')
        $('input').removeClass('is-invalid')
    }else if( $('input').val().length< 5){
        $('input').addClass('is-invalid')
    }
})