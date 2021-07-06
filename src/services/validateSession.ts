import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import { JWT_SECRET_KEY } from '../common/config';
import { getById } from '../resources/users/user.service';

// eslint-disable-next-line consistent-return
const validateSession = (req: Request, res: Response, next: NextFunction) => {
  if (req.method === 'OPTIONS') {
    return next();
  }

  // eslint-disable-next-line dot-notation
  const authHeader = req.headers['authorization'];

  if (typeof authHeader !== 'string' || !authHeader) {
    return res.status(401).send({ auth: false, message: 'No token provided.' });
  }

  if (!JWT_SECRET_KEY) {
    return res.status(500).send({ auth: false, message: 'Smth went wrong.' });
  }

  const sessionToken = authHeader && authHeader.split(' ')[1];

  if (!sessionToken) {
    return res.status(401).send({ auth: false, message: 'No token provided.' });
  }

  jwt.verify(sessionToken, JWT_SECRET_KEY, async (err, decoded) => {
    if (err || !decoded) {
      return res.status(403).send({ error: 'token is invalid' });
    }

    // eslint-disable-next-line dot-notation
    const user = await getById(decoded['userId'] as string);

    if (!user) {
      return res.status(403).send({ error: 'no user found' });
    }

    return next();
  });
};

export { validateSession };
