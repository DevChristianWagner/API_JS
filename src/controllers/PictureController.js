import multer from 'multer';
import multerConfig from '../config/multerConfig';

import Picture from '../models/Picture';

const upload = multer(multerConfig).single('picture');

class PictureController {
  index(req, res) {
    return upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({
          errors: [err.code],
        });
      }

      try {
        const { originalname, filename } = req.file;
        const { aluno_id } = req.body;
        const picture = await Picture.create({ originalname, filename, aluno_id });

        return res.json(picture);
      } catch (e) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }

    });
  }
}

export default new PictureController();
