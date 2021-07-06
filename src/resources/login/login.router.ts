import { Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { JWT_SECRET_KEY } from '../../common/config';
import { getByLogin } from '../users/user.service';

const router = Router();

router.route('/').post(async (req, res) => {
  const user = await getByLogin(req.body.login);

  if (!user) {
    res.status(403).send({ error: 'User not found.' });
  } else {
    bcrypt.compare(req.body.password, user.password, (_, matches) => {
      if (matches) {
        const token = jwt.sign(
          { userId: user.id, login: user.login },
          JWT_SECRET_KEY as string,
          { expiresIn: 60 * 60 * 24 }
        );

        return res.json({
          message: 'Successfully authenticated.',
          token,
        });
      }

      return res.status(403).send({ error: 'Passwords do not match.' });
    });
  }
});

export default router;
