var numer = 0;
var timer1 = 0;
var timer2 = 0;

function imgchange(nrobr){      
        clearTimeout(timer1);
        clearTimeout(timer2);
        numer = nrobr - 1;

        schowaj2();
        setTimeout("imgchangetimer()", 500);
}

function schowaj2(){
    $("#snailBig").fadeOut(500);
}

function imgchangetimer ()
{
    numer++; if (numer>5) numer=1;

    var plik = "<img class=\"snailBig col-xs-12\" src=\"images/sliderPic"+ numer +".jpg\" />";
    document.getElementById("snailBig").innerHTML = plik;

    $("#snailBig").fadeIn(500);

    timer1 = setTimeout("imgchangetimer()", 10000);
    timer2 = setTimeout("schowaj2()", 9500);

}

