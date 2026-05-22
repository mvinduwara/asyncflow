// apps/backend/src/prisma/prisma.service.ts
import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import { config } from 'dotenv';

// 1. Force Node.js to load the variables from your .env file
config();

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    // 2. process.env.DATABASE_URL is now guaranteed to be populated
    const pool = new Pool({
      connectionString: process.env.DATABASE_URL,
    });

    const adapter = new PrismaPg(pool);

    super({ adapter });
  }

  async onModuleInit() {
    await this.$connect();
  }
}