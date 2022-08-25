import { NextFunction, Request, Response } from 'express';
import { get } from '../decorators/routes.methods.';
import { controller } from '../decorators/controller.decorators';

@controller('')
class RootController {
  @get('/')
  RootRoute(req: Request, res: Response, next: NextFunction) {
    res.status(200).json({
      status: 'success',
      message: 'Welcome, this works',
    });
  }
}
