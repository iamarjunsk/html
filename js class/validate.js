function validate_form(){
	var ph=document.f1.ph.value;
	var p1=document.f1.p1.value;
	var p2=document.f1.p2.value;
	if(isNaN(ph)){
		alert("Characters are not allowed in Phone Number!");
		return false;
	}
	else if(ph.length!=10){
		alert("Please enter 10 digits in phone number!");
		return false;
	}
	if(p1!=p2){
		alert("Passwords are not matching1");
		return false;
	}
}
