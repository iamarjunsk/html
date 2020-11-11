que={
    q:null,
    a:null,
    b:null,
    c:null,
    d:null,
    ans:null
}
function checkAuth(){
    uname = document.getElementById('username').value;
    pass = document.getElementById('password').value;
    console.log(uname+"--"+pass);
    if(ur=cheUsr(uname)){
        if(ur.password==pass){
            if(!ur.isadmin){
                user.name=ur.name;
                home();
            }
            else{
                qaddpage();
            }
        }
        else{
            document.getElementById('password').style.borderColor="red";
            
        }
    }
    else{
        document.getElementById('username').style.borderColor="red";
    }
    return false
}
function cheUsr(){
    for( ur in users){
        if(users[ur].username == uname){
            return users[ur]
        }
    }
    return false
}
function groupAns(a){
    if(a.id =="addQ") {que.q=a.value};
    if(a.id =="addA") {
        que.a=a.value;
        document.getElementById('ans').innerHTML+="<option value="+que.a+">"+que.a+"</option>"
    };
    if(a.id =="addB") {
        que.b=a.value;
        document.getElementById('ans').innerHTML+="<option value="+que.b+">"+que.b+"</option>"
    };
    if(a.id =="addC") {
        que.c=a.value;
        document.getElementById('ans').innerHTML+="<option value="+que.c+">"+que.c+"</option>"
    };
    if(a.id =="addD") {
        que.d=a.value;
        document.getElementById('ans').innerHTML+="<option value="+que.d+">"+que.d+"</option>"
    };
    if(a.id=="ans"){
        que.ans=a.value;
    }
 }

 function addQuestion(){
    console.log(que);
    questions.push(que);
    qdisplay();
    console.log(questions);
 }


function qdisplay(){
    document.getElementById('qall').innerHTML="";
    for(qq in questions){
        console.log(qq);
        document.getElementById('qall').innerHTML+="<div class='qs'>"+questions[qq].q+"</div>";
    }
}