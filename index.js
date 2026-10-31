const express = require('express')

const app = express()
const cors = require('cors');

app.use(express.json())
app.use(cors()); 


 app.get('/', (req, res) => {
   res.json({ mensaje: 'Servidor Proyecto Final funcionando ✅' });
 });

require('dotenv').config();



app.use(
  '/api/libros',
  require('./routes/librosRoutes')
);


app.use(
  '/api/usuarios',
  require('./routes/usuariosRoutes')
);

app.listen(3000, () => {
  console.log('Servidor corriendo en puerto 3000. Proyecto Final');
});
