import {z} from "zod";

export const userSchema = z.object({
    id: z.string(),
    username: z.string(),
    email: z.email(),
    name: z.string(),
    age: z.number().min(0),
});
export type User = z.infer<typeof userSchema>;

export type UserDocument = User & {
    _id: string;
    createdAt: Date;
    updatedAt: Date;
}