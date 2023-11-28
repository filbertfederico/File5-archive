$(document).ready(
    function(){
        $("#le_button").on("click", fetchCurrency);
    }
);

function fetchCurrency(){ 
    var amount=$("#input_amount").val();
    var currency=$("#select_currency").val();
    alert(amount + currency);
    var baseURL="http://data.fixer.io/api/latest?access_key=";
    var apikey="aa72f0c62808cc7542ab8a480f291c82";
    var base="&base=" + currency;
    var symbols = "&symbols=IDR,USD,JPY,EUR";
    var completeURL=baseURL + apikey + base + symbols;
    alert(completeURL);
    var currencyRequest={
        url: completeURL,
        method:"GET"
    };
    var currencySuccessCallBack= function(response){
        console.log(response);
        $("#p_idr").html(amount*response.rates.IDR+"IDR");
        $("#p_usd").html(amount*response.rates.USD+"USD");
        $("#p_jpy").html(amount*response.rates.JPY+"JPY");
        $("#p_eur").html(amount*response.rates.EUR+"EUR");
    }
    $.ajax(currencyRequest).done(currencySuccessCallBack);
}