// this file is used to create a Prisma client instance that can be imported and used throughout the application.
import { PrismaClient } from "@prisma/client/extension";

// creates a new instance of the PrismaClient and returns it. 
// this allows us to use the Prisma client in other parts of our 
// application by importing this function and calling it to get a Prisma client instance.
const prismaClient = () => { // 
  const prisma = new PrismaClient();
  return prisma;
}

// this code checks if there is already a Prisma client instance stored in the global object.
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined };

// if there is no Prisma client instance in the global object, it creates a new one using the prismaClient function and assigns it to the global object.
const prisma = globalForPrisma.prisma ?? prismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

// finally, it exports the Prisma client instance so that it can be imported and used in other parts of the application.
export default prisma;