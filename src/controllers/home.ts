import { Request, Response } from 'express';

/**
 * GET /
 * Home page.
 */
export const index = (req: Request, res: Response) => {
  res.render('home', {
    title: 'Shorten Urls - Serverless',
    staticUrl: process.env.STATIC_URL || '',
    isDev: process.env.NODE_ENV === 'development',
  });
};
