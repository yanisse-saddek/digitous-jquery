$('.btn').click(function(){
    val=  $('input').val()
    urlToLoad = "https://restcountries.com/v3.1/name/" + val
    console.log(urlToLoad)
    console.log('salut',urlToLoad)
    $.ajax({url: urlToLoad, success: function(result){
        $('#country').text(result[0].name.common)
        $('#capital').text(result[0].capital[0])
        }});
})