import { PORT } from './common/config';
import { app } from './app';
import { connectToDatabase } from './services/db';
import { logger } from './services/logger';
import { create, getByLogin } from './resources/users/user.service';
import User from './resources/users/user.model';

(async () => {
  try {
    await connectToDatabase();

    const user = await getByLogin('admin');

    if (!user) {
      await create(new User({ login: 'admin', password: 'admin' }));
    }

    app.listen(PORT, () =>
      logger.info(`App is running on http://localhost:${PORT}`)
    );
  } catch (error) {
    logger.error('Application startup failed', error);
  }
})();
