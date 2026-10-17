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

app.use(
  '/api/libros',
  require('./routes/librosRoutes')
);


app.listen(3000, () => {
  console.log('Servidor corriendo en puerto 3000. Proyecto Final');
});
