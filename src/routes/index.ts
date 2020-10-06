import { Router } from 'express';
import { createPhoto, getPhoto, getPhotos, updatePhoto, deletePhoto } from './../controllers/photo.controller'
import multer from "../libs/multer";


const router = Router();

router.route('/photos')
  .get(getPhotos)
  .post(multer.single('image'), createPhoto);

router.route('/photos/:id')
  .get(getPhoto)
  .put(updatePhoto)
  .delete(deletePhoto)

export default router;