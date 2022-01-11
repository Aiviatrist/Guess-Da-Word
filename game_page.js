var pl1=localStorage.getItem("play1");
var pl2=localStorage.getItem("play2");
var p1s=0;
var p2s=0;

document.getElementById("na1").innerHTML=pl1+" : ";
document.getElementById("na2").innerHTML=pl2+" : ";
document.getElementById("play1sco").innerHTML=p1s;
document.getElementById("play2sco").innerHTML=p2s;
document.getElementById("pq").innerHTML="Question turn : "+pl1;
document.getElementById("pa").innerHTML="Answer turn : "+pl2;

function ohno(){
    get_word= document.getElementById("quest").value;
    word= get_word.toLowerCase();
    chair1= word.charAt(1);
    chair2= word.charAt(Math.floor(word.length/2));
    chair3= word.charAt(word.length-1);
    r1= word.replace(chair1,"_");
    r2= r1.replace(chair2, "_");
    r3= r2.replace(chair3, "_");

    question= "<h4 id='meg'> Q."+r3+"</h4>";
    input= "<br> Answer : <input id='pell' type='text' placeholder='Enter your guess'>";
    check= "<br><br> <button onclick='lol()' class='btn btn-success'>Check</button>";
     row= question+input+check;
     document.getElementById("output").innerHTML=row;
     document.getElementById("quest").value="";    
}
var answert="player2";
var quesstiont="player1";
function lol(){
    input=document.getElementById("pell").value;
    prob=input.toLowerCase();
    if(prob==word){
        if(answert=="player1"){
            p1s=p1s+1;
            document.getElementById("play1sco").innerHTML=p1s;
        }
        else{
            p2s=p2s+1;
            document.getElementById("play2sco").innerHTML=p2s;
        }
    }
    if(quesstiont=="player1"){
        quesstiont="player2";
         document.getElementById("pq").innerHTML="Question turn : "+pl2;
    }
    else{
        quesstiont="player1";
        document.getElementById("pq").innerHTML="Question turn : "+pl1;
    }
    if(answert=="player1"){
        answert="player2";
        document.getElementById("pa").innerHTML="Answer turn : "+pl2;
    }
    else{
        answert="player1";
        document.getElementById("pa").innerHTML="Answer turn : "+pl1;
    }
    document.getElementById("output").innerHTML="";
}
