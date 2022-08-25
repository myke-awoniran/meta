import { Router } from 'express';

// APP-ROUTER FOR THE WHOLE APPLICATION

export class AppRouter {
  private static instance: Router;
  static getInstance(): Router {
    if (!AppRouter.instance) {
      AppRouter.instance = Router();
    }

    return AppRouter.instance;
  }
}
