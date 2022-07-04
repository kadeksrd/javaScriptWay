var character = 
document.getElementById("characters");
var block = 
document.getElementById("block");
    function jump(){
        if (character.classList!= "animate"){
            characters.classList.add("animate");
        }
        setTimeout(function(){
            characters.classList.remove("animate")
        },500)
}

var checkDead = setInterval(function(){
    var characterTOP =
    parseInt(window.getComputedStyle(character).getPropertyValue("top"));

    var blockleft =
    parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (blockleft<20 && blockleft>0 && characterTOP>=130){
        block.style.animation="none";
        block.style.display="none";
        alert ('u lose :( .');
    } 
},10);