import {z} from 'zod';

const registerUserSchema = z.object({
    first_name: z.string(),
    email: z.string().email(),
    password: z.string(),
})

export default registerUserSchema;