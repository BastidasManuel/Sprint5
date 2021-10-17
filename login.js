let registros = [{ correo: "juan@gmail.com", contrasena: "SecurePassword123" }];

function agregarRegistro() {
    function usuario(correo,contrasena){
        this.correo = correo;
        this.contrasena = contrasena;
    }
    var corHtml = document.getElementById("correo").value;
    var contHtml = document.getElementById("contrasena").value;
    let newusuario = new usuario(corHtml,contHtml);
    registros.push (newusuario);
}

function validarCAPTCHA(valor) {
    if(valor == ((12000/3)/4)){
        return true;
    }else{
        return false;
    }
}

function login() {
    var InCorreo = document.getElementById("correo").value;
    var InContrasena = document.getElementById("contrasena").value;
    var InCaptcha = document.getElementById("captcha").value;

    if (validarCAPTCHA(InCaptcha)){
        var rsCorreo = registros.find( user => user.correo === InCorreo );
        if (!(typeof rsCorreo === 'undefined')){
            if (rsCorreo.contrasena===InContrasena){
                return true;
            }else{
                return false;
            }
        }else{
            return false;
        }
    }else{
        return false;
    }
}

module.exports.login = login;
module.exports.registros = registros;
module.exports.validarCAPTCHA = validarCAPTCHA;
module.exports.agregarRegistro = agregarRegistro;

