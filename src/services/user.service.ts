import { UserRepository, IUserRpository } from "../respositories/user.respository";
import { User } from "../types/user.types";
import { CreateUserDto, UpdateUserDto } from "../dtos/user.dto";

const userRepository: IUserRpository = new UserRepository();

export class UserService {
  
  getAllUser(): User[] {
    return userRepository.getAllUser();
  }

  getUserById(id: string): User | undefined {
    const user = userRepository.getUserById(id);
    if (!user) throw new Error(`User with ID '${id}' not found`);
    return user;
  }

  createUser(dto: CreateUserDto): User {
    if (userRepository.getUserById(dto.id)) {
      throw new Error(`User with ID '${dto.id}' already exists`);
    }
    if (userRepository.getAllUser().some(u => u.username === dto.username)) {
      throw new Error(`Username '${dto.username}' already exists`);
    }
    if (userRepository.getAllUser().some(u => u.email === dto.email)) {
      throw new Error(`Email '${dto.email}' already exists`);
    }

    const newUser: User = {
      id: dto.id,
      username: dto.username,
      email: dto.email,
      name: dto.name,
      age: dto.age,
    };

    return userRepository.createUser(newUser);
  }

  updateUser(id: string, dto: UpdateUserDto): User | undefined {
    const user = userRepository.getUserById(id);
    if (!user) throw new Error(`User with ID '${id}' not found`);

    if (dto.username && userRepository.getAllUser().some(u => u.username === dto.username && u.id !== id)) {
      throw new Error(`Username '${dto.username}' already exists`);
    }
    if (dto.email && userRepository.getAllUser().some(u => u.email === dto.email && u.id !== id)) {
      throw new Error(`Email '${dto.email}' already exists`);
    }

    return userRepository.updateUser(id, dto);
  }

  deleteUser(id: string): void {
    const user = userRepository.getUserById(id);
    if (!user) throw new Error(`User with ID '${id}' not found`);
    userRepository.deleteUser(id);
  }
}