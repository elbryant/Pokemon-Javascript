document.getElementById("fight").onclick = function() {
    var randomLeftNumber = Math.floor(Math.random()*6);
    //var randomRightNumber = Math.floor(Math.random()*7)+7;
    
    alert(randomLeftNumber);
    //alert(randomRightNumber);
    
    if (randomLeftNumber==0) {
        document.getElementById("electric1").style.display = "block";
    } else if (randomLeftNumber==1) {
        document.getElementById("fighting1").style.display = "block";
    } else if (randomLeftNumber==2) {
        document.getElementById("fire1").style.display = "block";
    } else if (randomLeftNumber==3) {
        document.getElementById("water1").style.display = "block";
    } else if (randomLeftNumber==4) {
        document.getElementById("psychic1").style.display = "block";
    } else if (randomLeftNumber==5) {
        document.getElementById("rock1").style.display = "block";
    } else if (randomLeftNumber==6) {
        document.getElementById("grass1").style.display = "block";
    } else {
        alert("An error has occurred");
    }
    
    /*if (randomRightNumber==7) {
        document.getElementById("electric2").style.display = "inline";
    } else if (randomRightNumber==8) {
        document.getElementById("fighting2").style.display = "inline";
    } else if (randomRightNumber==9) {
        document.getElementById("fire2").style.display = "inline";
    } else if (randomRightNumber==10) {
        document.getElementById("water2").style.display = "inline";
    } else if (randomRightNumber==11) {
        document.getElementById("psychic2").style.display = "inline";
    } else if (randomRightNumber==12) {
        document.getElementById("rock2").style.display = "inline";
    } else if (randomRightNumber==13) {
        document.getElementById("grass2").style.display = "inline";
    } else {
        alert("An error has occurred");
    }*/
}
