var light = document.getElementById("1");
var flag = false;
light.onclick = function(){
    if(flag){
        light.src = "image/1.png";
        flag = false;
    }else{
        light.src = "image/2.png";
        flag = true;
    }
}