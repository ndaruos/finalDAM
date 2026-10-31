const supabase = require("../config/supabase");

console.log("Servicio Usuarios");

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