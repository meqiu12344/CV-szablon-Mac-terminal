window.addEventListener("keypress", function(event) {
    if (event.key === "Enter"){
        command();
    }
})

var data = new Date()

msc = data.getMonth();
msc = msc+1;

let date = data.getDate() +"-"+ msc +"-"+ data.getFullYear() +" "+ data.getHours() +":"+ data.getMinutes() + ":" + data.getSeconds()
lastLogin=document.getElementById("lastlogin").innerHTML="Last login: " + date + " on IPhone(User)"

i=0;
box = document.getElementById('terminal-box')



function textInput(i){
    var t= '🍺 macbookair@User <b class="arrow">»</b><input type="text" name="command" id="command'+i+'" placeholder="Type command">';
    return t;
}

function min(){
    box.classList.remove("max");
    box.classList.add("mini");

    document.getElementById('sm-icon').style.display="block";

    location.href="#command"+i;
}

function max(){
    box.classList.remove("mini");
    box.classList.add("max");
    location.href="#command"+i;

    document.getElementById('sm-icon').style.display="none";
}

function wClose(){
    document.getElementById('sm-icon').style.display="block";
    box.style.display="none";
}

function wOpen(){
    box.style.display="block";

    if(document.getElementById('terminal-box').className == "terminal-box max"){
        document.getElementById('sm-icon').style.display="none";
    }
}

function oMnie(){
    i++

    var msgOMnie = "<br>Nazywam się XYZ. Mam X lat. <br>" +
    "Jestem absolwentem ... <br> <br>"

    d=document.createElement('div');
    cos = document.getElementById("message")
    cos.appendChild(d)
    d.innerHTML = msgOMnie;
}

function skills()
{
    i++

    var msgskills = "<br> <b>skills</b> <br> HTML/CSS: X% <br> JavaScript: X% <br> PHP: X% <br> Java: X% <br> Python: X% <br> C++: X% <br> SQL: X% <br><br>";

    d=document.createElement('div');
    cos = document.getElementById("message")
    cos.appendChild(d)
    d.innerHTML = msgskills; 
}

function edu()
{
    i++


    var msgedu = "<br><b> Szkola </b> <br> -Jestem uczniem szkoły XYZ. Na zajęciach uczę się m.in. ... , ... , ... oraz ... <br><br> <b> Kursy </b> <br> -W trzeciej klasie technikum byłem uczystnikiem ... z zakresu ... <br><br>"

    d=document.createElement('div');
    cos = document.getElementById("message")
    cos.appendChild(d)
    d.innerHTML = msgedu; 
}

function dos_zawodowe()
{
    i++

    var msgdos = "<br><b> Praca </b> <br> FirmaXYZ - StanowiskoXYZ <br> <br> <b> Projekty </b> <br> LINK -> <a class='link' href='https://github.com/meqiu12344?tab=repositories'></a> <br> <br>"

    d=document.createElement('div');
    cos = document.getElementById("message")
    cos.appendChild(d)
    d.innerHTML = msgdos; 
}

function jezyki()
{
    i++

    var msgj = "<br><b> Jezyki </b> <br> Polski 90% <br> Angielski 65% <br> <br>"

    d=document.createElement('div');
    cos = document.getElementById("message")
    cos.appendChild(d)
    d.innerHTML = msgj; 
}

async function commandLine(){
    d=document.createElement('div');
    cos = document.getElementById("message")
    cos.appendChild(d)
    d.innerHTML = textInput(i);
}

function command(){

    element = document.getElementById('command'+i)

    if(element.value == "help"){

        i++

        var msg = "lista komend <br> /oMnie"+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+ " wyswietl informacje o mnie "+ 
        "<br> /skills" + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+ " wyswietl moje umiejetnosci "+
        "<br> /edukacja" + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+ "wyswietl sciezke mojej edukacji"+
        "<br> /dos" + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+ " wyswietl moje doswiadczenie zawodowe"+
        "<br> /jezyki" + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+ " wyswietl jezyki w jakich sie komunikuje"+
        "<br> /all" + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+ " wyswietl wszystkie powyższe komendy<br><br>" + textInput(i)

        d=document.createElement('div');
        cos = document.getElementById("message")
        cos.appendChild(d)
        d.innerHTML = msg;

    }else if(element.value == "oMnie") {
        
        oMnie()

        d=document.createElement('div');
        cos = document.getElementById("message")
        cos.appendChild(d)
        d.innerHTML = textInput(i);
        
    }else if(element.value == "edu"){

        edu();

        d=document.createElement('div');
        cos = document.getElementById("message")
        cos.appendChild(d)
        d.innerHTML = textInput(i);

    }else if(element.value == "skills"){

        skills();

        d=document.createElement('div');
        cos = document.getElementById("message")
        cos.appendChild(d)
        d.innerHTML = textInput(i);

    }else if(element.value == "dos"){
        dos_zawodowe();

        d=document.createElement('div');
        cos = document.getElementById("message")
        cos.appendChild(d)
        d.innerHTML = textInput(i);

    }else if(element.value == "jezyki"){
        jezyki();

        d=document.createElement('div');
        cos = document.getElementById("message")
        cos.appendChild(d)
        d.innerHTML = textInput(i);
    }else if(element.value == "tlo1" || element.value == "tlo2" || element.value == "tlo3" || element.value == "tlo4" || element.value == "tlo5" || element.value == "tlo6")
    {
        i++

        var t= '🍺 macbookair@SzymonSzymanski <b class="arrow">»</b>'+
        '<input type="text" name="command" id="command'+i+'" placeholder="Type command">'

        var msgskills = "<br><b> tlo zostalo zmienione <br> <br>" + t + "<br>"

        document.getElementById("bg").style.backgroundImage='url(tla/'+element.value+'.jpg)'
        d=document.createElement('div');
        cos = document.getElementById("message")
        cos.appendChild(d)
        d.innerHTML = msgskills; 

        cookie = document.cookie = "tlo="+element.value;
    }else if(element.value == "all"){
        all();
    }else{
        d=document.createElement('div');
        cos = document.getElementById("message")
        cos.appendChild(d)
        d.innerHTML = "<hr>Nieznana komenda" + "<hr>";
        i++
        commandLine()
    }


    x = 0;

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    

    async function forAll(title , funName){
        
        d=document.createElement('div');
        cos = document.getElementById("message")
        cos.appendChild(d)
        d.style.color = 'white'
        d.innerHTML = "<span id=command"+i+" style='color: rgb(33, 189, 100);'>🍺 macbookair@User <b class=arrow>»</b> </span>"

        
        for(x = 0;x<title.length;x++){
            d.innerHTML += title.charAt(x)
            await sleep(150);
        }
        
        location.href="#command"+i;

        window[funName]();
    }


    async function all(){

        await forAll("O mnie" , "oMnie")

        await forAll("Skills" , "skills")

        await forAll("Edukajca" , "edu")

        await forAll("Doświadczenie zawodowe" , "dos_zawodowe")

        await forAll("Języki" , "jezyki")

        await commandLine();

        location.href="#command"+i;
    }

    location.href="#command"+i;
}

function tlo(){
    tlo = document.cookie.split("=")

    if(tlo[0] == "tlo"){
        document.getElementById('bg').style.backgroundImage="url(tla/"+tlo[1]+".jpg)";
        return 0
    }else{
        document.getElementById('bg').style.backgroundImage="url(tla/tlo1.jpg)";
        return 0;
    }
}