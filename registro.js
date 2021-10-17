globalThis.registros=[];
function agregarRegistro(){
  function Usuario(nombre,apellido,correo,telefono,contrasena){
    this.nombre=nombre;
    this.apellido=apellido;
    this.telefono=telefono;
    this.correo=correo;
    this.contrasena=contrasena;
  }
  var nombreForm = document.getElementById("nombre").value;
  var apellidoForm = document.getElementById("apellido").value;
  var telefonoForm = document.getElementById("telefono").value;
  var correoForm = document.getElementById("correo").value;
  var contrasenaForm = document.getElementById("contrasena").value;
  let nuevoUsuario = new Usuario(nombreForm,apellidoForm,correoForm,telefonoForm,contrasenaForm);
  registros.push(nuevoUsuario);
}
function ordenarArreglo(arreglo){
  arreglo.sort( (a,b) => { return a.apellido.localeCompare(b.apellido); } )
  console.log(arreglo);
  return arreglo;
}
function filtrarCorreo(arreglo){
  let filtroEmail = arreglo.filter((usuario)=>{
      if(usuario.correo.includes("gmail.com")){
        return usuario;
      }
    });
    console.log(filtroEmail);
    return filtroEmail;
}
module.exports.registros=registros;
module.exports.agregarRegistro=agregarRegistro;
module.exports.ordenarArreglo=ordenarArreglo;
module.exports.filtrarCorreo=filtrarCorreo;
