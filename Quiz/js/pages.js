app = document.getElementById('main');

qpage = `
<nav>
<button class='btnOrange btn' onclick="logpageadd()"> <-Back </button>
  <h4 id="dispName">
  </h4>
</nav>
<div class="container">
<div class="q-container" onload="loadq()">
  <div class="ques">
    <h4 >Q.<span id="q"></span></h4>
  </div>
  <div class="choice">
    <div onclick="selctans(this)" id="ch1" class='chs'></div>
    <div onclick="selctans(this)" id="ch2" class='chs'></div>
    <div onclick="selctans(this)" id="ch3" class='chs'></div>
    <div onclick="selctans(this)" id="ch4" class='chs'></div>
  </div>
  <div class="next">
    <div class="count"><span id='curq'>`+curq+`</span>/<span id='totq'>`+questions.length+`</span></div>
    <button id="nextB" onclick="checkans(this)" class="button">Next</button>
  </div>
</div>
</div>`;

rpage=`<div class="container">
<div class="nameBox">
<h4>
🎊 Congrats <span id='Rname'>Arjun</span>,
</h4>
<h4>
Your total score is <span id='RResult'>5</span>/<span id='totq'>`+questions.length+`</span> 🥳
</h4>
<button class='btnOrange btn' onclick="logpageadd()"> <-Back </button>

</div>
</div>`;

qadd=`<div class="container">
<div class="qaddCondiner">
<div class="qaddSec">
<button class='btnOrange btn' onclick="logpageadd()"> <-Back </button>
    <h2 class="qhead">
      ADD Question here.
    </h2>
    <div>
      Q<input type="text" class="inpQ" id='addQ' onchange="groupAns(this)"/>
    </div>
    <div>
      a<input type="text" class="inp" id="addA" onchange="groupAns(this)"/>
    </div>
    <div>
      b<input type="text" class="inp" id='addB' onchange="groupAns(this)"/>
    </div>
    <div>
      c<input type="text" class="inp" id='addC' onchange="groupAns(this)"/>
    </div>
    <div>
      d<input type="text" class="inp" id='addD' onchange="groupAns(this)"/>
    </div>
    <div>
      <select name="ans" id="ans" class="ans" onchange="groupAns(this)">
        <option value="">Select answer</option>
        
      </select>
    </div>
      
    <input type="button" value="ADD" class="btn" onclick="addQuestion()"/>
  </div>
  <div class="qdispSec">
    <h2 class="qhead">
      All questions
    </h2>
    <div id="qall">
      
    </div>
  </div>
</div>
</div>`;

logpage=`<div class="container">
<form class="nameBox" onsubmit="return checkAuth()">
  <h4>Welcome,</h4>
  <h4>Enter your name </h4>
  <div>
    <input type="text" name="" id="username" placeholder="username">
  </div>
  <div>
    <input type="password" name="" id="password" placeholder="password">
  </div>
  <button class='btn' type="submit">Submit</button>
</form>
</div>`;

function home(){
    console.log(user.name);
    app.innerHTML=qpage;
    loadq();
    document.getElementById('dispName').innerHTML=user.name;
    document.getElementById('totq').innerHTML=questions.length;
}

function Resultpage(){
  app.innerHTML=rpage;
  document.getElementById('Rname').innerHTML=user.name;
  document.getElementById('RResult').innerHTML=user.score;
  document.getElementById('totq').innerHTML=questions.length;
  console.log(user.score);
}
function qaddpage(){
  app.innerHTML=qadd;
  qdisplay();
}
function logpageadd(){
  app.innerHTML=logpage;
  user.score=0;
  curq=1;
}
app.innerHTML=logpage;