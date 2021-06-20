import { PORT } from './common/config';
import { app } from './app';
import { connectToDatabase } from './services/db';
import { logger } from './services/logger';

(async () => {
  try {
    await connectToDatabase();

    app.listen(PORT, () =>
      logger.info(`App is running on http://localhost:${PORT}`)
    );
  } catch (error) {
    logger.error('Application startup failed', error);
  }
})();




