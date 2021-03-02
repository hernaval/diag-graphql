const faker = require('faker');

import { PrismaClient } from "@prisma/client";
import moment = require("moment");
import env from "../utils/env";
import converters from "../utils/format";

const prisma = new PrismaClient();

async function main() {
    await prisma.$connect();

    await prisma.user.deleteMany({});

    const admin = await prisma.user.create({
        data: {
            email: env.SUPER_ADMIN_EMAIL,
            emailConfirmed: true,
            passwordHash: await converters.toHash(env.SUPER_ADMIN_PWD),
            username: faker.internet.userName(),
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            gender : faker.name.gender(),
            function : faker.name.jobType(),
            organisation : faker.company.companyName(),
            category : "d",
            activity : faker.name.jobArea(),
            companySize : "50 à 150",
            country : faker.address.country(),
            phone : faker.phone.phoneNumber(),
            status: "ACTIVATED",
            role: env.SUPER_ADMIN,
            createdDate: moment().format(),
            updatedDate: moment().format()
        },
    });

    const user = await prisma.user.create({
        data: {
            email: faker.internet.email(),
            emailConfirmed: true,
            passwordHash: await converters.toHash(env.SUPER_ADMIN_PWD),
            username: faker.internet.userName(),
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            gender : faker.name.gender(),
            function : faker.name.jobType(),
            organisation : faker.company.companyName(),
            category : "d",
            activity : faker.name.jobArea(),
            companySize : "10 à 20",
            country : faker.address.country(),
            phone : faker.phone.phoneNumber(),
            status: "ACTIVATED",
            role: env.SUPER_ADMIN,
            createdDate: moment().format(),
            updatedDate: moment().format()
        },
    });

    console.log({ admin, user });
}

main()
    .catch(e => console.error(e))
    .finally(async () => {
        await prisma.$disconnect();
    });
