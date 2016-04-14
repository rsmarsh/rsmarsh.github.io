$(document).ready(function(){
    var numberofClicks = 0;
    var message = "</br>Clicked "+numberofClicks+" times";
    var fiddys = 0;
    var hundys = 0;
    var thoudys = 0;
    var tenthoudys = 0;
    var fiddythoudys = 0;
    var hundythoudys = 0;
    var middys = 0;

    $("#fiddy").hide();
    $("#hundy").hide();
    $("#thoudy").hide();
    $("#tenthoudy").hide();
    $("#fiddythoudy").hide();
    $("#hundythoudy").hide();
    $("#middy").hide();


$("#h1home").on('click', function() {

    numberofClicks++;
    if (numberofClicks%1000000 == 0) {
        $("#middy").show();
    }
    else if (numberofClicks%100000 == 0) {
        $("#hundythoudy").show();
    }

    else if (numberofClicks%50000 == 0) {
        $("#fiddythoudy").show();
    }
    else if (numberofClicks%10000 == 0) {
        $("#tenthoudy").show();
    }

    else if (numberofClicks%1000 == 0) {
        $("#thoudy").show();
    }
    else if (numberofClicks%100 == 0) {

        $("#hundy").show();
    }
    else if (numberofClicks % 50 == 0) {
        $("#fiddy").show();

    }

    $("#phome").after("</br>Clicked "+numberofClicks+" times");


});

});