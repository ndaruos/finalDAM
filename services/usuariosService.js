//Importamos el cliente supabase Supabase desde la carpeta de 
// configuración (/config/supabase). Es el que te permite enviar las consultas a tu base de datos en la nube.
const supabase = require("../config/supabase");


//Cuando el módulo se carga por primera vez muestra dicho mensaje de log. Es para confirmar que la capa de servicios se ejecutó OK.
console.log("Servicio Usuarios");

//Declara la función asíncrona login utilizando una función de flecha (arrow function). 
// Recibe dos parámetros: el nombre de usuario (usuario) y la contraseña (clave) que vienen desde el controlador. 
// Al ser async, permite usar await internamente para esperar las respuestas de la base de datos.

const login = async (usuario, clave) => {
    console.log(usuario)
    console.log(clave)
    
    const { data, error } = await supabase
        .from('usuarios')
        .select('*')
        .eq('usuario', usuario)
        .eq('clave', clave);

    if (error) throw error;
    return data;
};

module.exports = { login };