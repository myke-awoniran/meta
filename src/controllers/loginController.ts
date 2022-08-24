import { get, controller } from '../decorators/index.decorators';
import { Request, Response } from 'express';

@controller('/auth')
class loginController {
  @get('/login')
  login(req: Request, res: Response) {
    res.status(200).json({
      message: 'kindly login on this route',
      path: req.get('path'),
    });
  }
}
