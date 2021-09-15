import * as dotenv from 'dotenv';
import app from './app';

dotenv.config();

const config = require('config');

const host = process.env.IP || config.get('web.host');
const port = process.env.PORT || config.get('web.port');

// Initialize main Application
const server = app.listen(port, () => {
  console.log(`server is running on http://${host}:${port}`);
});

export default server;
