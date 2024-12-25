import * as z from 'zod';
export const formSchema = z.object({
    name:z.string().optional(),
    email:z.string().optional(),
    phoneNumber:z.string().optional(),
    salesTeam:z.string().optional(),
    note:z.string().optional(),
    terms:z.boolean().optional(),
    
  });