import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { PrismaClient } from "@prisma/client";
import schema from "./graphql";
import env from "./utils/env";

interface Context {
    prisma: PrismaClient;
}

async function main() {

    const prisma = new PrismaClient();

    /**----------- load server -----------**/
    const server = new ApolloServer({
        schema: await schema(),
        playground: true,
        context: (): Context => ({ prisma }),
    });
    const { port } = await server.listen(env.PORT || 4002);
    console.log(`GraphQL is listening on ${port}!`);
}

main().catch(console.error);