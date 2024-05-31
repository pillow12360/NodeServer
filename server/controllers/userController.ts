// controllers/userController.ts
import { Request, Response } from 'express';
import { User } from '../models/user';

export const getAllUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error: any) {
    // TypeScript 4.0 이상에서 'unknown' 타입 대신 'any' 사용
    res.status(500).send((error as Error).message);
  }
};

export const createUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error: any) {
    res.status(400).send((error as Error).message);
  }
};

export const getUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).send('User not found');
    }
  } catch (error: any) {
    res.status(500).send((error as Error).message);
  }
};

export const updateUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const updated = await User.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const updatedUser = await User.findByPk(req.params.id);
      res.json(updatedUser);
    } else {
      res.status(404).send('User not found');
    }
  } catch (error: any) {
    res.status(500).send((error as Error).message);
  }
};

export const deleteUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const deleted = await User.destroy({ where: { id: req.params.id } });
    if (deleted) {
      res.status(204).send('User deleted');
    } else {
      res.status(404).send('User not found');
    }
  } catch (error: any) {
    res.status(500).send((error as Error).message);
  }
};
