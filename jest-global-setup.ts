import 'dotenv/config';


process.env.DATABASE_URL = process.env.DATABASE_URL_TEST

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async () => {
  await prisma.$connect();
};

export const teardown = async () => {
  await prisma.$disconnect();
};