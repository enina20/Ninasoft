
import dotenv from 'dotenv'
import app from './app';
import { startConnection } from './database'

dotenv.config();

async function main() {
  startConnection();
  await app.listen(app.get('port'));

  console.log('Server on port', app.get('port')); 
}

main();
