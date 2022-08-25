import { Request, Response } from 'express';

import { get, controller } from '../decorators/index.decorators';

@controller('/auth')
class loginController {
  @get('/login')
  login(req: Request, res: Response) {
    console.log(req.originalUrl);
    res.status(200).json({
      status: 'success',
      message: 'kindly login on this route',
    });
  }
}
