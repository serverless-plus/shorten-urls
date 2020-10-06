import { Request, Response, Application } from 'express';
import shortid from 'shortid';
import { Url } from '../models/Url';
import { isUri } from '../utils';
import * as homeController from '../controllers/home';

const baseUrl = process.env.BASE_URL as string;

const initRoutes = (app: Application): void => {
  app.get('/', homeController.index);

  // GET /:code
  app.get('/:code', async (req: Request, res: Response) => {
    try {
      const url = await Url.findOne({ where: { code: req.params.code } });

      if (url) {
        return res.redirect(url.longUrl);
      }
      return res.status(404).json('No url found');
    } catch (err) {
      console.error(err);
      res.status(500).json('Server error');
    }
  });

  // POST /api/short
  app.post('/api/short', async (req, res) => {
    const { longUrl } = req.body;

    // Check base url
    if (!isUri(baseUrl)) {
      return res.status(401).json({
        code: 1,
        error: {
          message: 'Invalid base url',
        },
      });
    }

    // Create url code
    const code = shortid.generate();

    // Check long url
    if (isUri(longUrl)) {
      try {
        let url = await Url.findOne({ where: { longUrl } });

        if (url) {
          res.json({
            code: 0,
            error: null,
            data: {
              url: url.shortUrl,
            },
          });
        } else {
          const shortUrl = baseUrl + '/' + code;

          url = await Url.create({
            longUrl,
            shortUrl,
            code,
          });

          res.json({
            code: 0,
            error: null,
            data: {
              url: shortUrl,
            },
          });
        }
      } catch (err) {
        console.error(err);
        res.status(500).json({
          code: 3,
          error: {
            message: 'Server error',
          },
        });
      }
    } else {
      res.status(401).json({
        code: 2,
        error: {
          message: 'Invalid long url',
        },
      });
    }
  });
};

export { initRoutes };
