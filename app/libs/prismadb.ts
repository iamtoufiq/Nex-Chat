import { PrismaClient } from "@prisma/client"; //PrismaClient is used to interact with your database.

declare global {
  var prisma: PrismaClient | undefined; //variable named prisma in the global scope. This variable can either hold a PrismaClient instance or be undefined.
}

const client = globalThis.prisma || new PrismaClient(); //a constant named client is declared. It gets assigned the value of globalThis.prisma if it exists; otherwise, a new PrismaClient instance is created.

if (process.env.NODE_ENV !== "production") globalThis.prisma = client; //This line checks if the application is running in production mode. If it isn't (which usually means it's in development mode), the globalThis.prisma is assigned the value of client. This ensures that during development, you always use the same PrismaClient instance across all files, which helps avoid issues related to creating too many connections to the database.

export default client; //the client is exported so it can be imported and used in other parts of the application.
