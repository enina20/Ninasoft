import { Request, Response } from 'express'; 
import Photo from '../models/photo';
import path from 'path';
import fs from 'fs-extra';


export async function getPhotos(req: Request, res: Response): Promise<Response> { 
  const photos = await Photo.find();
  return res.json(photos);
}

export async function getPhoto(req: Request, res: Response): Promise<Response> { 
  const id = req.params.id;
  const photo = await Photo.findById(id);
  return res.json(photo);
}

export async function createPhoto(req: Request, res: Response): Promise<Response> {
  
  const body = req.body;
  const photo = new Photo({
    title: body.title,
    description: body.description,
    imagePath: req.file.path
  });

  await photo.save();
 
  return res.json({
    message: 'guardando',
    photo
  });
}

export async function updatePhoto(req: Request, res: Response): Promise<Response>  { 
  const id = req.params.id;
  const { title, description } = req.body;
  console.log(title);
  
  const photo = await Photo.findByIdAndUpdate(id, { title, description }, {new: true});
  return res.json({
    message: 'Photo updated',
    photo
  });
}

export async function deletePhoto(req: Request, res: Response): Promise<Response>  { 
  const id = req.params.id;
  const photo = await Photo.findByIdAndRemove(id);
  if (photo) {
    fs.unlink(path.resolve(photo.imagePath));
  }
  return res.json({
    message: 'Photo deleted',
    photo
  });
}


