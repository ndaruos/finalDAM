const supabase = require("../config/supabase");

console.log("Servicio")

// Devolver todos
const obtenerTodos = async() => {
    const { data, error } = await supabase
    .from('libros')
    .select('*');
    if (error) throw error;
    return data;
};



module.exports = { obtenerTodos };