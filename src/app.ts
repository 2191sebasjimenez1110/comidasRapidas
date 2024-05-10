import  express  from 'express';
import dotenv from 'dotenv'
import bodyParser from 'body-parser'

import auth from './Routers/auht';
import register from './Routers/register';
import pedidos from './Routers/pedido';
import product from './Routers/product';

dotenv.config();
const app = express();
app.use(bodyParser.json());

app.use('/auth',auth);
app.use('/pedidos', pedidos);
app.use('/product', product);
app.use('/register', register);

const PORT = process.env.PORT || 10101;

app.listen(PORT, () => {
  console.log("Servidor ejecutándose en el puerto: ", PORT);
}).on("error", (error) => {
  throw new Error(error.message);
});