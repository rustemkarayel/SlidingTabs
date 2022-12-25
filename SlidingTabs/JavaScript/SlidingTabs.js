function slider(id){
    var slider=document.getElementsByClassName("slider")[0];
    var clicked=document.getElementById(id);
    slider.style.left=clicked.offsetLeft+"px";
    var number=document.getElementById("number");
    clicked.childElementCount==2?number.style.color="white":number.style.color="black";
    clicked.childElementCount==2?number.style.backgroundColor="darkblue":number.style.backgroundColor="#d1cec7";
    for(var i = 0; i < 3; i++){
        var other = document.getElementsByClassName("menu-container")[0].children[i];
        other.style.color = "black";
        other.style.fontWeight="400";
    }
    clicked.style.color="#D1D9D7";
    slider.style.backgroundColor="black";
	clicked.style.transition="color 1s";
    clicked.style.fontWeight="999";
}