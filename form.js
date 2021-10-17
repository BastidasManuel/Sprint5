function checkNombre(valor){	
	if((/[^A-Za-z]/.test(valor)) || valor.length<4 || valor.length == 0 || (!(isNaN(valor))) || valor.length>30){
		return false;
	}else{
		return true;
	}
}
function checkApellido(valor){
	if((/[^A-Za-z]/.test(valor)) || valor.length<4 || valor.length == 0  || (!(isNaN(valor))) || valor.length>30){
		return false;
	}else{
		return true;
	}
}
function checkTelefono(valor){
	if( !(/^\d{7}$/.test(valor)) || isNaN(valor) || valor.length == 0 ) {
		return false;
	}else{
		return true;
	}
}
function checkCorreo(valor){
    if (!/^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i.test(valor) || valor.length == 0 ){
	    return false;
	}else{
		return true;
	}
}
function checkContrasena(valor){
	if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,30}$/.test(valor) || valor.length == 0 ){
	    return false;
	}else{
		return true;
	}	
}
module.exports ={checkNombre,checkTelefono,checkCorreo,checkContrasena,checkApellido}

