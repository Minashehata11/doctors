let button=document.querySelector("button");
window.onscroll=function(){
    if(window.scrollY>=200){
        button.style.display="block";

    }
    else{
        button.style.display="none";
    }
}
button.onclick=function(){
    setTimeout(function(){window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth",
     }) },300);

}

//set
window.localStorage.setItem("color","yellow");
window.localStorage.color="yellow";
window.localStorage['color']="yellow";

//get
window.localStorage.getItem("color");

//rewmove 
//window.localStorage.removeItem(color);
//window.localStorage.clear()   //  deleted all values in localStorage....