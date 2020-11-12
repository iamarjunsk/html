function loadElem(){
    q_tag=document.getElementById('q');
    ch1_tag=document.getElementById('ch1');
    ch2_tag=document.getElementById('ch2');
    ch3_tag=document.getElementById('ch3');
    ch4_tag=document.getElementById('ch4');
    
    allch = document.getElementsByClassName('chs');
    
    nextB = document.getElementById('nextB');

}
qindex=0;
let ch,qn;

function loadq(){
    loadElem();
    qindex=0;
    qn=questions[0];
    q_tag.innerHTML=qn.q;
    ch1_tag.innerHTML=qn.a;
    ch2_tag.innerHTML=qn.b;
    ch3_tag.innerHTML=qn.c;
    ch4_tag.innerHTML=qn.d;
    console.log(nextB);
    nextB.disabled = true;
    checkfinal();
}
function selctans(a){
    nextB.disabled = false;
    ch = a.innerHTML;
    for (i=0; i<4; ++i){
        allch[i].style.backgroundColor="#fff";
        allch[i].style.color="rgb(34, 111, 124)";

    }
    a.style.backgroundColor="blue";
    a.style.color="white";
    
}
function checkans(a){
    if(a.innerHTML=='Finish'){
        if(ch === qn.ans){
            user.score+=1;
            console.log(user.score);
        }
        console.log(user.score);
        Resultpage();
    }
    else{
        // console.log(ch+" -- "+qn.ans);
        if(ch === qn.ans){
            user.score+=1;
            console.log(user.score);
        }
        loadNextQ()
    }
}

function checkfinal(){
    console.log(curq+" "+questions.length);
    if (curq == questions.length){
        console.log('f');
        nextB.innerHTML="Finish";
    }
}
function loadNextQ(){
    for (i=0; i<4; ++i){
        allch[i].style.backgroundColor="#fff";
        allch[i].style.color="rgb(34, 111, 124)";

    }
    nextB.disabled = true;
    qindex+=1;
    qn=questions[qindex];
    q_tag.innerHTML=qn.q;
    ch1_tag.innerHTML=qn.a;
    ch2_tag.innerHTML=qn.b;
    ch3_tag.innerHTML=qn.c;
    ch4_tag.innerHTML=qn.d;
    curq+=1;
    document.getElementById('curq').innerHTML=curq;
    checkfinal();
}