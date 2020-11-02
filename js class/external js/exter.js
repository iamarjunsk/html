var s=true;
main = document.getElementById('main')
function swi(){
    if(s==true){
        main.className="dark"
        document.getElementById('swi').innerHTML="Switch to light mode"
    }
    else{
        main.className=null
        document.getElementById('swi').innerHTML="Switch to dark mode"
    }
    s=!s;
}