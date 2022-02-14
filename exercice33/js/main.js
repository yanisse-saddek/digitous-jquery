

$('.btn').click(function(){
    $.ajax({url: "https://restcountries.com/v3.1/name/france", success: function(result){
    $('#country').text(result[0].name.common)
    $('#capital').text(result[0].capital[0])
    }});
})