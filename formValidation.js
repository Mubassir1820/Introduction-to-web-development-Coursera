function validateFirstName() {
	var Fname = document.getElementById('fname').value;
	
	if(Fname==''){
		alert('name must be filled out');
		return false;
	}
}