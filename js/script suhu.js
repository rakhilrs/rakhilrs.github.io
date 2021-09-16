function cel ()
{
    var tempcelcius= document.getElementById("celcius1").value;
    var tempfahrenheit=(tempcelcius * (9 / 5 )) + 32;
    document.getElementById("fahrenheit1").value =tempfahrenheit;
}

function fah ()
{
    var tempfahrenheit=  document.getElementById("fahrenheit2").value;
    var tempcelcius=(tempfahrenheit - 32 ) * (5 / 9);
    document.getElementById("celcius2").value =tempcelcius;
}




