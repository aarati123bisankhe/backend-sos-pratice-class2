import { Request, Response } from "express";
import { UserService } from "../services/user.service";
import { CreateUserDto, UpdateUserDto } from "../dtos/user.dto";

export class UserController {
  private service = new UserService();

  getAllUser(req: Request, res: Response) {
    const users = this.service.getAllUser();
    res.json(users);
  }

  getUserById(req: Request, res: Response) {
    try {
      const user = this.service.getUserById(req.params.id);
      if (!user) return res.status(404).json({ error: "User not found" });
      res.json(user);
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  }

  createUser(req: Request, res: Response) {
    try {
      const dto: CreateUserDto = req.body;
      const newUser = this.service.createUser(dto);
      res.status(201).json(newUser);
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  }

  updateUser(req: Request, res: Response) {
    try {
      const dto: UpdateUserDto = req.body;
      const updatedUser = this.service.updateUser(req.params.id, dto);
      res.json(updatedUser);
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  }

  deleteUser(req: Request, res: Response) {
    try {
      this.service.deleteUser(req.params.id);
      res.status(204).send();
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  }
} 