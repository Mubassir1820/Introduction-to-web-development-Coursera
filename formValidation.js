function validateFirstName() {
	var Fname = document.getElementById('fname').value;
	
	if(Fname==''){
		alert('Name must be filled out');
		return false;
	}
}
function validateLastName() {
	var Lname = document.getElementById('lname').value;
	
	if(Lname=='') {
		document.getElementById('msg2').innerHTML = 'Please fill out the last name';
		return false;
	}
}