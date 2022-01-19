function schmlasser(){
	var name = document.getElementById("name").value;
	var newName = "shmla" + name;

    document.getElementById('image').style.display = "block";
 	document.getElementById('btnID').style.display = "none";
 	
	document.writeln(newName);
}
