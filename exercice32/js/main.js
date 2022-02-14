$.ajax({url: "https://restcountries.com/v3.1/name/france", success: function(result){
    console.log(result[0].name.common, result[0].capital[0])
}});
