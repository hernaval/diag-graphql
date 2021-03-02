import "reflect-metadata";
import {
    Resolver,
    Query,
    Ctx,
    Arg
} from "type-graphql";
import { PrismaClient } from "@prisma/client";
import bcrypt = require("bcryptjs");

import { LoginType } from "../types/login.type";
import logger from "../../utils/logger";

const Str = require('@supercharge/strings')

interface Context {
    prisma: PrismaClient;
}

// loginAdmin from BO
@Resolver(() => LoginType)
export class LoginAdminResolver {
    @Query(() => LoginType, { nullable: true })
    async loginAdmin(
        @Ctx() { prisma }: Context,
        @Arg('email') email?: string,
        @Arg('password') password?: string
    ): Promise<LoginType | null> {

        // ------ check user by email ------ //
        const user = await prisma.user.findFirst({
            where: {
                email
            },
        });

        // ------ set login log ------ //
        logger.info(`user ====> ${JSON.stringify(user)}`);

        // ------ check user by password ------ //
        const isPasswordValid = await bcrypt.compare(
            password.trim(),
            user.passwordHash
        );

        if (!isPasswordValid) {
            return {
                token: null
            };
        }

        return {
            token: Str.random(25)
        };

    }
}
