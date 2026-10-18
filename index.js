const express = require('express')

const app = express()
const cors = require('cors');

app.use(express.json())
app.use(cors()); 

// Primera validación de conexión en local con el server app
 app.get('/', (req, res) => {
   res.json({ mensaje: 'Servidor Proyecto Final funcionando ✅' });
 });

require('dotenv').config();


//Vamos a ir hasta la tabla de libros en Supabase. 
app.use(
  '/api/libros',
  require('./routes/librosRoutes')
);

//Vamos a ir hasta la tabla de usuarios Supabase. 
app.use(
  '/api/usuarios',
  require('./routes/usuariosRoutes')
);

app.listen(3000, () => {
  console.log('Servidor corriendo en puerto 3000. Proyecto Final');
});
