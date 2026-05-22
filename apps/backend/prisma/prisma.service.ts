// apps/backend/src/prisma/prisma.service.ts
import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    // Pass the connection string to the Prisma Client at runtime
    super({
      datasourceUrl: process.env.DATABASE_URL,
    });
  }

  async onModuleInit() {
    await this.$connect();
  }
}