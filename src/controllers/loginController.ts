import { Request, Response } from 'express';
import { get, controller } from '../decorators/index.decorators';

// console.log(get, controller);
@controller('/auth')
class LoginController {
  @get('/login')
  login(req: Request, res: Response) {
    res.status(200).json({
      status: 'success',
      message: 'kindly login on this route',
    });
  }
}
