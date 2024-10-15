let usuarios = [
    {
        nombre: "Jaime Zapata Valencia",
        correo: "jaimezapatav@gmail.com",
        contraseña: "1234567",
        profesion: "Developer",
        usuario: "admin"
    }

]

console.log(usuarios);


function iniciarSesion() {
    // console.log('Inicio de sesión')
    // let label = document.getElementById('label')
    // console.log(label)
    let usuario = document.getElementById("usuario").value
    let contrasena = document.getElementById("contrasena").value
    if (usuario == usuarios[0].usuario && contrasena == "1234") {
        console.log("Inicio de sesión")
    } else {
        console.log("Error de credenciales");
    }
}


let objeto = {
    nombre: "Jaime Zapata Valencia",
    correo: "jaimezapatav@gmail.com",
    contraseña: "1234567",
    profesion: "Developer",
    usuario: "admin"
}


console.log(objeto.nombre);
console.log(objeto.profesion);