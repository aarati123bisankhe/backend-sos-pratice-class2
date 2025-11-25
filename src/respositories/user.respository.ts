import { User } from "../types/user.types";
 
export const users: User[] = [
  { id: "user1", username: 'john_doe', email: 'john@example.com', name: 'John Doe', age: 30 },
  { id: "user2", username: 'jane_smith', email: 'jane@example.com', name: 'Jane Smith', age: 25 },
];

export interface IUserRpository {
    getAllUser():User[];
    getUserById(id:String): User | undefined;
    createUser(user:User):User;
    updateUser(id:String,updatedUser: Partial<User>): User | undefined;
    deleteUser(id:String): User | undefined;
}

export class UserRepository implements IUserRpository{
     getAllUser(): User[] {
        return users;
    }
    getUserById(id: String): User | undefined {
        return users.find((user) => user.id === id);
    }
    createUser(user: User): User {
        users.push(user);
        return user; 
    }
    updateUser(id: String, updatedUser: Partial<User>): User | undefined {
        const index = users.findIndex((user) => user.id === id);
        if(index === -1) return undefined;

        users[index] = { ...users[index], ...updatedUser};
        return users[index];
    }
    deleteUser(id: String): User | undefined {
        const  index = users.findIndex((user) => user.id === id);
        if(index == -1) return undefined;

        users.splice(index,1);
    }
   
} 