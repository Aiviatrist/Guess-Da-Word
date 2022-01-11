function log(){
  var p1=document.getElementById("p1n").value;
    var p2=document.getElementById("p2n").value;
    localStorage.setItem("play1", p1);
    localStorage.setItem("play2", p2);
    window.location="game_page.html";
}

