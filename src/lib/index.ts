// place files you want to import through the `$lib` alias in this folder.
import { PrismaClient } from "@prisma/client";
export const prisma = new PrismaClient();

export type DJ_Product = {
        id: number,
        title: string,
        description: string,
        price: number,
        discountPercentage: number,
        rating: number,
        stock: number,
        brand: string,
        category: string,
        thumbnail: string,
        images: string[],
      }