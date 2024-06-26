import  express  from 'express';
import dotenv from 'dotenv'
import bodyParser from 'body-parser'


import user from './Routers/user';
import pedidos from './Routers/delivery';
import menu from './Routers/menu';

dotenv.config();
const app = express();
app.use(bodyParser.json());


app.use('/Pedidos', pedidos);
app.use('/Menu', menu);
app.use('/Inicio', user);

const PORT = process.env.PORT || 10101;

app.listen(PORT, () => {
  console.log("Servidor ejecutándose en el puerto: ", PORT);
}).on("error", (error) => {
  throw new Error(error.message);
});