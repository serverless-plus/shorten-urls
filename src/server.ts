import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.join(__dirname, '..', '.env') });

import { app } from './app';
import { sequelize } from './sequelize';

const isDev = process.env.NODE_ENV === 'development';

/**
 * Start Express server.
 */
async function initServer() {
  await sequelize.sync({ force: isDev });
  const server = app.listen(app.get('port'), () => {
    console.log(
      '  App is running at http://localhost:%d in %s mode',
      app.get('port'),
      app.get('env'),
    );
    console.log('  Press CTRL-C to stop\n');
  });

  return server;
}

initServer();
