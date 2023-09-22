const express = require('express'); 
const app = express();
const router = express.Router();

const usuarioRoute = require('./src/Routes/usuarioRoutes');
const cors = require('cors')

app.use(cors());
app.use(express.json());
app.use(usuarioRoute);

app.listen(8080, () => {
    console.log('Servidor OK')
});
