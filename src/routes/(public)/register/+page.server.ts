import type { Actions, PageServerLoad } from './$types';
import z from 'zod';
import { message, superValidate } from 'sveltekit-superforms/server';
import { fail } from '@sveltejs/kit';
import {PrismaClient} from '@prisma/client';
let prisma = new PrismaClient();


const schema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email(),
    password: z.string().min(8),
  });
  export const load = (async () => {
    // Server API:
    const form = await superValidate(schema);
  
    // Unless you throw, always return { form } in load and form actions.
    return { form };
  });

export const actions: Actions = {
    register: async ({request,cookies}) => {
        const form = await superValidate(request, schema);
        // Convenient validation check:
        if (!form.valid) {
            // Again, return { form } and things will just work.
            return fail(400, { errors: form.errors });
        }else{
            cookies.delete('fname',{path:"/"});
            cookies.delete('lname',{path:"/"});
           cookies.set('fname',form.data.firstName,{path:"/", maxAge: 60 * 60 * 24});
            cookies.set('lname',form.data.lastName,{path:"/", maxAge: 60 * 60 * 24});
        }
        
      // TODO: Do something with the validated form.data
  
      // Yep, return { form } here too
      return { form };

    }
};