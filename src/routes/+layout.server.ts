import { PrismaClient } from '@prisma/client';
let prisma = new PrismaClient();
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals: { getSession },cookies }) => {
    const session = await getSession()

    let customer
    if (session?.user) {
      customer = await prisma.customer.findFirst({
            where: {
                email: session.user.email
            }
        });
    }
    return {
      customer,
      tempLastName: cookies.get('lname'),
      tempFirstName: cookies.get('fname'),
      session
    };
  }