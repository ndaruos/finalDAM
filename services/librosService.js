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

//Crear libro nuevo

const crear = async(libro) => {

    const {data, error} = await supabase
    .from('libros')
    .insert(libro)
    .select()

    if (error) throw error;
    return data

}

const actualizar = async(libro) => {

    const {data, error} = await supabase
    .from('libros')
    .update(libro)
    .eq('libro_codigo', libro.libro_codigo)
    .select()

    if (error) throw error;
    return data
}

const eliminar = async(libro) => {

    const {data,error} = await supabase
    .from ('libros')
    .delete()
    .eq('libro_codigo', libro.libro_codigo)
    .select()

    if (error) throw error;
    return data
}


module.exports = { obtenerTodos, crear, actualizar, eliminar };