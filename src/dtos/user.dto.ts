import {z} from 'zod';
import { userSchema } from '../types/user.types';
import { id } from 'zod/v4/locales';


export const CreateUserDto = userSchema;
export type CreateUserDto = z.infer<typeof CreateUserDto>;

export const UpdateUserDto = userSchema.partial();
export type UpdateUserDto = z.infer<typeof UpdateUserDto>;

export const getUserByIdDto = z.object({
    id: z.string()
});
export type getUserByIdDto = z.infer<typeof getUserByIdDto>;

export const deleteUserDto = z.object({
    id: z.string(),
})
export type deleteUserDto = z.infer<typeof deleteUserDto>;


export const getAllUsersDto = z.object();
export type getAllUsersDto = z.infer<typeof getAllUsersDto>;